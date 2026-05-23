"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import DoctorCard from "@/components/home/DoctorCard";

import toast from "react-hot-toast";

export default function AllAppointmentsPage() {
  const [doctors, setDoctors] =
    useState([]);

  const [appointments, setAppointments] =
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

  const handleClear = () => {
    localStorage.removeItem(
      "appointments"
    );

    setAppointments([]);

    toast.success(
      "Appointments Cleared"
    );
  };

  return (
    <div className="min-h-screen bg-base-200 py-20">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-5xl font-black">
            All Appointments
          </h1>

          <p className="mt-5 text-gray-500 text-lg">
            Your booked appointments
            and available doctors.
          </p>
        </div>

        {appointments.length >
          0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                My Appointments
              </h2>

              <button
                onClick={
                  handleClear
                }
                className="btn btn-error rounded-full text-white"
              >
                Clear Appointments
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {appointments.map(
                (
                  appointment,
                  index
                ) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-7 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold">
                      {
                        appointment.doctorName
                      }
                    </h3>

                    <p className="text-primary mt-2">
                      {
                        appointment.specialty
                      }
                    </p>

                    <div className="mt-4 text-gray-500 space-y-2">
                      <p>
                        {
                          appointment.hospital
                        }
                      </p>

                      <p>
                        Fee: ৳
                        {
                          appointment.fee
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        <div className="mt-24">
          <h2 className="text-4xl font-black text-center">
            Explore Doctors
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {doctors.map(
              (doctor) => (
                <DoctorCard
                  key={
                    doctor._id
                  }
                  doctor={doctor}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}