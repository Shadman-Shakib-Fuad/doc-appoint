export default function DashboardPage() {
  return (
    <div className="container-width py-20">
      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold">
            My Bookings
          </h2>

          <p className="text-gray-500 mt-4">
            Manage your booked appointments.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold">
            My Profile
          </h2>

          <p className="text-gray-500 mt-4">
            Update your profile information.
          </p>
        </div>
      </div>
    </div>
  );
}