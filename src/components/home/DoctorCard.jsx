import Link from "next/link";

export default function DoctorCard({
  doctor,
}) {
  return (
    <div className="card bg-white shadow-lg">
      <figure className="p-5 pb-0">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="rounded-xl h-[300px] w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl">
          {doctor.name}
        </h2>

        <p className="text-blue-600 font-medium">
          {doctor.specialty}
        </p>

        <div className="space-y-2 text-gray-500">
          <p>
            Experience: {doctor.experience}
          </p>

          <p>{doctor.hospital}</p>

          <p>Consultation Fee: ৳{doctor.fee}</p>
        </div>

        <div className="card-actions mt-4">
          <Link
            href={`/doctor-details/${doctor.id}`}
            className="btn btn-primary w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}