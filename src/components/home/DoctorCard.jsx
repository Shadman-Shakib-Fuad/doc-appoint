"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function DoctorCard({
  doctor,
}) {
  const router = useRouter();

  const handleViewDetails =
    () => {
      const token =
        localStorage.getItem(
          "token"
        );

      if (!token) {
        toast.error(
          "Please login first"
        );

        router.push("/login");

        return;
      }

      router.push(
        `/doctor-details/${doctor.id}`
      );
    };

  return (
    <div className="card bg-white shadow-xl hover:-translate-y-2 duration-300 rounded-3xl overflow-hidden">
      <figure className="p-5 pb-0">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="rounded-2xl h-[320px] w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-2xl">
            {doctor.name}
          </h2>

          <div className="badge badge-primary">
            Available
          </div>
        </div>

        <p className="text-blue-600 font-medium">
          {doctor.specialty}
        </p>

        <div className="space-y-2 text-gray-500 mt-3">
          <p>
            Experience:{" "}
            {doctor.experience}
          </p>

          <p>{doctor.hospital}</p>

          <p>
            Consultation Fee: ৳
            {doctor.fee}
          </p>
        </div>

        <div className="card-actions mt-5">
          <button
            onClick={
              handleViewDetails
            }
            className="btn btn-primary w-full rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}