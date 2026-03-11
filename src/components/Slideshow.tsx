import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Landmark,
  AlertTriangle,
  Crosshair,
  UsersRound,
  BrainCircuit,
  Workflow,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SlideshowProps {
  onComplete: () => void;
}

type Slide = {
  id: number;
  kicker: string;
  title: string;
  body: string;
  note?: string;
  chapter: string;
  icon: LucideIcon;
  iconColor: string;
  iconPanelBackground: string;
  canvasBackground: string;
  accentColor: string;
};

const slides: Slide[] = [
  {
    id: 1,
    kicker: 'PR2X • Caderno de Direção',
    title: 'Reuniões de Inflexão',
    body: 'Um método para decidir com velocidade, preservar governança e recolocar projetos estratégicos em rota.',
    note: 'Inspirado em linguagem editorial de relatórios corporativos.',
    chapter: 'Abertura',
    icon: Landmark,
    iconColor: '#1f5f55',
    iconPanelBackground: 'radial-gradient(circle at 25% 20%, rgba(31,95,85,0.23), transparent 52%), linear-gradient(135deg, rgba(244,239,228,0.82) 0%, rgba(230,239,233,0.95) 100%)',
    canvasBackground: 'radial-gradient(circle at 18% 25%, rgba(31,95,85,0.16), transparent 36%), radial-gradient(circle at 86% 14%, rgba(153,125,66,0.18), transparent 38%), linear-gradient(180deg, #f7f3eb 0%, #efe6d8 58%, #e5d7be 100%)',
    accentColor: '#1f5f55',
  },
  {
    id: 2,
    kicker: 'Problema',
    title: 'Não falta visão. Falta decisão no tempo certo.',
    body: 'Projetos perdem tração quando o risco cresce mais rápido que a capacidade de decidir.',
    chapter: 'Diagnóstico',
    icon: AlertTriangle,
    iconColor: '#8a4b10',
    iconPanelBackground: 'radial-gradient(circle at 20% 24%, rgba(138,75,16,0.22), transparent 52%), linear-gradient(135deg, rgba(247,239,226,0.9) 0%, rgba(244,226,195,0.94) 100%)',
    canvasBackground: 'radial-gradient(circle at 12% 22%, rgba(138,75,16,0.16), transparent 40%), radial-gradient(circle at 84% 16%, rgba(31,95,85,0.14), transparent 40%), linear-gradient(180deg, #f8f2e6 0%, #f2e5d0 58%, #e8d8b6 100%)',
    accentColor: '#8a4b10',
  },
  {
    id: 3,
    kicker: 'Momento Crítico',
    title: 'A inflexão exige foco e autoridade.',
    body: 'A reunião não discute tudo. Resolve um bloqueio central com patrocínio explícito e plano imediato.',
    chapter: 'Princípio',
    icon: Crosshair,
    iconColor: '#0d5a63',
    iconPanelBackground: 'radial-gradient(circle at 26% 20%, rgba(13,90,99,0.22), transparent 52%), linear-gradient(135deg, rgba(241,245,242,0.86) 0%, rgba(220,236,238,0.96) 100%)',
    canvasBackground: 'radial-gradient(circle at 13% 24%, rgba(13,90,99,0.15), transparent 40%), radial-gradient(circle at 85% 18%, rgba(138,75,16,0.12), transparent 38%), linear-gradient(180deg, #f4f5f0 0%, #e6efe9 60%, #d7e7e8 100%)',
    accentColor: '#0d5a63',
  },
  {
    id: 4,
    kicker: 'Composição',
    title: 'Participantes indispensáveis',
    body: 'Decisor, dono do problema, especialistas e executores. Sem plateia. Sem paralelos. Sem ambiguidade.',
    chapter: 'Governança',
    icon: UsersRound,
    iconColor: '#7d3e2d',
    iconPanelBackground: 'radial-gradient(circle at 25% 22%, rgba(125,62,45,0.24), transparent 52%), linear-gradient(135deg, rgba(248,239,232,0.9) 0%, rgba(241,224,212,0.96) 100%)',
    canvasBackground: 'radial-gradient(circle at 11% 26%, rgba(125,62,45,0.17), transparent 40%), radial-gradient(circle at 86% 20%, rgba(13,90,99,0.12), transparent 40%), linear-gradient(180deg, #f8f0e9 0%, #f0dfd4 58%, #e6d0c2 100%)',
    accentColor: '#7d3e2d',
  },
  {
    id: 5,
    kicker: 'Método BASIC',
    title: 'Behavior. Analysis. Strategies. Intervention. Change.',
    body: 'A estrutura organiza o debate e transforma percepções em decisões verificáveis.',
    chapter: 'Framework',
    icon: BrainCircuit,
    iconColor: '#0f5e4f',
    iconPanelBackground: 'radial-gradient(circle at 24% 18%, rgba(15,94,79,0.24), transparent 52%), linear-gradient(135deg, rgba(241,246,241,0.9) 0%, rgba(224,238,228,0.97) 100%)',
    canvasBackground: 'radial-gradient(circle at 12% 24%, rgba(15,94,79,0.17), transparent 40%), radial-gradient(circle at 84% 18%, rgba(125,62,45,0.1), transparent 38%), linear-gradient(180deg, #f4f7f2 0%, #e5eee3 58%, #d6e6d7 100%)',
    accentColor: '#0f5e4f',
  },
  {
    id: 6,
    kicker: 'Ritmo',
    title: '60 minutos, cinco blocos, uma definição.',
    body: 'Alinhar o gargalo, analisar causas, abrir alternativas, decidir e distribuir responsabilidades.',
    chapter: 'Execução',
    icon: Workflow,
    iconColor: '#5f4e9b',
    iconPanelBackground: 'radial-gradient(circle at 23% 20%, rgba(95,78,155,0.23), transparent 52%), linear-gradient(135deg, rgba(240,239,248,0.9) 0%, rgba(228,224,244,0.97) 100%)',
    canvasBackground: 'radial-gradient(circle at 11% 24%, rgba(95,78,155,0.16), transparent 40%), radial-gradient(circle at 84% 16%, rgba(15,94,79,0.1), transparent 38%), linear-gradient(180deg, #f4f3fa 0%, #e9e6f4 58%, #ddd7ed 100%)',
    accentColor: '#5f4e9b',
  },
  {
    id: 7,
    kicker: 'Resultado',
    title: 'Menos reunião. Mais compromisso. Mais entrega.',
    body: 'Quando a decisão vira acordo operacional, o projeto volta a gerar valor em ciclo curto.',
    chapter: 'Impacto',
    icon: TrendingUp,
    iconColor: '#0d6a61',
    iconPanelBackground: 'radial-gradient(circle at 23% 20%, rgba(13,106,97,0.24), transparent 52%), linear-gradient(135deg, rgba(238,246,244,0.9) 0%, rgba(219,237,232,0.97) 100%)',
    canvasBackground: 'radial-gradient(circle at 10% 24%, rgba(13,106,97,0.17), transparent 40%), radial-gradient(circle at 84% 16%, rgba(138,75,16,0.08), transparent 38%), linear-gradient(180deg, #f1f7f5 0%, #e2efe9 58%, #d2e5dc 100%)',
    accentColor: '#0d6a61',
  },
  {
    id: 8,
    kicker: 'PR2X',
    title: 'Pronto para explorar o guia completo?',
    body: 'Avance para o painel e consulte os componentes da metodologia em detalhe.',
    chapter: 'Fechamento',
    icon: Sparkles,
    iconColor: '#8c5a0f',
    iconPanelBackground: 'radial-gradient(circle at 24% 20%, rgba(140,90,15,0.24), transparent 52%), linear-gradient(135deg, rgba(248,242,231,0.9) 0%, rgba(244,229,199,0.97) 100%)',
    canvasBackground: 'radial-gradient(circle at 11% 24%, rgba(140,90,15,0.16), transparent 40%), radial-gradient(circle at 86% 18%, rgba(95,78,155,0.1), transparent 38%), linear-gradient(180deg, #f8f3e8 0%, #f0e4ca 58%, #e6d3af 100%)',
    accentColor: '#8c5a0f',
  },
];

export default function Slideshow({ onComplete }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentIndex < slides.length - 1) {
      interval = setInterval(nextSlide, 5200);
    } else if (currentIndex === slides.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, nextSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0" style={{ background: currentSlide.canvasBackground }} />

      <div className="absolute left-[8%] top-[10%] w-px h-[70%] bg-[var(--color-ink)]/20" />
      <div className="absolute right-[8%] top-[20%] w-px h-[60%] bg-[var(--color-ink)]/10 hidden md:block" />

      <AnimatePresence mode="wait">
        <motion.section
          key={currentSlide.id}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute inset-0 z-10 px-8 md:px-20 py-14 md:py-18 flex flex-col"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 flex-1 min-h-0">
            <div className="max-w-3xl">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[var(--color-muted)] mb-6">{currentSlide.kicker}</p>
              <h1 className="font-display text-4xl md:text-7xl leading-[0.94] text-[var(--color-ink)] mb-6 max-w-4xl uppercase tracking-[0.02em]">
                {currentSlide.title}
              </h1>
              <p className="text-lg md:text-2xl leading-relaxed text-[var(--color-muted)] max-w-3xl">
                {currentSlide.body}
              </p>
              {currentSlide.note && (
                <p className="mt-6 text-sm md:text-base max-w-2xl" style={{ color: `${currentSlide.accentColor}CC` }}>
                  {currentSlide.note}
                </p>
              )}
            </div>

            <div className="hidden md:flex relative h-full min-h-[58vh] rounded-[2.25rem] overflow-hidden border border-[var(--color-ink)]/10 bg-white/35 items-center justify-center">
              <div className="absolute inset-0" style={{ background: currentSlide.iconPanelBackground }} />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.35)_38%,transparent_70%)]" />
              <motion.div
                initial={{ opacity: 0, scale: 0.88, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative"
              >
                <currentSlide.icon
                  strokeWidth={1.2}
                  className="w-[24rem] h-[24rem] lg:w-[30rem] lg:h-[30rem] drop-shadow-[0_16px_45px_rgba(0,0,0,0.18)]"
                  style={{ color: currentSlide.iconColor }}
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]">Capítulo</p>
              <p className="font-display text-2xl md:text-4xl text-[var(--color-ink)]">{currentSlide.chapter}</p>
            </div>

            {currentIndex === slides.length - 1 && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={onComplete}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[var(--color-accent-1)] text-[#f6f2e8] rounded-full text-sm tracking-[0.14em] uppercase font-semibold"
              >
                Abrir metodologia
              </motion.button>
            )}
          </div>
        </motion.section>
      </AnimatePresence>

      <div className="absolute bottom-6 left-0 w-full px-6 md:px-12 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-full bg-[var(--color-ink)]/8 hover:bg-[var(--color-ink)]/14 transition-colors"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <div className="text-xs tracking-[0.18em] uppercase text-[var(--color-muted)]">
            {String(currentIndex + 1).padStart(2, '0')} / {slides.length}
          </div>
        </div>

        <div className="flex-1 mx-4 md:mx-10 h-[2px] bg-[var(--color-ink)]/12 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-accent-1)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2.5 rounded-full bg-[var(--color-ink)]/8 hover:bg-[var(--color-ink)]/14 disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === slides.length - 1}
            className="p-2.5 rounded-full bg-[var(--color-ink)]/8 hover:bg-[var(--color-ink)]/14 disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
