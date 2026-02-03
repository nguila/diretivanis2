import { nis2Stages } from "@/data/nis2Stages";

const ProgressIndicator = () => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Progresso de Implementação
      </h3>
      
      <div className="flex items-center justify-between gap-2">
        {nis2Stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div 
                className={`stage-indicator ${stage.colorClass} text-sm`}
              >
                {stage.id}
              </div>
              <span className="text-xs text-muted-foreground mt-2 text-center hidden md:block">
                {stage.title.split(" ")[0]}
              </span>
            </div>
            
            {index < nis2Stages.length - 1 && (
              <div className="h-0.5 flex-1 bg-border mx-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
