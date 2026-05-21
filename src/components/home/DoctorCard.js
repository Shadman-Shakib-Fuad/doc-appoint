import Link from "next/link";

export default function DoctorCard({
  doctor,
}) {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
      <div className="p-8 flex flex-col items-center text-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg"
        />

        <h2 className="text-2xl font-bold mt-6">
          {doctor.name}
        </h2>

        <p className="text-primary font-semibold mt-2">
          {doctor.specialty}
        </p>

        <p className="text-gray-500 mt-2">
          {doctor.hospital}
        </p>

        <p className="font-bold text-lg mt-3">
          Fee: ৳{doctor.fee}
        </p>

        <Link
          href={`/doctor-details/${doctor.id}`}
          className="btn btn-primary mt-6 rounded-full px-8"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}