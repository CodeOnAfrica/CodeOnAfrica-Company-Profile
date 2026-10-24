import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SERVICES = ['Software development', 'AI integration', 'Payment integration', 'Data analytics'];

/** The mission, on the dark technical grid, with what we do as cells and the team's photos. */
const Mission = () => {
  return (
    <section className="border-y border-ink-rule bg-ink-bg grid-lines px-4 py-16 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="kicker mb-4 text-ink-dim">Our mission</p>
          <h2 className="display mb-6 text-4xl text-ink-fg md:text-5xl">We build the tech ecosystem, together.</h2>
          <p className="mb-8 text-lg leading-relaxed text-ink-dim">
            Our mission is to redefine the future through technology. We create solutions that matter, going beyond
            boundaries, so the software you depend on exceeds expectations and makes a lasting impact.
          </p>
          <div className="cells">
            {SERVICES.map((service) => (
              <Link key={service} to="/services" className="flex items-center justify-between bg-ink-soft px-5 py-4 font-mono text-sm uppercase tracking-[0.06em] text-ink-fg transition-colors hover:bg-ink-cell">
                {service}
                <span aria-hidden="true" className="text-ink-link">→</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="overflow-hidden border border-ink-rule lg:col-span-2">
          <img src="/Images/about.jpg" className="h-full w-full object-cover" alt="The CodeOn Africa team at work" />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-ink-dim">
            Learn more about the minds behind the magic, the values that guide us, and how together we turn
            possibilities into reality.
          </p>
          <Link to="/about" className="btn-ghost self-start">
            More about us <FaLongArrowAltRight aria-hidden="true" />
          </Link>
          <div className="flex-1 overflow-hidden border border-ink-rule">
            <img src="/Images/culture1.jpg" className="h-full w-full object-cover" alt="Our culture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
