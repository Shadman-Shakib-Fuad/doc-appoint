import doctors from "@/lib/doctors";
import BookingModal from "@/components/home/BookingModal";

export default function DoctorDetailsPage({
  params,
}) {
  const doctor = doctors.find(
    (item) => item.id == params.id
  );

  return (
    <div className="container-width py-20">
      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full rounded-3xl"
            />
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl font-bold">
              {doctor.name}
            </h1>

            <p className="text-2xl text-blue-600">
              {doctor.specialty}
            </p>

            <p className="text-lg">
              Experience:
              {" "}
              {doctor.experience}
            </p>

            <p className="text-lg">
              Hospital:
              {" "}
              {doctor.hospital}
            </p>

            <p className="text-lg">
              Consultation Fee:
              {" "}
              ৳{doctor.fee}
            </p>

            <button
              onClick={() =>
                document
                  .getElementById(
                    "booking_modal"
                  )
                  .showModal()
              }
              className="btn btn-primary btn-lg mt-5"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <BookingModal />
    </div>
  );
}