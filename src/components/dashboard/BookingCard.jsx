"use client";

import toast from "react-hot-toast";

export default function BookingCard({
  booking,
}) {
  const handleDelete = () => {
    toast.success(
      "Appointment deleted successfully!"
    );
  };

  const handleUpdate = () => {
    toast.success(
      "Appointment updated successfully!"
    );
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold">
        {booking.doctor}
      </h2>

      <p className="text-blue-600 mt-2">
        {booking.specialty}
      </p>

      <div className="space-y-2 mt-5 text-gray-500">
        <p>Date: {booking.date}</p>

        <p>Time: {booking.time}</p>

        <p>Fee: ৳{booking.fee}</p>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={handleUpdate}
          className="btn btn-primary"
        >
          Update
        </button>

        <button
          onClick={handleDelete}
          className="btn btn-error text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}