import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

// What CodeOn Africa ships, as a checklist next to the cube.
const POINTS = ['Web & mobile apps', 'AI integration', 'M-Pesa & card payments', 'Data dashboards & analytics'];

// The offers strip under the first screen: each cell sells one reason to start, and links to the next step.
const PROMOS = [
  {
    title: 'Start with a conversation',
    body: 'Book an appointment, tell us what you want to build, and get a quote for it.',
    cta: 'Book appointment',
    to: '/contact',
    stripe: 'shadow-[inset_3px_0_0_#00B0D0]',
  },
  {
    title: 'Payments built in',
    body: 'M-Pesa, cards and bank payments wired into your website, app or system from day one.',
    cta: 'See services',
    to: '/services',
    stripe: 'shadow-[inset_3px_0_0_var(--ink-fg)]',
  },
  {
    title: '10+ projects delivered',
    body: 'Schools, shops, startups and enterprises run on software we built and still support.',
    cta: 'See our work',
    to: '/portfolio',
    stripe: 'shadow-[inset_3px_0_0_var(--ink-dim)]',
  },
];

const rise = (i) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, delay: i * 0.08, ease: 'easeOut' } },
});

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-ink-rule bg-ink-bg grid-lines">
      {/* A framed grid with corner markers. */}
      <div className="relative mx-auto max-w-7xl border-x border-ink-rule">
        <span aria-hidden="true" className="mark left-4 top-4" />
        <span aria-hidden="true" className="mark right-4 top-4" />

        <motion.div initial="hidden" animate="show" className="grid lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center border-b border-ink-rule px-5 py-12 sm:px-9 lg:border-b-0 lg:border-r lg:py-16">
            <motion.p variants={rise(0)} className="kicker flex flex-wrap gap-x-4 gap-y-1 text-ink-dim">
              <span>Software studio</span>
              <span aria-hidden="true" className="hidden opacity-50 sm:inline">/</span>
              <span className="hidden sm:inline">Web · Mobile · AI</span>
              <span aria-hidden="true" className="hidden opacity-50 sm:inline">/</span>
              <span className="hidden sm:inline">Payments</span>
            </motion.p>

            <motion.h1
              variants={rise(1)}
              className="display mb-6 mt-5 max-w-[15ch] text-[clamp(2.2rem,7.4vw,4.6rem)] text-ink-fg"
            >
              Building tomorrow&apos;s tech today.
            </motion.h1>

            <motion.p variants={rise(2)} className="mb-8 max-w-xl text-lg leading-relaxed text-ink-dim">
              We design and build custom software for African businesses: websites and mobile apps, e-commerce, school
              and management systems, with AI and payments built in.
            </motion.p>

            <motion.div variants={rise(3)} className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-action">
                Request a quote <MdArrowOutward size={18} aria-hidden="true" />
              </Link>
              <a href="tel:+254114266430" className="btn-ghost">
                Call +254 114 266 430
              </a>
            </motion.div>
            <motion.p variants={rise(4)} className="mt-5 font-mono text-sm text-ink-dim">
              or write to{' '}
              <a className="text-ink-link underline-offset-4 hover:underline" href="mailto:info@codeonafrica.com">
                info@codeonafrica.com
              </a>
            </motion.p>
          </div>

          <motion.div variants={rise(2)} className="grid grid-rows-[1fr_auto]">
            {/* The four things this studio builds, one per face of the cube. */}
            <div className="stage" aria-hidden="true">
              <div className="cube">
                <div className="face front">&lt;/&gt;</div>
                <div className="face right">AI</div>
                <div className="face back">KES</div>
                <div className="face left">
                  <span className="bars"><i style={{ height: '40%' }} /><i style={{ height: '70%' }} /><i style={{ height: '55%' }} /><i style={{ height: '95%' }} /></span>
                </div>
                <div className="face top" />
                <div className="face bottom" />
              </div>
            </div>
            <div className="border-t border-ink-rule px-5 pb-7 pt-5 sm:px-9">
              <p className="kicker mb-4 flex items-center gap-2 text-ink-dim">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_0_4px_rgba(74,222,128,0.2)]" />
                What we ship
              </p>
              <ul className="border border-ink-rule">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-baseline gap-3 border-b border-ink-rule px-4 py-3 font-mono text-sm text-ink-fg last:border-b-0">
                    <span className="text-xs font-medium tracking-[0.08em] text-ink-link">OK</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid border-t border-ink-rule md:grid-cols-3">
          {PROMOS.map(({ title, body, cta, to, stripe }) => (
            <article key={title} className={`flex flex-col gap-2 border-b border-ink-rule bg-ink-cell px-5 py-6 last:border-0 sm:px-9 md:border-b-0 md:border-r ${stripe}`}>
              <h2 className="font-display text-lg font-bold text-ink-fg [font-stretch:108%]">{title}</h2>
              <p className="text-sm leading-relaxed text-ink-dim">{body}</p>
              <Link to={to} className="mt-auto pt-1 font-mono text-xs uppercase tracking-[0.08em] text-ink-link hover:underline">
                {cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
