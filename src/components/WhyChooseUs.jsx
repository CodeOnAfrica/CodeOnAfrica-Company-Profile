import { FaHandshake, FaLock } from 'react-icons/fa';
import { MdRocketLaunch } from 'react-icons/md';

// Three reasons, as a hairline-divided spec strip.
const REASONS = [
  { icon: MdRocketLaunch, value: '10+', title: 'Projects completed', body: 'Shipped and still running for schools, shops, startups and enterprises.' },
  { icon: FaHandshake, value: null, title: 'Client-centric approach', body: 'You talk to the people building your product, with regular demos and no surprises.' },
  { icon: FaLock, value: null, title: 'Quality, reliable & secure', body: 'Tested, reviewed and secured software, with support after launch.' },
];

const WhyChooseUs = () => {
  return (
    <section className="px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="kicker mb-3 text-muted-foreground">Why choose us</p>
        <h2 className="display mb-10 max-w-3xl text-4xl text-heading md:text-5xl">Built right, delivered, and looked after.</h2>
        <div className="cells cells-page sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, value, title, body }) => (
            <article key={title} className="bg-card p-7">
              <div className="flex items-center justify-between">
                <Icon size={26} className="text-brand" aria-hidden="true" />
                {value && <span className="font-display text-3xl font-extrabold text-heading [font-stretch:115%]">{value}</span>}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
