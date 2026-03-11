import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Activity, Users, Clock, Target, Zap, BarChart, Lightbulb } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: "O que é uma reunião de inflexão",
    icon: <Zap className="w-7 h-7 text-[var(--color-accent-2)]" />,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    color: "from-[var(--color-accent-2)]/15 to-transparent",
    content: "Uma reunião de inflexão é um evento decisório de alto impacto, convocado exclusivamente para resolver bloqueios críticos em projetos estratégicos. Não é uma reunião de status, mas um fórum de resolução de problemas no qual a inércia é quebrada e o caminho a seguir é definido com clareza e compromisso de todas as partes interessadas."
  },
  {
    id: 2,
    title: "Quando convocar",
    icon: <Clock className="w-7 h-7 text-[var(--color-accent-4)]" />,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    color: "from-[var(--color-accent-4)]/15 to-transparent",
    content: "Convoque quando um projeto estratégico estiver travado por mais de duas semanas devido a indecisões, conflitos de prioridade entre áreas, ou quando um risco crítico se materializar e exigir uma mudança de rota imediata."
  },
  {
    id: 3,
    title: "Quem participa",
    icon: <Users className="w-7 h-7 text-[var(--color-accent-3)]" />,
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
    color: "from-[var(--color-accent-3)]/15 to-transparent",
    content: "Apenas as pessoas estritamente necessárias para tomar a decisão e executar a solução. \n\n1. O Decisor (Patrocinador)\n2. O Dono do Problema (Líder do Projeto)\n3. Os Especialistas (Quem detém o conhecimento técnico)\n4. Os Executores (Quem vai implementar a decisão)\n\nSem espectadores."
  },
  {
    id: 4,
    title: "Estrutura da reunião",
    icon: <Target className="w-7 h-7 text-[var(--color-accent-1)]" />,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    color: "from-[var(--color-accent-1)]/15 to-transparent",
    content: "1. Alinhamento do Problema (10 min): apresentação clara do gargalo.\n2. Análise de Causas (15 min): discussão focada em fatos e dados.\n3. Geração de Alternativas (20 min): ideação estruturada de soluções.\n4. Decisão (10 min): escolha do caminho pelo patrocinador.\n5. Plano de Ação (5 min): quem faz o quê e até quando."
  },
  {
    id: 5,
    title: "Framework BASIC aplicado",
    icon: <Activity className="w-7 h-7 text-[var(--color-accent-2)]" />,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    color: "from-[var(--color-accent-2)]/15 to-transparent",
    content: "Comportamento (Behaviour): qual comportamento está travando o projeto?\nAnálise (Analysis): por que esse comportamento ocorre?\nEstratégias (Strategies): quais estratégias podem mudar isso?\nIntervenção (Intervention): qual intervenção aplicaremos agora?\nMudança (Change): como mediremos a mudança?"
  },
  {
    id: 6,
    title: "Fluxo de tomada de decisão",
    icon: <ArrowRight className="w-7 h-7 text-[var(--color-accent-4)]" />,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    color: "from-[var(--color-accent-4)]/15 to-transparent",
    content: "O fluxo deve ser rápido e irreversível (salvo fatos novos). A decisão tomada na reunião de inflexão torna-se a nova lei do projeto. Qualquer resistência pós-reunião é tratada como quebra de acordo."
  },
  {
    id: 7,
    title: "Indicadores de sucesso",
    icon: <BarChart className="w-7 h-7 text-[var(--color-accent-3)]" />,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    color: "from-[var(--color-accent-3)]/15 to-transparent",
    content: "• Tempo de resolução do gargalo (tempo até a decisão)\n• Adesão à decisão (taxa de conformidade)\n• Velocidade de retomada do projeto\n• Redução no número de reuniões de acompanhamento subsequentes."
  },
  {
    id: 8,
    title: "Exemplo prático",
    icon: <Lightbulb className="w-7 h-7 text-[var(--color-accent-1)]" />,
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-1",
    color: "from-[var(--color-accent-1)]/15 to-transparent",
    content: "Projeto de migração de ERP travado há 3 meses por divergências entre TI e Finanças sobre a customização de um módulo.\n\nReunião de Inflexão (60 min):\n- Patrocinador: CFO\n- Decisão: adotar padrão de mercado (vanilla), sem customização.\n- Resultado: projeto destravado, com economia de 400 horas de desenvolvimento."
  }
];

export default function BentoGrid() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-10 lg:p-16 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <header className="mb-12 border-b border-[var(--color-ink)]/15 pb-8">
          <p className="text-xs tracking-[0.24em] uppercase text-[var(--color-muted)] mb-4">Guia Executivo</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[0.95] mb-4">Metodologia PR2X</h1>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl">Uma leitura estruturada para destravar decisões críticas com governança, clareza e compromisso.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[230px]">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.01, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCard(card)}
              className={`cursor-pointer rounded-2xl p-6 border border-[var(--color-ink)]/10 bg-gradient-to-br ${card.color} bg-[var(--color-surface)]/85 flex flex-col justify-between group relative overflow-hidden ${card.colSpan} ${card.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-300" />
              <div className="z-10">
                {card.icon}
              </div>
              <div className="z-10 mt-auto">
                <h3 className="text-2xl font-semibold mb-2 font-display leading-tight uppercase tracking-[0.02em]">{card.title}</h3>
                <div className="flex items-center text-sm text-[var(--color-muted)] transition-colors">
                  <span>Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1f2a2a]/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[var(--color-surface)] border border-[var(--color-ink)]/10 rounded-2xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${selectedCard.color.replace('/20', '')}`} />
              
              <button 
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                {selectedCard.icon}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-[0.02em]">{selectedCard.title}</h2>
              
              <div className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                {selectedCard.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
