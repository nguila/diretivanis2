import Header from "@/components/Header";
import ProgressIndicator from "@/components/ProgressIndicator";
import QuickLinks from "@/components/QuickLinks";
import StageCard from "@/components/StageCard";
import { nis2Stages } from "@/data/nis2Stages";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <ProgressIndicator />
        <QuickLinks />
        
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Etapas de Implementação
          </h2>
          
          <div className="space-y-4">
            {nis2Stages.map((stage, index) => (
              <StageCard 
                key={stage.id} 
                stage={stage} 
                index={index}
              />
            ))}
          </div>
        </section>
        
        <footer className="mt-12 py-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            Esta estrutura é fornecida como guia de referência. Consulte sempre as autoridades competentes e especialistas jurídicos para garantir total conformidade.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
