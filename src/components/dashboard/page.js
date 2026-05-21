"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import api from "@/services/api";

import BookingCard from "@/components/dashboard/BookingCard";

import ProfileCard from "@/components/dashboard/ProfileCard";

import PrivateRoute from "@/components/shared/PrivateRoute";

import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function DashboardPage() {
  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchBookings = async () => {
    const res =
      await api.get("/bookings");

    setBookings(res.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    const res =
      await api.delete(`/bookings/${id}`);

    if (res.data.deletedCount > 0) {
      toast.success(
        "Appointment Cancelled"
      );

      const remainingBookings =
        bookings.filter(
          (booking) =>
            booking._id !== id
        );

      setBookings(remainingBookings);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <PrivateRoute>
      <div className="container-width py-20">
        <h1 className="text-5xl font-bold mb-14">
          Dashboard
        </h1>

        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold">
              No Bookings Found
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              My Bookings
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking._id}
                  booking={booking}
                  handleDelete={
                    handleDelete
                  }
                />
              ))}
            </div>
          </div>
        )}

        <ProfileCard />
      </div>
    </PrivateRoute>
  );
}