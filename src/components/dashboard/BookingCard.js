export default function BookingCard({
  booking,
  handleDelete,
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="pt-8">
        <img
          src={booking.image}
          alt={booking.doctorName}
          className="w-36 h-36 rounded-full object-cover"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {booking.doctorName}
        </h2>

        <p>{booking.specialty}</p>

        <p>{booking.hospital}</p>

        <p className="font-semibold">
          Fee: ৳{booking.fee}
        </p>

        <div className="card-actions mt-4">
          <button
            onClick={() =>
              handleDelete(booking._id)
            }
            className="btn btn-error"
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
}