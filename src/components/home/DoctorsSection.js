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
    <div className="py-24">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Explore Doctors
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            Find experienced and trusted
            doctors from different
            specialties and book your
            appointment easily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
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