import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="hero-gradient text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6 animate-fade-in">
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
            <Shield className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Diretiva NIS2
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Network and Information Security Directive
            </p>
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            Estrutura de implementação para conformidade com a diretiva europeia de cibersegurança
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Prazo de Transposição</span>
              <p className="font-semibold">17 Outubro 2024</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Aplicação</span>
              <p className="font-semibold">União Europeia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Etapas</span>
              <p className="font-semibold">6 Fases Principais</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
