import Link from 'next/link';

const services = [
  {
    title: 'Wedding Shoot',
    description:
      'A complete visual story of your wedding, from preparations and rituals to the reception. We balance candid emotion, family portraits, couple direction, and detail photography.',
    deliverables: 'Candid coverage, family portraits, couple portraits, rituals, edited gallery, and album-ready selections.',
  },
  {
    title: 'Pre-Wedding Shoot',
    description:
      'Relaxed, location-based sessions built around your chemistry and personality. We help with concepts, styling, locations, and natural posing.',
    deliverables: 'Concept planning, location guidance, edited portraits, cinematic frames, and social-media reels.',
  },
  {
    title: 'Cinematic Videography',
    description:
      'Story-led wedding and event films with thoughtful camera movement, clean sound, emotional pacing, and polished editing.',
    deliverables: 'Teaser film, highlight edit, full-event coverage options, reels, and music-synced storytelling.',
  },
  {
    title: 'Maternity Photography',
    description:
      'Gentle portraits that celebrate pregnancy with soft light, comfortable direction, and intimate family moments.',
    deliverables: 'Wardrobe guidance, location or home session, individual portraits, couple portraits, and edited keepsakes.',
  },
  {
    title: 'Outdoor Sessions',
    description:
      'Natural-light portraits designed around golden hour, meaningful locations, scenic backdrops, and an easy-going experience.',
    deliverables: 'Location planning, creative direction, natural posing, edited gallery, and print-ready images.',
  },
  {
    title: 'Event Coverage',
    description:
      'Reliable coverage for birthdays, engagements, anniversaries, cultural celebrations, and corporate gatherings.',
    deliverables: 'Guest moments, decor and details, group portraits, candid reactions, and a curated final gallery.',
  },
  {
    title: 'Candid Photography',
    description:
      'Unobtrusive photography focused on genuine expressions, laughter, tears, movement, and the moments people often miss.',
    deliverables: 'Natural storytelling, reaction photography, candid portraits, and carefully edited high-resolution images.',
  },
  {
    title: 'Modeling Portfolios',
    description:
      'Portfolio sessions that present your personality and range with clear direction, considered lighting, and strong visual framing.',
    deliverables: 'Mood-board planning, pose direction, outfit guidance, editorial portraits, and portfolio-ready selects.',
  },
  {
    title: 'Drone Shoot',
    description:
      'Aerial photography and video that add scale and cinematic perspective to venues, outdoor celebrations, properties, and destinations.',
    deliverables: 'Aerial establishing shots, venue perspectives, cinematic clips, and coordinated ground-and-air storytelling.',
  },
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div className="page-actions page-actions-top">
          <Link href="/" className="page-back">← Back</Link>
        </div>
        <p className="eyebrow">Creative studio services</p>
        <h1>Our Services</h1>
        <p>Thoughtful photography and film coverage for celebrations, people, brands, and the stories in between.</p>
      </div>

      <div className="page-content">
        <div className="services-grid-plain">
          {services.map((service) => (
            <div key={service.title} className="service-card-plain">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-deliverables"><strong>What you receive:</strong> {service.deliverables}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
