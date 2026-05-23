"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import api from "@/services/api";

import toast from "react-hot-toast";

export default function DoctorDetailsPage() {
  const params = useParams();

  const [doctor, setDoctor] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await api.get(
          `/doctors/${params.id}`
        );

        setDoctor(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchDoctor();
    }
  }, [params]);

  const handleAppointment = () => {
    const previousAppointments =
      JSON.parse(
        localStorage.getItem(
          "appointments"
        )
      ) || [];

    const newAppointment = {
      ...doctor,
      bookedAt:
        new Date().toLocaleString(),
    };

    const updatedAppointments = [
      ...previousAppointments,
      newAppointment,
    ];

    localStorage.setItem(
      "appointments",
      JSON.stringify(
        updatedAppointments
      )
    );

    toast.success(
      "Appointment Booked Successfully"
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-bold">
        Oops Something Went Wrong
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-24">
      <div className="container-width">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid lg:grid-cols-2">
          <div>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-12 flex flex-col justify-center">
            <h1 className="text-5xl font-black">
              {doctor.name}
            </h1>

            <p className="text-primary text-2xl font-semibold mt-5">
              {doctor.specialty}
            </p>

            <div className="space-y-5 mt-10 text-lg">
              <p>
                <span className="font-bold">
                  Experience:
                </span>{" "}
                {doctor.experience}
              </p>

              <p>
                <span className="font-bold">
                  Hospital:
                </span>{" "}
                {doctor.hospital}
              </p>

              <p>
                <span className="font-bold">
                  Appointment Fee:
                </span>{" "}
                ৳ {doctor.fee}
              </p>
            </div>

            <button
              onClick={
                handleAppointment
              }
              className="btn btn-primary rounded-full mt-12 w-full text-lg"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}