import { useState } from "react";
import { ChevronDown, Clock, Users, CheckCircle2 } from "lucide-react";
import { Stage } from "@/data/nis2Stages";
import ProcedureItem from "./ProcedureItem";

interface StageCardProps {
  stage: Stage;
  index: number;
}

const StageCard = ({ stage, index }: StageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = stage.icon;

  return (
    <div 
      className="animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className={`
          bg-card rounded-2xl shadow-card transition-all duration-300
          ${isExpanded ? 'shadow-hover ring-2 ring-primary/20' : 'hover:shadow-hover'}
        `}
      >
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-start gap-4 text-left"
        >
          <div className={`stage-indicator ${stage.colorClass} shrink-0`}>
            {stage.id}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {stage.title}
                </h3>
                <p className="text-muted-foreground">
                  {stage.subtitle}
                </p>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                <div className={`p-2 rounded-lg bg-secondary`}>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{stage.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{stage.responsibles.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>{stage.procedures.length} procedimentos</span>
              </div>
            </div>
          </div>
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="px-6 pb-6 animate-scale-in">
            <div className="border-t border-border pt-6">
              {/* Overview */}
              <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-foreground mb-2">Visão Geral</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {stage.overview}
                </p>
              </div>
              
              {/* Procedures */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Procedimentos</h4>
                {stage.procedures.map((procedure, idx) => (
                  <ProcedureItem 
                    key={idx} 
                    procedure={procedure} 
                    stageColor={stage.colorClass}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StageCard;
