"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import toast from "react-hot-toast";

import api from "@/services/api";

export default function DoctorDetailsPage() {
  const { id } = useParams();

  const [doctor, setDoctor] =
    useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      const res =
        await api.get("/doctors");

      const foundDoctor =
        res.data.find(
          (doc) => doc.id === Number(id)
        );

      setDoctor(foundDoctor);
    };

    fetchDoctor();
  }, [id]);

  const handleBooking = async () => {
    const bookingData = {
      doctorName: doctor.name,
      specialty: doctor.specialty,
      hospital: doctor.hospital,
      fee: doctor.fee,
      image: doctor.image,
    };

    const res = await api.post(
      "/bookings",
      bookingData
    );

    if (res.data.insertedId) {
      toast.success(
        "Appointment Booked Successfully"
      );
    }
  };

  if (!doctor) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container-width py-20">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full rounded-3xl"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            {doctor.name}
          </h1>

          <p className="text-blue-600 text-2xl mt-4">
            {doctor.specialty}
          </p>

          <div className="space-y-4 mt-8 text-lg">
            <p>
              Experience:{" "}
              {doctor.experience}
            </p>

            <p>
              Hospital: {doctor.hospital}
            </p>

            <p>
              Consultation Fee: ৳
              {doctor.fee}
            </p>
          </div>

          <button
            onClick={handleBooking}
            className="btn btn-primary btn-lg mt-10"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}