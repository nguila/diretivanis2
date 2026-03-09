import euFlag from "@/assets/eu-flag.png";
import ptFlag from "@/assets/pt-flag.png";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-primary-foreground pt-24 pb-20 px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Flags */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src={euFlag}
                alt="Bandeira da União Europeia"
                className="w-12 h-8 object-cover rounded shadow-lg border border-white/20"
              />
              <img
                src={ptFlag}
                alt="Bandeira de Portugal"
                className="w-12 h-8 object-cover rounded shadow-lg border border-white/20"
              />
              <span className="text-white/60 text-sm ml-1">EU × PT</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90">Em vigor desde Dezembro 2025</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Diretiva NIS2
              <span className="block text-white/60 text-3xl sm:text-4xl lg:text-5xl font-light mt-1">
                Cibersegurança na UE
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Guia completo para implementação do <strong className="text-white">Decreto-Lei n.º 125/2025</strong> — 
              Transposição da Diretiva (UE) 2022/2555 em Portugal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/etapas">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-xl shadow-lg">
                  Ver Etapas de Implementação
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/checklist">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 rounded-xl">
                  <FileText className="w-4 h-4" />
                  Checklist Interativa
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              { label: "Diploma", value: "DL 125/2025", sub: "4 de Dezembro", color: "from-blue-500/20 to-blue-600/20", icon: FileText },
              { label: "Diretiva UE", value: "2022/2555", sub: "NIS2", color: "from-indigo-500/20 to-indigo-600/20", icon: Shield },
              { label: "Etapas", value: "6 Fases", sub: "Implementação", color: "from-teal-500/20 to-teal-600/20", icon: AlertTriangle },
              { label: "Prazo Base", value: "6 Meses", sub: "Adaptação", color: "from-purple-500/20 to-purple-600/20", icon: Shield },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${card.color} backdrop-blur-sm border border-white/10 rounded-2xl p-5`}
                  style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                >
                  <Icon className="w-5 h-5 text-white/50 mb-3" />
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">{card.label}</p>
                  <p className="font-bold text-xl text-white">{card.value}</p>
                  <p className="text-xs text-white/50 mt-1">{card.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
