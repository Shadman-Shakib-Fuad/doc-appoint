"use client";

import toast from "react-hot-toast";

export default function BookingModal() {
  const handleBooking = (e) => {
    e.preventDefault();

    toast.success(
      "Appointment booked successfully!"
    );

    document.getElementById(
      "booking_modal"
    ).close();
  };

  return (
    <dialog
      id="booking_modal"
      className="modal"
    >
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-3xl mb-8">
          Book Appointment
        </h3>

        <form
          onSubmit={handleBooking}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Patient Name"
            className="input input-bordered w-full"
            required
          />

          <select className="select select-bordered w-full">
            <option>Male</option>

            <option>Female</option>
          </select>

          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            required
          />

          <input
            type="date"
            className="input input-bordered w-full"
            required
          />

          <input
            type="time"
            className="input input-bordered w-full"
            required
          />

          <button className="btn btn-primary w-full">
            Confirm Booking
          </button>
        </form>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}