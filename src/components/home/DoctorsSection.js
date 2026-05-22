"use client";

import DoctorCard from "./DoctorCard";

export default function DoctorsSection() {
  const doctors = [
    {
      _id: "6a0f0f31d23cea73bd83f086",
      name: "Dr. Tanvir Ahmed",
      specialty: "Neurologist",
      experience: "8 Years",
      hospital: "Square Hospital",
      fee: 1000,
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },

    {
      _id: "6a0f0f31d23cea73bd83f087",
      name: "Dr. Sarah Khan",
      specialty: "Cardiologist",
      experience: "10 Years",
      hospital: "Apollo Hospital",
      fee: 1200,
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      _id: "6a0f0f31d23cea73bd83f088",
      name: "Dr. Rahim Islam",
      specialty: "Dermatologist",
      experience: "6 Years",
      hospital: "United Hospital",
      fee: 900,
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div className="py-28 bg-base-100">
      <div className="container-width">
        <div className="text-center">
          <h2 className="text-5xl font-black">
            Top Rated Doctors
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            Find experienced and trusted
            doctors from different
            specialties and book your
            appointments easily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {doctors.map((doctor) => (
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