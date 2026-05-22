"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import DoctorCard from "@/components/home/DoctorCard";

export default function AllAppointmentsPage() {
  const [doctors, setDoctors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res =
          await api.get("/doctors");

        setDoctors(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-24">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-5xl font-black">
            Explore Doctors
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            Find specialist doctors and
            book appointments instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}