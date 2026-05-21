import Link from "next/link";

export default function DoctorCard({
  doctor,
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="pt-8">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-36 h-36 rounded-full object-cover"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {doctor.name}
        </h2>

        <p>{doctor.specialty}</p>

        <p>{doctor.hospital}</p>

        <p className="font-semibold">
          Fee: ৳{doctor.fee}
        </p>

        <div className="card-actions mt-4">
          <Link
            href={`/doctor-details/${doctor.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}