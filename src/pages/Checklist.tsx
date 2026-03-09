import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { nis2Stages } from "@/data/nis2Stages";
import {
  CheckSquare,
  Square,
  RotateCcw,
  Download,
  Trophy,
  BarChart2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  stageId: number;
  stageTitle: string;
  procedureTitle: string;
  detail: string;
  checked: boolean;
}

const buildChecklist = (): ChecklistItem[] => {
  const items: ChecklistItem[] = [];
  nis2Stages.forEach((stage) => {
    stage.procedures.forEach((procedure) => {
      procedure.details.forEach((detail, idx) => {
        items.push({
          id: `${stage.id}-${procedure.title}-${idx}`,
          stageId: stage.id,
          stageTitle: stage.title,
          procedureTitle: procedure.title,
          detail,
          checked: false,
        });
      });
    });
  });
  return items;
};

const STORAGE_KEY = "nis2-checklist";

const ChecklistPage = () => {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as ChecklistItem[];
        return parsed;
      }
    } catch {}
    return buildChecklist();
  });

  const [expandedStages, setExpandedStages] = useState<Set<number>>(
    new Set([1])
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const toggleStage = (stageId: number) => {
    setExpandedStages((prev) => {
      const next = new Set(prev);
      if (next.has(stageId)) next.delete(stageId);
      else next.add(stageId);
      return next;
    });
  };

  const reset = () => {
    if (confirm("Tem a certeza que deseja reiniciar a checklist?")) {
      setItems(buildChecklist());
    }
  };

  const total = items.length;
  const checked = items.filter((i) => i.checked).length;
  const progress = total > 0 ? Math.round((checked / total) * 100) : 0;

  const stageProgress = nis2Stages.map((stage) => {
    const stageItems = items.filter((i) => i.stageId === stage.id);
    const stageChecked = stageItems.filter((i) => i.checked).length;
    return {
      stage,
      total: stageItems.length,
      checked: stageChecked,
      pct: stageItems.length > 0 ? Math.round((stageChecked / stageItems.length) * 100) : 0,
    };
  });

  const getProgressColor = (pct: number) => {
    if (pct === 100) return "bg-green-500";
    if (pct >= 60) return "bg-blue-500";
    if (pct >= 30) return "bg-amber-500";
    return "bg-red-400";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="hero-gradient text-primary-foreground pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Checklist Interativa
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Acompanhe o progresso de implementação da NIS2 na sua organização.
            O seu progresso é guardado automaticamente.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Progress Overview */}
        <div className="bg-card rounded-2xl shadow-card border border-border p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              {progress === 100 ? (
                <Trophy className="w-8 h-8 text-amber-500" />
              ) : (
                <BarChart2 className="w-8 h-8 text-primary" />
              )}
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {progress === 100
                    ? "🎉 Conformidade Completa!"
                    : "Progresso Global"}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {checked} de {total} itens concluídos
                </p>
              </div>
            </div>
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </button>
          </div>

          {/* Global Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progresso total</span>
              <span className="font-medium text-foreground">{progress}%</span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getProgressColor(progress)}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Per-stage progress */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {stageProgress.map(({ stage, total: st, checked: sc, pct }) => (
              <button
                key={stage.id}
                onClick={() => toggleStage(stage.id)}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className={`stage-indicator ${stage.colorClass} text-xs`}>
                  {stage.id}
                </div>
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${getProgressColor(pct)}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{pct}%</span>
              </button>
            ))}
          </div>
        </div>

        {/* Checklist by Stage */}
        <div className="space-y-4">
          {stageProgress.map(({ stage, total: st, checked: sc, pct }) => {
            const Icon = stage.icon;
            const isExpanded = expandedStages.has(stage.id);
            const stageItems = items.filter((i) => i.stageId === stage.id);

            // Group by procedure
            const byProcedure: Record<string, ChecklistItem[]> = {};
            stageItems.forEach((item) => {
              if (!byProcedure[item.procedureTitle]) byProcedure[item.procedureTitle] = [];
              byProcedure[item.procedureTitle].push(item);
            });

            return (
              <div
                key={stage.id}
                className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
              >
                {/* Stage Header */}
                <button
                  onClick={() => toggleStage(stage.id)}
                  className="w-full p-5 flex items-center gap-4 text-left hover:bg-secondary/20 transition-colors"
                >
                  <div className={`stage-indicator ${stage.colorClass} shrink-0`}>
                    {stage.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{stage.title}</h3>
                        <p className="text-sm text-muted-foreground">{stage.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`text-sm font-medium px-3 py-1 rounded-full ${
                            pct === 100
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {sc}/{st}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${getProgressColor(pct)}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Checklist Items */}
                {isExpanded && (
                  <div className="border-t border-border px-5 pb-5 pt-4 space-y-5">
                    {Object.entries(byProcedure).map(([procedureTitle, procedureItems]) => (
                      <div key={procedureTitle}>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {procedureTitle}
                        </h4>
                        <div className="space-y-2 ml-4">
                          {procedureItems.map((item) => (
                            <label
                              key={item.id}
                              className="flex items-start gap-3 cursor-pointer group"
                            >
                              <button
                                onClick={() => toggle(item.id)}
                                className="mt-0.5 shrink-0"
                              >
                                {item.checked ? (
                                  <CheckSquare className="w-5 h-5 text-green-500" />
                                ) : (
                                  <Square className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                )}
                              </button>
                              <span
                                className={`text-sm leading-relaxed transition-colors ${
                                  item.checked
                                    ? "line-through text-muted-foreground"
                                    : "text-foreground group-hover:text-primary"
                                }`}
                              >
                                {item.detail}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChecklistPage;
