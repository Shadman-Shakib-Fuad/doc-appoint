export default function Statistics() {
  return (
    <section className="py-24">
      <div className="container-width">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-3xl p-10 text-center">
            <h2 className="text-5xl font-bold text-blue-600">
              12+
            </h2>

            <p className="text-gray-500 mt-4">
              Expert Doctors
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-10 text-center">
            <h2 className="text-5xl font-bold text-blue-600">
              500+
            </h2>

            <p className="text-gray-500 mt-4">
              Happy Patients
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-10 text-center">
            <h2 className="text-5xl font-bold text-blue-600">
              24/7
            </h2>

            <p className="text-gray-500 mt-4">
              Support Service
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-10 text-center">
            <h2 className="text-5xl font-bold text-blue-600">
              10+
            </h2>

            <p className="text-gray-500 mt-4">
              Hospitals Connected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}