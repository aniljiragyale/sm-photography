import Link from 'next/link';
import { EnquiryForm } from '@/components/enquiry-form';

export default function PortfolioPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div className="page-actions page-actions-top">
          <Link href="/" className="page-back">
            ← Back
          </Link>
        </div>
        <p className="eyebrow">Let us know</p>
        <h1>Enquiry Form</h1>
      </div>

      <div className="form-section">
        <p className="form-note" style={{ marginBottom: '1.25rem' }}>
          We would love to hear from you — whether it is a booking request, a creative idea, or a general question.
        </p>
        <EnquiryForm />
      </div>
    </div>
  );
}
