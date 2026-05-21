import bookings from "@/lib/bookings";
import BookingCard from "@/components/dashboard/BookingCard";

export default function DashboardPage() {
  return (
    <div className="container-width py-20">
      <h1 className="text-5xl font-bold mb-14">
        My Bookings
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
}