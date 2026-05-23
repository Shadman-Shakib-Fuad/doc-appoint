"use client";

import { useEffect, useState } from "react";

import DoctorCard from "@/components/home/DoctorCard";

import api from "@/services/api";

export default function AllAppointmentsPage() {
  const [doctors, setDoctors] =
    useState([]);

  const [appointments, setAppointments] =
    useState([]);

  const [search, setSearch] =
    useState("");

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

    const savedAppointments =
      JSON.parse(
        localStorage.getItem(
          "appointments"
        )
      ) || [];

    setAppointments(
      savedAppointments
    );
  }, []);

  const clearAppointments =
    () => {
      localStorage.removeItem(
        "appointments"
      );

      setAppointments([]);
    };

  const filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="min-h-screen bg-base-200 py-20">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-5xl font-black">
            All Appointments
          </h1>

          <p className="mt-5 text-gray-500">
            Manage your booked
            appointments easily
          </p>
        </div>

        <div className="bg-white rounded-[30px] shadow-xl p-8 mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Booked Appointments
            </h2>

            <button
              onClick={
                clearAppointments
              }
              className="btn btn-error rounded-full text-white"
            >
              Clear All
            </button>
          </div>

          {appointments.length ===
          0 ? (
            <p className="text-gray-500 mt-6">
              No appointments
              booked yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {appointments.map(
                (
                  appointment,
                  index
                ) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-6"
                  >
                    <h3 className="text-2xl font-bold">
                      {
                        appointment.doctorName
                      }
                    </h3>

                    <p className="mt-2 text-primary">
                      {
                        appointment.specialty
                      }
                    </p>

                    <p className="mt-2 text-gray-500">
                      {
                        appointment.hospital
                      }
                    </p>

                    <p className="mt-3 font-semibold">
                      Fee: ৳
                      {
                        appointment.fee
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-5xl font-black">
            Explore Doctors
          </h2>

          <p className="mt-5 text-gray-500">
            Find your desired
            specialist doctor
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <input
            type="text"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="input input-bordered w-full max-w-xl rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {filteredDoctors.map(
            (doctor) => (
              <DoctorCard
                key={doctor._id}
                doctor={doctor}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}