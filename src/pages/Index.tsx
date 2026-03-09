import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgressIndicator from "@/components/ProgressIndicator";
import QuickLinks from "@/components/QuickLinks";
import StageCard from "@/components/StageCard";
import Footer from "@/components/Footer";
import { nis2Stages } from "@/data/nis2Stages";
import { ArrowRight, CheckCircle, Shield, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const highlightStats = [
  {
    icon: Shield,
    value: "6",
    label: "Etapas de Implementação",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Users,
    value: "2",
    label: "Tipos de Entidades",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: AlertTriangle,
    value: "24h",
    label: "Prazo Alerta Incidente",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: CheckCircle,
    value: "20+",
    label: "Procedimentos Guiados",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 -mt-8 relative z-10">
          {highlightStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-card rounded-2xl shadow-card p-5 flex items-center gap-4 border border-border">
                <div className={`p-3 rounded-xl ${stat.bg} shrink-0`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <ProgressIndicator />
        <QuickLinks />

        {/* Stages Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Etapas de Implementação
            </h2>
            <Link
              to="/etapas"
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Ver todas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {nis2Stages.slice(0, 3).map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                index={index}
              />
            ))}
          </div>

          {/* See more CTA */}
          <div className="mt-6 text-center">
            <Link
              to="/etapas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 font-medium transition-colors text-sm"
            >
              Ver as 6 etapas completas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="mt-12 hero-gradient rounded-2xl p-8 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-2">Pronto para começar?</h3>
          <p className="text-white/80 mb-6">
            Use a nossa checklist interativa para acompanhar o progresso da sua organização
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/checklist"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              Iniciar Checklist
            </Link>
            <Link
              to="/timeline"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 font-medium transition-colors"
            >
              Ver Timeline
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
