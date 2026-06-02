import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, Clock, Check, Sparkles } from "lucide-react";
import { services, packages } from "../lib/data";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM",
];

const allOptions = [
  ...services.map((s) => ({ id: s.id, name: s.name, price: s.price, type: "service" })),
  ...packages.map((p) => ({ id: p.id, name: p.name, price: p.price, type: "package" })),
];

function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    specialRequests: ""
  });

  const selectedItem = allOptions.find((o) => o.id === selectedOption);

  const handleConfirm = () => {
    // Here you would typically send the booking data to an API
    console.log("Booking confirmed:", {
      ...formData,
      service: selectedItem,
      date: selectedDate,
      time: selectedTime
    });
    setConfirmed(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (confirmed) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-12 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-primary">
          <Check className="h-10 w-10" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Booking Confirmed!
        </h1>
        <p className="mt-4 text-muted-foreground">
          Thank you for booking with Sushma Reddy Makeup Artistry. We have received your
          request for <strong>{selectedItem?.name}</strong> on{" "}
          <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          You will receive a confirmation call within 24 hours to finalize your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Book Your Appointment
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A few simple steps to your perfect look
        </p>
      </div>

      {/* Progress */}
      <div className="mb-10 flex items-center justify-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                s <= step
                  ? "bg-primary text-primary-foreground"
                  : "border border-rose-200 bg-card text-muted-foreground"
              }`}
            >
              {s < step ? <Check className="h-4 w-4" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`h-1 w-8 rounded-full ${
                  s < step ? "bg-primary" : "bg-rose-100"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Select Service/Package */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Select a Service or Package
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {allOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  selectedOption === option.id
                    ? "border-primary bg-rose-50 shadow-md"
                    : "border-rose-200/40 bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{option.name}</span>
                  <span className="font-serif text-lg font-bold text-primary">
                    ₹{option.price.toLocaleString()}
                  </span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground capitalize">
                  {option.type}
                </span>
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => selectedOption && setStep(2)}
              disabled={!selectedOption}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rose-600 disabled:opacity-50"
            >
              Next <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Select Date & Time */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Choose Date & Time
            </h2>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Time Slot</label>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                    selectedTime === slot
                      ? "border-primary bg-rose-50 text-primary"
                      : "border-rose-200 bg-card text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  <Clock className="mx-auto mb-1 h-3.5 w-3.5" />
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => selectedDate && selectedTime && setStep(3)}
              disabled={!selectedDate || !selectedTime}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rose-600 disabled:opacity-50"
            >
              Next <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setStep(2)} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Confirm Your Booking
            </h2>
          </div>

          <div className="rounded-2xl border border-rose-200/40 bg-rose-50/50 p-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Service</span>
                <span className="font-medium text-foreground">{selectedItem?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Date</span>
                <span className="font-medium text-foreground">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Time</span>
                <span className="font-medium text-foreground">{selectedTime}</span>
              </div>
              <div className="border-t border-rose-200/40 pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-serif text-xl font-bold text-primary">
                    ₹{selectedItem?.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-200/40 bg-card p-6">
            <h3 className="font-medium text-foreground">Your Details</h3>
            <div className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="+91"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Reception</option>
                  <option>Party</option>
                  <option>Photoshoot</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Special Requests</label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Any special requirements or preferences..."
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rose-600"
          >
            <Sparkles className="mr-2 inline h-4 w-4" />
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingPage;