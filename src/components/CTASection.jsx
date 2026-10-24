import { MdArrowOutward, MdOutlinePhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

/** The closing plate: one cyan block with clipped corners, ink text for contrast. */
const CTASection = () => {
  return (
    <section className="px-4 py-16 md:px-16">
      <div className="plate-clip mx-auto max-w-7xl bg-action px-6 py-12 text-action-ink md:px-12 md:py-16">
        <p className="kicker mb-5">Book an appointment / Request a quote</p>
        <h2 className="display mb-5 text-[clamp(2rem,5.5vw,4.4rem)] [font-stretch:125%]">Have a project in mind?</h2>
        <p className="mb-8 max-w-2xl text-lg">
          Tell us what you want to build. We will scope it with you, show you how it will work, and send you a quote.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex min-h-tap items-center gap-2 bg-deep px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-brand"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            Book appointment <MdArrowOutward size={18} aria-hidden="true" />
          </Link>
          <a
            href="tel:+254114266430"
            className="inline-flex min-h-tap items-center gap-2 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.06em] shadow-[inset_0_0_0_2px_#03113F] transition-colors hover:bg-deep/10"
          >
            <MdOutlinePhone size={18} aria-hidden="true" /> +254 114 266 430
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
