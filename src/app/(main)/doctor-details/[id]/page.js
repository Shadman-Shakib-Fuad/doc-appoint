import doctors from "@/lib/doctors";

export default function DoctorDetailsPage({
  params,
}) {
  const doctor = doctors.find(
    (item) => item.id == params.id
  );

  return (
    <div className="container-width py-20">
      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full max-w-md rounded-2xl"
        />

        <div className="mt-10 space-y-4">
          <h1 className="text-5xl font-bold">
            {doctor.name}
          </h1>

          <p className="text-2xl text-blue-600">
            {doctor.specialty}
          </p>

          <p>
            Experience: {doctor.experience}
          </p>

          <p>{doctor.hospital}</p>

          <p>Consultation Fee: ৳{doctor.fee}</p>

          <button className="btn btn-primary mt-6">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}