import { Shield, Building2, FileCheck, Users, AlertTriangle, ClipboardCheck } from "lucide-react";

export interface Procedure {
  title: string;
  description: string;
  details: string[];
}

export interface Stage {
  id: number;
  title: string;
  subtitle: string;
  icon: typeof Shield;
  colorClass: string;
  overview: string;
  procedures: Procedure[];
  timeline: string;
  responsibles: string[];
}

export const nis2Stages: Stage[] = [
  {
    id: 1,
    title: "Âmbito e Identificação",
    subtitle: "Determinar se a organização está abrangida",
    icon: Building2,
    colorClass: "stage-1",
    overview: "Nos termos do DL 125/2025, a primeira etapa consiste em identificar se a sua organização se enquadra no âmbito da nova diretiva da União Europeia sobre cibersegurança, considerando o setor de atividade, dimensão e criticidade dos serviços prestados.",
    timeline: "1-2 meses",
    responsibles: ["Direção Geral", "Jurídico", "Compliance"],
    procedures: [
      {
        title: "Análise Setorial",
        description: "Verificar se a organização opera em setores críticos ou importantes",
        details: [
          "Identificar se pertence a setores de alta criticidade (energia, transportes, saúde, água, infraestrutura digital)",
          "Verificar enquadramento em outros setores críticos (serviços postais, gestão de resíduos, produção alimentar)",
          "Documentar todas as atividades e serviços prestados",
          "Mapear dependências com outras entidades críticas"
        ]
      },
      {
        title: "Avaliação de Dimensão",
        description: "Determinar a categoria da entidade baseado em critérios de dimensão",
        details: [
          "Calcular número de colaboradores (>250 = grande, 50-250 = média)",
          "Verificar volume de negócios anual (>50M€ = grande, 10-50M€ = média)",
          "Analisar balanço total anual",
          "Considerar exceções para entidades especiais independentemente da dimensão"
        ]
      },
      {
        title: "Classificação de Entidade",
        description: "Determinar se é Entidade Essencial ou Importante",
        details: [
          "Entidades Essenciais: setores de alta criticidade + grande dimensão",
          "Entidades Importantes: outros setores críticos ou média dimensão",
          "Documentar a classificação com justificação legal",
          "Preparar registo para notificação às autoridades competentes"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Governança e Responsabilidades",
    subtitle: "Estruturar a gestão de cibersegurança",
    icon: Users,
    colorClass: "stage-2",
    overview: "Conforme exigido pelo DL 125/2025, estabelecer uma estrutura de governança clara com responsabilidades definidas para a gestão de riscos de cibersegurança, incluindo o envolvimento obrigatório dos órgãos de direção.",
    timeline: "2-3 meses",
    responsibles: ["Conselho de Administração", "CISO", "Recursos Humanos"],
    procedures: [
      {
        title: "Responsabilização da Direção",
        description: "Garantir o envolvimento direto dos órgãos de gestão",
        details: [
          "Definir responsabilidades específicas de cibersegurança para a direção",
          "Estabelecer reporting regular ao conselho de administração",
          "Criar comité de cibersegurança com representação executiva",
          "Documentar responsabilidades em estatutos ou regulamentos internos"
        ]
      },
      {
        title: "Formação Obrigatória",
        description: "Implementar programa de formação em cibersegurança",
        details: [
          "Formação específica para órgãos de direção sobre riscos cyber",
          "Programa de sensibilização para todos os colaboradores",
          "Formação técnica especializada para equipas de TI/segurança",
          "Registo e certificação de todas as formações realizadas"
        ]
      },
      {
        title: "Estrutura Organizacional",
        description: "Definir funções e responsabilidades de segurança",
        details: [
          "Nomear ou contratar CISO (Chief Information Security Officer)",
          "Criar equipa dedicada de resposta a incidentes (CSIRT)",
          "Definir matriz RACI para processos de segurança",
          "Estabelecer canais de comunicação e escalamento"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Gestão de Riscos",
    subtitle: "Avaliar e mitigar riscos de cibersegurança",
    icon: AlertTriangle,
    colorClass: "stage-3",
    overview: "O DL 125/2025 exige a implementação de um processo sistemático de gestão de riscos que abranja a identificação, análise, avaliação e tratamento de riscos de cibersegurança de forma contínua.",
    timeline: "3-4 meses",
    responsibles: ["CISO", "Gestão de Riscos", "TI"],
    procedures: [
      {
        title: "Inventário de Ativos",
        description: "Mapear todos os ativos críticos da organização",
        details: [
          "Identificar sistemas de informação e redes críticas",
          "Catalogar dados sensíveis e sua localização",
          "Mapear dependências de fornecedores e terceiros",
          "Classificar ativos por nível de criticidade"
        ]
      },
      {
        title: "Análise de Riscos",
        description: "Avaliar ameaças, vulnerabilidades e impactos",
        details: [
          "Realizar análise de ameaças relevantes ao setor",
          "Conduzir avaliações de vulnerabilidades técnicas",
          "Calcular probabilidade e impacto de incidentes",
          "Priorizar riscos com base em critérios definidos"
        ]
      },
      {
        title: "Plano de Tratamento",
        description: "Definir medidas de mitigação para cada risco",
        details: [
          "Selecionar controlos apropriados (ISO 27001, NIST)",
          "Definir responsáveis e prazos de implementação",
          "Estabelecer critérios de aceitação de risco residual",
          "Documentar decisões e aprovações da direção"
        ]
      },
      {
        title: "Monitorização Contínua",
        description: "Implementar processos de revisão periódica",
        details: [
          "Estabelecer KPIs e métricas de segurança",
          "Realizar revisões trimestrais do perfil de risco",
          "Atualizar análise após incidentes ou mudanças significativas",
          "Reportar evolução do risco aos órgãos de gestão"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Medidas de Segurança",
    subtitle: "Implementar controlos técnicos e organizacionais",
    icon: Shield,
    colorClass: "stage-4",
    overview: "Implementar as medidas mínimas de segurança exigidas pelo DL 125/2025, abrangendo políticas, procedimentos e controlos técnicos proporcionais aos riscos identificados.",
    timeline: "4-6 meses",
    responsibles: ["CISO", "TI", "Operações"],
    procedures: [
      {
        title: "Políticas de Segurança",
        description: "Desenvolver e aprovar políticas base",
        details: [
          "Política de Segurança da Informação",
          "Política de Gestão de Acessos e Identidades",
          "Política de Uso Aceitável de Recursos",
          "Política de Gestão de Fornecedores e Terceiros"
        ]
      },
      {
        title: "Controlos Técnicos",
        description: "Implementar medidas técnicas de proteção",
        details: [
          "Autenticação multifator (MFA) para sistemas críticos",
          "Encriptação de dados em trânsito e em repouso",
          "Segmentação de redes e firewalls",
          "Sistemas de deteção e prevenção de intrusões (IDS/IPS)",
          "Gestão centralizada de logs e SIEM"
        ]
      },
      {
        title: "Continuidade de Negócio",
        description: "Garantir resiliência operacional",
        details: [
          "Plano de Continuidade de Negócio (BCP)",
          "Plano de Recuperação de Desastres (DRP)",
          "Backups seguros e testados regularmente",
          "Redundância de sistemas críticos"
        ]
      },
      {
        title: "Segurança da Cadeia de Fornecimento",
        description: "Gerir riscos de terceiros",
        details: [
          "Avaliação de segurança de fornecedores críticos",
          "Cláusulas contratuais de cibersegurança",
          "Monitorização contínua de fornecedores",
          "Planos de contingência para falhas de fornecedores"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Gestão de Incidentes",
    subtitle: "Detetar, responder e reportar incidentes",
    icon: AlertTriangle,
    colorClass: "stage-5",
    overview: "Estabelecer capacidades robustas de deteção e resposta a incidentes, incluindo os procedimentos de notificação obrigatória ao CNCS dentro dos prazos definidos pelo DL 125/2025.",
    timeline: "2-3 meses",
    responsibles: ["CSIRT", "CISO", "Comunicação"],
    procedures: [
      {
        title: "Capacidade de Deteção",
        description: "Implementar sistemas de monitorização e alerta",
        details: [
          "Implementar SOC (Security Operations Center) ou serviço gerido",
          "Configurar alertas para eventos de segurança críticos",
          "Estabelecer processos de triagem e classificação",
          "Definir critérios de escalamento"
        ]
      },
      {
        title: "Procedimento de Resposta",
        description: "Definir processo estruturado de resposta",
        details: [
          "Plano de Resposta a Incidentes documentado",
          "Playbooks para tipos de incidentes comuns",
          "Equipa de resposta com funções definidas",
          "Exercícios de simulação regulares (tabletop)"
        ]
      },
      {
        title: "Notificação às Autoridades",
        description: "Cumprir obrigações de reporte NIS2",
        details: [
          "Alerta inicial em 24 horas após deteção",
          "Notificação de incidente em 72 horas",
          "Relatório final em 1 mês após resolução",
          "Templates e canais de comunicação preparados"
        ]
      },
      {
        title: "Lições Aprendidas",
        description: "Melhorar continuamente com base em incidentes",
        details: [
          "Análise post-mortem de todos os incidentes",
          "Identificação de melhorias preventivas",
          "Atualização de controlos e procedimentos",
          "Partilha de informação com comunidade setorial"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Conformidade e Auditoria",
    subtitle: "Demonstrar e manter conformidade",
    icon: ClipboardCheck,
    colorClass: "stage-6",
    overview: "Estabelecer processos de verificação e demonstração de conformidade com o DL 125/2025, preparando a organização para inspeções e auditorias do CNCS e autoridades competentes.",
    timeline: "Contínuo",
    responsibles: ["Compliance", "CISO", "Auditoria Interna"],
    procedures: [
      {
        title: "Registo e Documentação",
        description: "Manter evidências de conformidade",
        details: [
          "Registo junto do CNCS (Centro Nacional de Cibersegurança)",
          "Documentação completa de políticas e procedimentos",
          "Registos de formações e sensibilização",
          "Evidências de avaliações de risco e tratamento"
        ]
      },
      {
        title: "Auditorias Internas",
        description: "Verificar conformidade regularmente",
        details: [
          "Programa anual de auditorias internas",
          "Checklist de requisitos DL 125/2025",
          "Acompanhamento de não-conformidades",
          "Relatórios à direção"
        ]
      },
      {
        title: "Certificações",
        description: "Considerar certificações de suporte",
        details: [
          "ISO 27001 - Sistema de Gestão de Segurança da Informação",
          "ISO 22301 - Continuidade de Negócio",
          "Esquema Nacional de Segurança (se aplicável)",
          "Certificações setoriais específicas"
        ]
      },
      {
        title: "Preparação para Inspeções",
        description: "Estar pronto para supervisão externa",
        details: [
          "Designar ponto de contacto para autoridades",
          "Manter documentação atualizada e acessível",
          "Realizar exercícios de preparação para auditorias",
          "Conhecer direitos e deveres durante inspeções"
        ]
      }
    ]
  }
];