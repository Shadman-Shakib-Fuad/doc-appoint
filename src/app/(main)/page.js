export default function HomePage() {
  return (
    <div className="container-width">
      <div className="hero min-h-[80vh]">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              Book Your Doctor
              <span className="text-blue-600">
                {" "}
                Appointment
              </span>
              <br />
              Easily Online
            </h1>

            <p className="py-8 text-lg text-gray-600 max-w-2xl mx-auto">
              Find experienced doctors, check
              availability, and book appointments
              instantly from anywhere.
            </p>

            <button className="btn btn-primary btn-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}