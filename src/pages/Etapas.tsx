import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StageCard from "@/components/StageCard";
import { nis2Stages } from "@/data/nis2Stages";
import { Search, Filter, Clock, Users, ChevronDown } from "lucide-react";

const EtapasPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const filteredStages = nis2Stages.filter((stage) => {
    const query = searchTerm.toLowerCase();
    return (
      stage.title.toLowerCase().includes(query) ||
      stage.subtitle.toLowerCase().includes(query) ||
      stage.overview.toLowerCase().includes(query) ||
      stage.procedures.some(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    );
  });

  const displayStages = selectedStage
    ? filteredStages.filter((s) => s.id === selectedStage)
    : filteredStages;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <div className="hero-gradient text-primary-foreground pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Etapas de Implementação
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            As 6 fases estruturadas para conformidade com o DL 125/2025 e a Diretiva NIS2 da União Europeia.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar etapas, procedimentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          {/* Stage Filter Buttons */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedStage(null)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                selectedStage === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              Todas
            </button>
            {nis2Stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() =>
                  setSelectedStage(selectedStage === stage.id ? null : stage.id)
                }
                className={`w-9 h-9 rounded-xl text-sm font-bold transition-colors ${
                  selectedStage === stage.id
                    ? `${stage.colorClass} text-white`
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {stage.id}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        {searchTerm && (
          <p className="text-sm text-muted-foreground mb-4">
            {displayStages.length} resultado(s) para "{searchTerm}"
          </p>
        )}

        {/* Overview Cards (when no filter) */}
        {!selectedStage && !searchTerm && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {nis2Stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className="bg-card border border-border rounded-2xl p-5 text-left hover:shadow-hover hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`stage-indicator ${stage.colorClass} shrink-0 text-sm`}>
                      {stage.id}
                    </div>
                    <div className={`p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors`}>
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{stage.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{stage.subtitle}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {stage.timeline}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {stage.procedures.length} proc.
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Stages List */}
        <div className="space-y-4">
          {displayStages.length > 0 ? (
            displayStages.map((stage, index) => (
              <StageCard key={stage.id} stage={stage} index={index} />
            ))
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">Nenhum resultado encontrado</p>
              <p className="text-sm mt-1">Tente pesquisar por outros termos</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EtapasPage;
