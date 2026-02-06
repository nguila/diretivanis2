import euFlag from "@/assets/eu-flag.png";
import ptFlag from "@/assets/pt-flag.png";

const Header = () => {
  return (
    <header className="hero-gradient text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Flags and Title Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <img 
              src={euFlag} 
              alt="Bandeira da União Europeia" 
              className="w-16 h-11 object-cover rounded-md shadow-lg border border-white/20"
            />
            <img 
              src={ptFlag} 
              alt="Bandeira de Portugal" 
              className="w-16 h-11 object-cover rounded-md shadow-lg border border-white/20"
            />
          </div>
          
          <div className="h-12 w-px bg-white/30 hidden md:block" />
          
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Diretiva da União Europeia sobre Cibersegurança
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mt-1">
              Decreto-Lei n.º 125/2025 | Diretiva NIS2
            </p>
          </div>
        </div>
        
        {/* Description and Info Cards */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg md:text-xl font-light max-w-3xl leading-relaxed text-primary-foreground/90">
            Novo regime jurídico da cibersegurança — Transposição da Diretiva (UE) 2022/2555
          </p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <span className="text-xs uppercase tracking-wider opacity-70">Diploma</span>
              <p className="font-semibold text-lg">DL 125/2025</p>
              <span className="text-xs opacity-60">4 de Dezembro</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <span className="text-xs uppercase tracking-wider opacity-70">Diretiva UE</span>
              <p className="font-semibold text-lg">2022/2555</p>
              <span className="text-xs opacity-60">NIS2</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <span className="text-xs uppercase tracking-wider opacity-70">Implementação</span>
              <p className="font-semibold text-lg">6 Etapas</p>
              <span className="text-xs opacity-60">Fases Principais</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;