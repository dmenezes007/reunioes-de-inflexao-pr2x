import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

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
};

const slides: Slide[] = [
  {
    id: 1,
    kicker: 'PR2X • Caderno de Direcao',
    title: 'Reunioes de Inflexao',
    body: 'Um metodo para decidir com velocidade, preservar governanca e recolocar projetos estrategicos em rota.',
    note: 'Inspirado em linguagem editorial de relatorios corporativos.',
    chapter: 'Abertura',
  },
  {
    id: 2,
    kicker: 'Problema',
    title: 'Nao falta visao. Falta decisao no tempo certo.',
    body: 'Projetos perdem tracao quando o risco cresce mais rapido que a capacidade de decidir.',
    chapter: 'Diagnostico',
  },
  {
    id: 3,
    kicker: 'Momento Critico',
    title: 'A inflexao exige foco e autoridade.',
    body: 'A reuniao nao discute tudo. Resolve um bloqueio central com patrocinio explicito e plano imediato.',
    chapter: 'Principio',
  },
  {
    id: 4,
    kicker: 'Composicao',
    title: 'Participantes indispensaveis',
    body: 'Decisor, dono do problema, especialistas e executores. Sem plateia. Sem paralelos. Sem ambiguidade.',
    chapter: 'Governanca',
  },
  {
    id: 5,
    kicker: 'Metodo BASIC',
    title: 'Behavior. Analysis. Strategies. Intervention. Change.',
    body: 'A estrutura organiza o debate e transforma percepcoes em decisoes verificaveis.',
    chapter: 'Framework',
  },
  {
    id: 6,
    kicker: 'Ritmo',
    title: '60 minutos, cinco blocos, uma definicao.',
    body: 'Alinhar o gargalo, analisar causas, abrir alternativas, decidir e distribuir responsabilidades.',
    chapter: 'Execucao',
  },
  {
    id: 7,
    kicker: 'Resultado',
    title: 'Menos reuniao. Mais compromisso. Mais entrega.',
    body: 'Quando a decisao vira acordo operacional, o projeto volta a gerar valor em ciclo curto.',
    chapter: 'Impacto',
  },
  {
    id: 8,
    kicker: 'PR2X',
    title: 'Pronto para explorar o guia completo?',
    body: 'Avance para o painel e consulte os componentes da metodologia em detalhe.',
    chapter: 'Fechamento',
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(15,118,110,0.18),transparent_36%),radial-gradient(circle_at_86%_14%,rgba(154,103,0,0.2),transparent_38%),linear-gradient(180deg,#f7f3eb_0%,#efe6d8_58%,#e5d7be_100%)]" />

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
          <div className="max-w-5xl">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[var(--color-muted)] mb-6">{currentSlide.kicker}</p>
            <h1 className="font-display text-4xl md:text-7xl leading-[0.94] text-[var(--color-ink)] mb-6 max-w-4xl">
              {currentSlide.title}
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed text-[var(--color-muted)] max-w-3xl">
              {currentSlide.body}
            </p>
            {currentSlide.note && (
              <p className="mt-6 text-sm md:text-base text-[var(--color-accent-1)]/80 max-w-2xl">{currentSlide.note}</p>
            )}
          </div>

          <div className="mt-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]">Capitulo</p>
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
