"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiClock, FiGlobe, FiVideo } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BOOK_CALL } from "../../lib/bookCallData";
import { isBusinessEmail, isValidEmail } from "../../lib/emailValidation";
import "../../app/book-call/page.scss";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const shortDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
  for (let day = 1; day <= daysInMonth; day++) days.push(day);
  return days;
}

function isPastDate(year, month, day) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(year, month, day) < today;
}

function isAvailableDate(year, month, day) {
  const date = new Date(year, month, day);
  if (isPastDate(year, month, day)) return false;
  return date.getDay() !== 0;
}

function toDateParam(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getInitialSelectedDay(year, month) {
  const today = new Date();
  if (today.getFullYear() !== year || today.getMonth() !== month) return null;
  const day = today.getDate();
  return isAvailableDate(year, month, day) ? day : null;
}

export default function BookCallWidget() {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    () => new Date(now.getFullYear(), now.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState(() =>
    getInitialSelectedDay(now.getFullYear(), now.getMonth()),
  );
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [use24h, setUse24h] = useState(false);
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const fetchSlots = useCallback(async (day, format24h) => {
    if (!day) {
      setSlots([]);
      return;
    }
    setLoadingSlots(true);
    setSlotsError("");
    setSelectedSlot(null);
    try {
      const date = toDateParam(year, month, day);
      const format = format24h ? "24h" : "12h";
      const res = await fetch(`/api/book-call/availability?date=${date}&format=${format}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load time slots");
      setSlots(data.slots || []);
    } catch (err) {
      setSlots([]);
      setSlotsError(err.message || "Failed to load time slots");
    } finally {
      setLoadingSlots(false);
    }
  }, [year, month]);

  useEffect(() => {
    fetchSlots(selectedDate, use24h);
  }, [selectedDate, use24h, fetchSlots]);

  const previousMonth = () => {
    const next = new Date(year, month - 1, 1);
    setCurrentMonth(next);
    setSelectedDate(getInitialSelectedDay(next.getFullYear(), next.getMonth()));
    setBookingResult(null);
  };

  const nextMonth = () => {
    const next = new Date(year, month + 1, 1);
    setCurrentMonth(next);
    setSelectedDate(getInitialSelectedDay(next.getFullYear(), next.getMonth()));
    setBookingResult(null);
  };

  const handleDateClick = (day) => {
    if (!day || !isAvailableDate(year, month, day)) return;
    setSelectedDate(day);
    setBookingResult(null);
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedSlot) return;
    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isBusinessEmail(email)) {
      toast.error("Please use your business email address.");
      return;
    }
    if (!message.trim()) {
      toast.error("Please tell us what this call is about.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/book-call/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: toDateParam(year, month, selectedDate),
          startIso: selectedSlot.startIso,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");
      setBookingResult(data);
      setSelectedSlot(null);
      toast.success("Your call is booked. Check your email for the calendar invite.");
    } catch (err) {
      toast.error(err.message || "Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedDayLabel = () => {
    if (!selectedDate) return "";
    const date = new Date(year, month, selectedDate);
    return `${shortDayNames[date.getDay()]} ${String(selectedDate).padStart(2, "0")}`;
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <>
      <section className="book-call-section">
        <div className="book-call-wrapper">
          <div className="booking-card">
            <div className="booking-layout">
              <aside className="event-panel">
                <div className="event-host">
                  <span className="event-host-avatar" aria-hidden="true">{BOOK_CALL.hostInitial}</span>
                  <span className="event-host-name">{BOOK_CALL.hostName}</span>
                </div>
                <h2 className="call-title">{BOOK_CALL.title}</h2>
                <p className="call-description">{BOOK_CALL.description}</p>
                <ul className="event-meta">
                  <li>
                    <FiClock aria-hidden="true" />
                    <span>{BOOK_CALL.duration}</span>
                  </li>
                  <li>
                    <FiVideo aria-hidden="true" />
                    <span>{BOOK_CALL.meetingType}</span>
                  </li>
                  <li>
                    <FiGlobe aria-hidden="true" />
                    <span>{BOOK_CALL.timezone}</span>
                  </li>
                </ul>
              </aside>

              <div className="calendar-panel">
                <div className="calendar-header">
                  <h3 className="current-month">
                    {monthNames[month]} {year}
                  </h3>
                  <div className="calendar-nav">
                    <button type="button" className="month-nav-button" onClick={previousMonth} aria-label="Previous month">
                      <FiChevronLeft aria-hidden="true" />
                    </button>
                    <button type="button" className="month-nav-button" onClick={nextMonth} aria-label="Next month">
                      <FiChevronRight aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="calendar-grid">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="day-header">{day}</div>
                  ))}
                  {days.map((day, index) => {
                    const available = day ? isAvailableDate(year, month, day) : false;
                    const isToday =
                      day &&
                      day === now.getDate() &&
                      month === now.getMonth() &&
                      year === now.getFullYear();
                    return (
                      <button
                        type="button"
                        key={index}
                        disabled={!day || !available}
                        className={`calendar-day ${
                          !day ? "empty" : available ? "available" : "unavailable"
                        } ${day === selectedDate ? "selected" : ""} ${isToday ? "today" : ""}`}
                        onClick={() => handleDateClick(day)}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={`times-panel ${selectedDate ? "times-panel--active" : ""}`}>
                {bookingResult ? (
                  <div className="booking-success">
                    <h3 className="times-date">You&apos;re booked</h3>
                    <p className="booking-success-text">
                      Your discovery call is confirmed.
                      {bookingResult.inviteSent
                        ? ` A calendar invite has been sent to ${email}.`
                        : " Open the event in Google Calendar for meeting details."}
                    </p>
                    {bookingResult.htmlLink && (
                      <a
                        href={bookingResult.htmlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="booking-calendar-link"
                      >
                        View in Google Calendar
                      </a>
                    )}
                  </div>
                ) : selectedDate ? (
                  <>
                    <div className="times-header">
                      <h3 className="times-date">{getSelectedDayLabel()}</h3>
                      <div className="time-format-toggle" role="group" aria-label="Time format">
                        <button
                          type="button"
                          className={`time-format-btn ${!use24h ? "active" : ""}`}
                          onClick={() => setUse24h(false)}
                        >
                          12h
                        </button>
                        <button
                          type="button"
                          className={`time-format-btn ${use24h ? "active" : ""}`}
                          onClick={() => setUse24h(true)}
                        >
                          24h
                        </button>
                      </div>
                    </div>

                    <div className="times-slots-scroll">
                      {loadingSlots ? (
                        <p className="times-placeholder">Loading available times…</p>
                      ) : slotsError ? (
                        <p className="times-error" role="alert">{slotsError}</p>
                      ) : slots.length === 0 ? (
                        <p className="times-placeholder">No open slots on this date.</p>
                      ) : (
                        <div className="time-slots">
                          {slots.map((slot) => (
                            <button
                              type="button"
                              key={slot.startIso}
                              className={`time-slot ${selectedSlot?.startIso === slot.startIso ? "selected" : ""}`}
                              onClick={() => setSelectedSlot(slot)}
                            >
                              {slot.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {selectedSlot && (
                      <div className="booking-form">
                        <input
                          type="text"
                          className="booking-input"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <input
                          type="email"
                          className="booking-input"
                          placeholder="Your business email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <textarea
                          className="booking-input booking-textarea"
                          placeholder="Tell us what this call is about"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                          required
                        />
                      </div>
                    )}

                    <button
                      type="button"
                      className="confirm-button"
                      onClick={handleConfirmBooking}
                      disabled={isSubmitting || !selectedSlot || loadingSlots}
                    >
                      {isSubmitting ? "Booking…" : "Confirm Booking"}
                    </button>
                  </>
                ) : (
                  <p className="times-placeholder">Select a date to view available times</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
