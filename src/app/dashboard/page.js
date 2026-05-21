"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import BookingCard from "@/components/dashboard/BookingCard";

import ProfileCard from "@/components/dashboard/ProfileCard";

import PrivateRoute from "@/components/shared/PrivateRoute";

export default function DashboardPage() {
  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res =
        await api.get("/bookings");

      setBookings(res.data);
    };

    fetchBookings();
  }, []);

  return (
    <PrivateRoute>
      <div className="container-width py-20">
        <h1 className="text-5xl font-bold mb-14">
          Dashboard
        </h1>

        <div>
          <h2 className="text-3xl font-bold mb-8">
            My Bookings
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
              />
            ))}
          </div>
        </div>

        <ProfileCard />
      </div>
    </PrivateRoute>
  );
}