import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { nis2Stages } from "@/data/nis2Stages";
import { Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const timelineColors = [
  "border-blue-500 bg-blue-500",
  "border-sky-500 bg-sky-500",
  "border-teal-500 bg-teal-500",
  "border-green-500 bg-green-500",
  "border-emerald-500 bg-emerald-500",
  "border-amber-500 bg-amber-500",
];

const timelineOffsets = [
  "Mês 1-2",
  "Mês 3-5",
  "Mês 5-8",
  "Mês 6-12",
  "Mês 8-10",
  "Contínuo",
];

const TimelinePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="hero-gradient text-primary-foreground pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Timeline de Implementação
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Calendário recomendado para implementação faseada da NIS2 na sua organização.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Gantt-style summary */}
        <div className="bg-card rounded-2xl shadow-card border border-border p-6 mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-5">
            Visão Geral do Calendário
          </h2>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header months */}
              <div className="flex gap-1 mb-3 ml-32">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="flex-1 text-center text-xs text-muted-foreground font-medium"
                  >
                    M{i + 1}
                  </div>
                ))}
              </div>

              {/* Stage rows */}
              {[
                { start: 0, span: 2 },
                { start: 2, span: 3 },
                { start: 4, span: 4 },
                { start: 5, span: 6 },
                { start: 7, span: 3 },
                { start: 0, span: 12 },
              ].map((bar, i) => {
                const stage = nis2Stages[i];
                return (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <div className="w-28 shrink-0 flex items-center gap-2">
                      <div className={`stage-indicator ${stage.colorClass} text-xs w-7 h-7`}>
                        {stage.id}
                      </div>
                      <span className="text-xs text-muted-foreground truncate">
                        {stage.title.split(" ")[0]}
                      </span>
                    </div>
                    <div className="flex-1 flex gap-1 relative">
                      {Array.from({ length: 12 }, (_, m) => (
                        <div
                          key={m}
                          className={`flex-1 h-6 rounded-sm transition-colors ${
                            m >= bar.start && m < bar.start + bar.span
                              ? `${timelineColors[i]} opacity-80`
                              : "bg-secondary"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span>M = Mês após início da implementação</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8">
            {nis2Stages.map((stage, index) => {
              const Icon = stage.icon;
              const colorParts = timelineColors[index].split(" ");
              const borderColor = colorParts[0];
              const bgColor = colorParts[1];

              return (
                <div
                  key={stage.id}
                  className="sm:pl-20 relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Circle on line */}
                  <div
                    className={`absolute left-5 top-6 w-7 h-7 rounded-full ${bgColor} flex items-center justify-center text-white text-xs font-bold hidden sm:flex z-10`}
                  >
                    {stage.id}
                  </div>

                  {/* Card */}
                  <div className={`bg-card rounded-2xl border-l-4 ${borderColor} border border-border shadow-card p-6`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`stage-indicator ${stage.colorClass} sm:hidden`}>
                            {stage.id}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {stage.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">{stage.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {stage.overview}
                        </p>

                        {/* Procedures list */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {stage.procedures.map((proc, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                            >
                              {proc.title}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {stage.timeline}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            {stage.responsibles.join(", ")}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            {stage.procedures.length} procedimentos
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 text-center">
                        <div className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-sm font-medium ${bgColor} opacity-90`}>
                          <Clock className="w-3.5 h-3.5" />
                          {timelineOffsets[index]}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow between stages */}
                  {index < nis2Stages.length - 1 && (
                    <div className="flex justify-center sm:justify-start sm:pl-0 mt-2">
                      <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Acompanhe o progresso de cada etapa com a checklist interativa
          </p>
          <Link
            to="/checklist"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            Ir para a Checklist
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TimelinePage;
