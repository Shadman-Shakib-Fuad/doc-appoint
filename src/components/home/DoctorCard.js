import Link from "next/link";

export default function DoctorCard({
  doctor,
}) {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <figure className="overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-[320px] object-cover hover:scale-110 transition-all duration-700"
        />
      </figure>

      <div className="p-8">
        <h2 className="text-3xl font-black">
          {doctor.name}
        </h2>

        <p className="text-primary font-semibold mt-3">
          {doctor.speciality}
        </p>

        <p className="text-gray-500 mt-4 leading-7">
          {doctor.education}
        </p>

        <div className="mt-8">
          <Link
            href={`/doctor-details/${doctor._id}`}
            className="btn btn-primary rounded-full w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}