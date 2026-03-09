import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Âmbito",
    question: "O que é a Diretiva NIS2 e por que foi criada?",
    answer:
      "A Diretiva NIS2 (Network and Information Security 2 – Diretiva (UE) 2022/2555) é o quadro legal da União Europeia para cibersegurança, substituindo a Diretiva NIS de 2016. Foi criada para responder ao aumento de ciberataques, à crescente dependência digital e às vulnerabilidades expostas durante a pandemia COVID-19. Em Portugal, foi transposta através do Decreto-Lei n.º 125/2025.",
  },
  {
    category: "Âmbito",
    question: "A minha empresa está abrangida pela NIS2?",
    answer:
      "A NIS2 aplica-se a entidades que operem em setores críticos ou importantes com determinada dimensão. Setores de alta criticidade incluem energia, transportes, saúde, água, infraestrutura digital, administração pública e espaço. Outros setores críticos incluem serviços postais, gestão de resíduos, químicos, alimentação, industria, fornecedores digitais e investigação. Geralmente, empresas com mais de 50 colaboradores ou volume de negócios superior a 10M€ estão abrangidas, mas há exceções para entidades especiais.",
  },
  {
    category: "Âmbito",
    question: "Qual a diferença entre Entidade Essencial e Entidade Importante?",
    answer:
      "Entidades Essenciais são as que operam em setores de alta criticidade e têm grande dimensão (>250 colaboradores ou >50M€ de volume de negócios). Ficam sujeitas a supervisão ex-ante mais rigorosa. Entidades Importantes são as que operam em outros setores críticos ou têm média dimensão (50-250 colaboradores ou 10-50M€). Estão sujeitas a supervisão ex-post. Ambas as categorias têm obrigações de gestão de riscos e notificação de incidentes.",
  },
  {
    category: "Obrigações",
    question: "Quais são as obrigações principais das organizações abrangidas?",
    answer:
      "As principais obrigações incluem: 1) Registo junto do CNCS; 2) Implementação de medidas de gestão de riscos de cibersegurança; 3) Notificação de incidentes significativos; 4) Garantir a segurança da cadeia de abastecimento; 5) Formação obrigatória dos órgãos de gestão; 6) Manutenção de documentação e evidências de conformidade.",
  },
  {
    category: "Obrigações",
    question: "Como e quando devo notificar incidentes de segurança?",
    answer:
      "O processo de notificação é faseado: 1) Alerta inicial ao CNCS em até 24 horas após a deteção de um incidente significativo; 2) Notificação completa do incidente em até 72 horas; 3) Relatório final em até 1 mês após a resolução do incidente. Um incidente é significativo se causar ou puder causar perturbação operacional grave, perdas financeiras consideráveis ou danos a outras entidades.",
  },
  {
    category: "Obrigações",
    question: "Os órgãos de gestão (administradores) têm responsabilidades específicas?",
    answer:
      "Sim. O DL 125/2025 impõe responsabilidades diretas aos órgãos de direção. Os administradores devem aprovar as medidas de gestão de riscos de cibersegurança, supervisionar a sua implementação e são responsáveis pelo incumprimento. É obrigatório que participem em formações de cibersegurança e podem ser responsabilizados pessoalmente em caso de violações graves.",
  },
  {
    category: "Implementação",
    question: "Por onde devo começar a implementação?",
    answer:
      "Recomendamos começar pela Etapa 1: Âmbito e Identificação. Confirme se está abrangido, determine a sua classificação (Essencial ou Importante) e proceda ao registo junto do CNCS. Depois avance para a governança, gestão de riscos e medidas técnicas. A nossa Timeline e Checklist interativa podem ajudar a estruturar este processo.",
  },
  {
    category: "Implementação",
    question: "Quanto tempo tenho para me tornar conforme?",
    answer:
      "O DL 125/2025 entrou em vigor em Dezembro de 2025. As obrigações de registo devem ser cumpridas nos prazos definidos pelo CNCS. Para as medidas técnicas e organizacionais, o prazo varia conforme a complexidade, mas recomendamos iniciar imediatamente. Em geral, uma implementação completa pode levar entre 6 a 18 meses dependendo da dimensão da organização.",
  },
  {
    category: "Implementação",
    question: "A ISO 27001 ajuda na conformidade com a NIS2?",
    answer:
      "Sim, substancialmente. A ISO 27001 abrange muitos dos controlos exigidos pela NIS2, especialmente em gestão de riscos, políticas de segurança e gestão de incidentes. Uma organização certificada em ISO 27001 já tem uma base sólida para a NIS2. No entanto, a NIS2 tem requisitos adicionais específicos, como os prazos de notificação de incidentes, a responsabilidade dos órgãos de direção e a gestão da cadeia de abastecimento.",
  },
  {
    category: "Coimas e Sanções",
    question: "Quais são as coimas por incumprimento?",
    answer:
      "As coimas diferem por categoria: para Entidades Essenciais, o máximo é 10 milhões de euros ou 2% do volume de negócios anual global (o que for mais elevado). Para Entidades Importantes, o máximo é 7 milhões de euros ou 1,4% do volume de negócios anual global. Podem também ser aplicadas sanções acessórias e, em casos graves, os órgãos de gestão podem ser temporariamente afastados das suas funções.",
  },
  {
    category: "Coimas e Sanções",
    question: "O que acontece em caso de incidente de segurança não notificado?",
    answer:
      "A não notificação de um incidente significativo dentro dos prazos legais (24h/72h/1 mês) constitui uma violação das obrigações legais e pode resultar em coimas significativas. Para além da coima, pode haver responsabilização dos órgãos de gestão e danos reputacionais consideráveis. O CNCS tem poderes de supervisão e inspeção para verificar o cumprimento.",
  },
  {
    category: "CNCS",
    question: "Qual é o papel do CNCS (Centro Nacional de Cibersegurança)?",
    answer:
      "O CNCS é a autoridade competente em Portugal para a implementação da NIS2. As suas funções incluem: manter o registo nacional de entidades abrangidas; supervisionar e fiscalizar o cumprimento; receber notificações de incidentes; emitir orientações e recomendações; aplicar sanções por incumprimento; coordenar com o CSIRT Nacional e com autoridades europeias. O CNCS disponibiliza também recursos e orientações para apoiar as entidades na conformidade.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

const FAQPage = () => {
  const [openId, setOpenId] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = faqs.filter((faq) => {
    const matchesSearch =
      !searchTerm ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !activeCategory || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="hero-gradient text-primary-foreground pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Perguntas Frequentes
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Respostas às dúvidas mais comuns sobre a NIS2 e o DL 125/2025 em Portugal.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar perguntas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((faq, index) => {
              const isOpen = openId === index;
              return (
                <div
                  key={index}
                  className={`bg-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-primary/30 shadow-hover"
                      : "border-border shadow-card hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-start gap-4 text-left"
                  >
                    <HelpCircle
                      className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${
                        isOpen ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className={`font-medium leading-snug transition-colors ${
                            isOpen ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 inline-block">
                        {faq.category}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pl-15 animate-scale-in">
                      <div className="ml-9 text-muted-foreground leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">Nenhuma pergunta encontrada</p>
            <p className="text-sm mt-1">Tente pesquisar com outros termos</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 bg-secondary rounded-2xl p-6 text-center">
          <h3 className="font-semibold text-foreground mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Consulte o CNCS ou um especialista jurídico em cibersegurança para
            orientação personalizada.
          </p>
          <a
            href="https://www.cncs.gov.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors"
          >
            Visitar CNCS.gov.pt
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
