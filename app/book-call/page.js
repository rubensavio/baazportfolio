"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function BookCall() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5, 1)); // June 2025
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const timeSlots = [
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek =
      firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Adjust for Monday start

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(day);
    }
  };

  const handleConfirmBooking = () => {
    if (selectedDate) {
      setIsModalOpen(true);
    } else {
      alert("Please select a date first");
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTime(null);
  };

  const handleSubmitBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    setIsSubmitting(true);

    const bookingData = {
      date: `${
        monthNames[currentMonth.getMonth()]
      } ${selectedDate}, ${currentMonth.getFullYear()}`,
      time: selectedTime,
      timestamp: new Date().toISOString(),
    };

    // Replace with your Google Apps Script URL
    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL_HERE", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then(() => {
        alert(
          `Booking confirmed for ${bookingData.date} at ${bookingData.time}!`
        );
        setIsModalOpen(false);
        setSelectedDate(null);
        setSelectedTime(null);
      })
      .catch((err) => {
        alert("Error submitting booking. Please try again.");
        console.error(err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const getDayName = () => {
    if (!selectedDate) return "";
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      selectedDate
    );
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  const isAvailableDate = (day) => {
    // Define which dates are available (for demo purposes)
    // You can replace this with actual availability logic
    const availableDates = [6, 13, 16, 17, 18, 19, 20];
    return availableDates.includes(day);
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="book-call-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="book-call-section">
        <div className="book-call-wrapper">
          <div className="booking-header">
            <h1 className="booking-title">Book Your Call</h1>
            <p className="booking-subtitle">
              Select a date and time that works best for you
            </p>
          </div>

          <div className="booking-card">
            <div className="call-info">
              <h2 className="call-title">30-Minute Discovery Call</h2>
              <p className="call-description">
                Let's discuss your needs and how we can help you succeed
              </p>
            </div>

            <div className="calendar-container">
              <div className="calendar-header">
                <button
                  className="month-nav-button"
                  onClick={previousMonth}
                  aria-label="Previous month"
                >
                  ←
                </button>
                <h3 className="current-month">
                  {monthNames[currentMonth.getMonth()]}{" "}
                  {currentMonth.getFullYear()}
                </h3>
                <button
                  className="month-nav-button"
                  onClick={nextMonth}
                  aria-label="Next month"
                >
                  →
                </button>
              </div>

              <div className="calendar-grid">
                {daysOfWeek.map((day) => (
                  <div key={day} className="day-header">
                    {day}
                  </div>
                ))}
                {days.map((day, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${
                      day
                        ? isAvailableDate(day)
                          ? "available"
                          : "unavailable"
                        : "empty"
                    } ${day === selectedDate ? "selected" : ""}`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <button className="confirm-button" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      </section>

      {/* Time Slot Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <h3 className="modal-title">
              {getDayName()}, {selectedDate}{" "}
              {monthNames[currentMonth.getMonth()]}
            </h3>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-slot ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <button
              className="modal-submit-button"
              onClick={handleSubmitBooking}
              disabled={isSubmitting || !selectedTime}
            >
              {isSubmitting ? "Submitting..." : "Confirm Time"}
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
