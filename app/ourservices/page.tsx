const services = [
  {
    title: 'Wedding Shoot',
    description:
      'Capturing the essence and joy of your wedding day through candid moments, elegant poses, and unforgettable details.',
  },
  {
    title: 'Pre-Wedding Shoot',
    description:
      'Romantic, story-rich sessions that highlight your bond with cinematic compositions and natural emotion.',
  },
  {
    title: 'Cinematic Videography',
    description:
      'High-quality storytelling videos with dynamic edits, emotional pacing, and memorable highlights.',
  },
  {
    title: 'Maternity Photography',
    description:
      'Celebrate the journey of motherhood through intimate portraits that feel graceful, warm, and deeply personal.',
  },
  {
    title: 'Outdoor Sessions',
    description:
      'Natural-light and landscape-driven portraits that add atmosphere, depth, and timeless beauty to every frame.',
  },
  {
    title: 'Event Coverage',
    description:
      'Comprehensive coverage for birthdays, anniversaries, and special gatherings, preserving the soul of the day.',
  },
  {
    title: 'Candid Photography',
    description:
      'Authentic, emotion-filled photographs that keep your genuine smiles, intimate moments, and spontaneous joy.',
  },
  {
    title: 'Modeling Portfolios',
    description:
      'Polished styling and creative direction for ambitious models and personal brands seeking standout visuals.',
  },
  {
    title: 'Drone Shoot',
    description:
      'Aerial perspectives that add drama, scale, and cinematic beauty especially for outdoor events and destination shoots.',
  },
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <p className="eyebrow">Creative studio services</p>
        <h1>Our Services</h1>
      </div>

      <div className="page-content">
        <div className="services-grid-plain">
          {services.map((service) => (
            <div key={service.title} className="service-card-plain">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
