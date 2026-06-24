import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import BookCallClient from "./BookCallClient";
import "./page.scss";

export default function BookCall() {
  return (
    <div className="baaz-v2 book-call-v2">
      <ClientNavbar />

      <header className="book-call-hero v2-wrap">
        <p className="v2-label book-call-eyebrow">Schedule</p>
        <h1 className="booking-title v2-display">Book Your Call</h1>
        <p className="booking-subtitle">
          Select a date and time that works best for you
        </p>
      </header>

      <BookCallClient />
    </div>
  );
}
