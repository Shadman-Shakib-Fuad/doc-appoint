"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import toast from "react-hot-toast";

import api from "@/services/api";

export default function DoctorDetailsPage() {
  const params = useParams();

  const [doctor, setDoctor] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res =
          await api.get("/doctors");

        const foundDoctor =
          res.data.find(
            (doc) =>
              doc.id ===
              parseInt(params.id)
          );

        setDoctor(foundDoctor);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [params.id]);

  const handleAppointment =
    async () => {
      const bookingData = {
        patientName: "Demo Patient",
        email: "demo@gmail.com",
        doctorName: doctor.name,
        date: new Date()
          .toISOString()
          .split("T")[0],
      };

      try {
        await api.post(
          "/bookings",
          bookingData
        );

        toast.success(
          "Appointment Booked Successfully"
        );
      } catch (error) {
        toast.error(
          "Booking Failed"
        );
      }
    };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-24 px-5">
      <div className="container-width">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid lg:grid-cols-2">
          <div>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <span className="badge badge-primary badge-lg w-fit">
              Available
            </span>

            <h1 className="text-5xl font-bold mt-6">
              {doctor.name}
            </h1>

            <p className="text-xl text-primary mt-4">
              {doctor.speciality}
            </p>

            <p className="mt-8 text-gray-500 leading-8">
              Experienced doctor with
              excellent patient care and
              modern healthcare solutions.
            </p>

            <div className="mt-10 space-y-4">
              <p className="text-lg">
                Experience: 8+ Years
              </p>

              <p className="text-lg">
                Consultation Fee: $50
              </p>

              <p className="text-lg">
                Hospital: City Medical
                Center
              </p>
            </div>

            <button
              onClick={
                handleAppointment
              }
              className="btn btn-primary rounded-full mt-12 w-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}