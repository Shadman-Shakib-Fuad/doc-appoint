"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import DoctorCard from "./DoctorCard";

export default function DoctorsSection() {
  const [doctors, setDoctors] =
    useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res =
          await api.get("/doctors");

        setDoctors(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="py-28">
      <div className="container-width">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Top Rated Doctors
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            Find experienced and trusted
            doctors from different
            specialties and book your
            appointments easily from
            anywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {doctors
            .slice(0, 3)
            .map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            ))}
        </div>
      </div>
    </div>
  );
}