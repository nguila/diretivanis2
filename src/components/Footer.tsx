import { Link } from "react-router-dom";
import { Shield, Mail, ExternalLink, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-foreground">NIS2 Portugal</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Guia de referência para implementação da Diretiva NIS2 em Portugal 
              através do Decreto-Lei n.º 125/2025.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "/" },
                { label: "Etapas de Implementação", href: "/etapas" },
                { label: "Checklist Interativa", href: "/checklist" },
                { label: "Timeline", href: "/timeline" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos Externos</h4>
            <ul className="space-y-2">
              {[
                {
                  label: "Diretiva (UE) 2022/2555",
                  href: "https://eur-lex.europa.eu/eli/dir/2022/2555",
                },
                {
                  label: "DL 125/2025 – DR",
                  href: "https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-962603401",
                },
                {
                  label: "CNCS – Centro Nacional de Cibersegurança",
                  href: "https://www.cncs.gov.pt/",
                },
                {
                  label: "ENISA – Agência EU de Cibersegurança",
                  href: "https://www.enisa.europa.eu/",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2026 NIS2 Portugal. Guia de referência. Consulte sempre especialistas jurídicos para total conformidade.
          </p>
          <p className="text-xs text-muted-foreground">
            Atualizado: Março 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
