import { ExternalLink, FileText, HelpCircle, Scale } from "lucide-react";

const quickLinks = [
  {
    icon: FileText,
    title: "Texto Oficial",
    description: "Diretiva (UE) 2022/2555",
    url: "https://eur-lex.europa.eu/eli/dir/2022/2555"
  },
  {
    icon: Scale,
    title: "Transposição Nacional",
    description: "Legislação portuguesa",
    url: "#"
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Perguntas frequentes",
    url: "#"
  }
];

const QuickLinks = () => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Recursos Úteis
      </h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all group"
            >
              <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-sm">{link.title}</h4>
                <p className="text-xs text-muted-foreground truncate">{link.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
