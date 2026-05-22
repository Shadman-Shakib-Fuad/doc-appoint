import Link from "next/link";

export default function DoctorCard({
  doctor,
}) {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
      <div className="overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-[320px] object-cover hover:scale-110 transition-all duration-700"
        />
      </div>

      <div className="p-8">
        <span className="badge badge-primary badge-lg">
          Available
        </span>

        <h2 className="text-3xl font-bold mt-5">
          {doctor.name}
        </h2>

        <p className="text-primary mt-3 text-lg">
          {doctor.speciality}
        </p>

        <p className="mt-5 text-gray-500 leading-8">
          Experienced doctor with modern
          healthcare solutions.
        </p>

        <Link
          href={`/doctor-details/${doctor.id}`}
          className="btn btn-primary rounded-full w-full mt-8"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}