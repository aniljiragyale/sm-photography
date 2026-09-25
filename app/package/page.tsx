import Link from 'next/link';

const packages = [
  {
    name: 'Silver Package',
    price: '₹30,000',
    items: ['Traditional Photographer', 'Traditional Videographer', '20-Page Photobook Album', 'Video Editing and Reels', '12x36 NT HD Photobook Album'],
  },
  {
    name: 'Gold Package',
    price: '₹50,000',
    items: ['Traditional Photographer', 'Traditional Videographer', 'Candid Photographer', '25-Page Photobook Album', 'Video Editing with Highlights + Reel', '12x36 NT HD Photobook Album'],
  },
  {
    name: 'Diamond Package',
    price: '₹70,000',
    items: ['Traditional Photographer', 'Traditional Videographer', 'Candid Photographer', 'Cinematic Videographer', '30-Page Photobook Album', 'Video Editing with Highlights Reel', 'Unlimited Photos', '12x36 NT HD Photobook Album'],
  },
  {
    name: 'Pre-Wedding Package',
    price: '₹45,000',
    items: ['Candid Photography', 'Cinematic Videography + Drone', 'Teaser Video + Reel + Highlight (4K / Full HD Video)'],
  },
  {
    name: 'Maternity Package',
    price: '₹10,000',
    items: ['1 Day Rate', 'Candid Photography (25–30 Edited Photos + All RAW Soft Copy + Reel)'],
  },
  {
    name: 'Terms & Conditions',
    price: 'Flexible',
    items: ['75% payment in advance', 'Transportation and location charges separately', 'Stay and dinner managed by clients'],
  },
];

export default function PackagePage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div className="page-actions page-actions-top">
          <Link href="/" className="page-back">← Back</Link>
        </div>
        <p className="eyebrow">Photography plans</p>
        <h1>Photography Packages</h1>
      </div>

      <div className="page-content">
        <div className="package-grid">
          {packages.map((pkg) => (
            <div key={pkg.name} className="package-card">
              <span className="package-badge">{pkg.name}</span>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
