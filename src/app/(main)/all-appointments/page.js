"use client";

import { useState } from "react";

import doctors from "@/lib/doctors";
import DoctorCard from "@/components/home/DoctorCard";
import SectionTitle from "@/components/shared/SectionTitle";

export default function AllAppointmentsPage() {
  const [search, setSearch] =
    useState("");

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
              key={doctor.id}
              doctor={doctor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}