import { Shield } from "lucide-react";
import euFlag from "@/assets/eu-flag.png";
import ptFlag from "@/assets/pt-flag.png";

const Header = () => {
  return (
    <header className="hero-gradient text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6 animate-fade-in">
          <div className="flex items-center gap-2">
            <img 
              src={euFlag} 
              alt="Bandeira da União Europeia" 
              className="w-14 h-10 object-cover rounded shadow-md"
            />
            <img 
              src={ptFlag} 
              alt="Bandeira de Portugal" 
              className="w-14 h-10 object-cover rounded shadow-md"
            />
          </div>
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
            <Shield className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Diretiva da União Europeia sobre Cibersegurança
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Decreto-Lei n.º 125/2025 | Diretiva NIS2
            </p>
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            Novo regime jurídico da cibersegurança - Transposição da Diretiva (UE) 2022/2555
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Diploma</span>
              <p className="font-semibold">DL 125/2025, 4 Dez</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Diretiva UE</span>
              <p className="font-semibold">2022/2555 (NIS2)</p>
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
