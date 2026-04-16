import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import BookCallClient from "./BookCallClient";
import "./page.scss";

export default function BookCall() {
  return (
    <div className="book-call-page">
      <ClientNavbar />

      <div className="booking-header">
        <h1 className="booking-title">Book Your Call</h1>
        <p className="booking-subtitle">
          Select a date and time that works best for you
        </p>
      </div>

      <BookCallClient />
    </div>
  );
}
