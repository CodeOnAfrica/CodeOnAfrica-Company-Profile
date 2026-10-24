import { MdArrowOutward } from 'react-icons/md';

/*
 * The companies CodeOn Africa works with. Each card opens the partner's own site when it has one we could confirm;
 * a partner without a confirmed address shows no link rather than a guessed one.
 */
const PARTNERS = [
  {
    name: 'GoSpeedNet',
    logo: '/Images/logo/partner-gospeednet.png',
    description: 'Fibre and Wi-Fi internet provider in Kisii and across Kenya.',
    href: 'https://gospeednet.co.ke',
  },
  {
    name: 'Syncfusion',
    logo: '/Images/logo/partner-syncfusion.png',
    description: 'UI components and developer tools we build with.',
    href: 'https://www.syncfusion.com',
  },
  {
    name: 'Atibule',
    logo: '/Images/logo/partner-atibule.png',
    description: 'Locate, business and leadership partner.',
    href: null,
  },
  {
    name: 'ACDN',
    logo: '/Images/logo/partner-acdn.png',
    description: 'Partner network.',
    href: null,
  },
];

const OurPartners = () => {
  return (
    <section className="border-b border-border px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="kicker mb-3 text-muted-foreground">Partners</p>
        <h2 className="display mb-10 max-w-3xl text-4xl text-heading md:text-5xl">The companies we build with.</h2>
        <div className="cells cells-page sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map(({ name, logo, description, href }) => {
            const body = (
              <>
                {/* Logos are artwork for a light ground, so each sits on a white plate in every theme. */}
                <div className="keep-light mb-5 flex h-24 items-center justify-center border border-border bg-white p-4">
                  <img src={logo} alt={`${name} logo`} className="max-h-14 w-auto max-w-full object-contain" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                {href && (
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 font-mono text-xs uppercase tracking-[0.08em] text-heading group-hover:underline">
                    Visit {name} <MdArrowOutward aria-hidden="true" />
                  </span>
                )}
              </>
            );

            return href ? (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-card p-6 transition-colors hover:bg-muted">
                {body}
              </a>
            ) : (
              <div key={name} className="flex flex-col bg-card p-6">
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
