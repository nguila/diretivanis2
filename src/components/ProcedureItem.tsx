import { useState } from "react";
import { ChevronRight, CheckSquare } from "lucide-react";
import { Procedure } from "@/data/nis2Stages";

interface ProcedureItemProps {
  procedure: Procedure;
  stageColor: string;
}

const ProcedureItem = ({ procedure, stageColor }: ProcedureItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center gap-3 text-left hover:bg-secondary/30 transition-colors"
      >
        <ChevronRight 
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
        <div className="flex-1">
          <h5 className="font-medium text-foreground">{procedure.title}</h5>
          <p className="text-sm text-muted-foreground">{procedure.description}</p>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 animate-scale-in">
          <div className="ml-8 space-y-2">
            {procedure.details.map((detail, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 text-sm"
              >
                <CheckSquare className={`w-4 h-4 mt-0.5 shrink-0 text-accent`} />
                <span className="text-muted-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcedureItem;
