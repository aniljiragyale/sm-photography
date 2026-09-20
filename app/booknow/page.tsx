import { BookingForm } from '@/components/booking-form';

export default function BookNowPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <p className="eyebrow">Reserve your date</p>
        <h1>Book Your Photography Session</h1>
      </div>

      <div className="form-section">
        <BookingForm />
      </div>
    </div>
  );
}
