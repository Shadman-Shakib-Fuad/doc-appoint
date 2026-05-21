"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import DoctorCard from "@/components/home/DoctorCard";

import SectionTitle from "@/components/shared/SectionTitle";

export default function AllAppointmentsPage() {
  const [doctors, setDoctors] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const res =
        await api.get("/doctors");

      setDoctors(res.data);
    };

    fetchDoctors();
  }, []);

  const filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="py-20">
      <div className="container-width">
        <SectionTitle
          title="All Doctors"
          subtitle="Browse all available doctors and book appointments easily."
        />

        <div className="max-w-xl mx-auto mb-14">
          <input
            type="text"
            placeholder="Search by doctor name..."
            className="input input-bordered w-full"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
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