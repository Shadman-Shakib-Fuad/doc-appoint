import {
  FaUserMd,
  FaClock,
  FaHospital,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            We provide trusted healthcare
            services with experienced doctors
            and fast appointment booking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-base-100 shadow-xl rounded-3xl p-10 text-center">
            <div className="text-5xl flex justify-center text-blue-600">
              <FaUserMd />
            </div>

            <h3 className="text-3xl font-bold mt-6">
              Expert Doctors
            </h3>

            <p className="text-gray-500 mt-4">
              Experienced and professional
              doctors available for quality
              treatment.
            </p>
          </div>

          <div className="bg-base-100 shadow-xl rounded-3xl p-10 text-center">
            <div className="text-5xl flex justify-center text-blue-600">
              <FaClock />
            </div>

            <h3 className="text-3xl font-bold mt-6">
              24/7 Support
            </h3>

            <p className="text-gray-500 mt-4">
              Book appointments anytime from
              anywhere with quick support.
            </p>
          </div>

          <div className="bg-base-100 shadow-xl rounded-3xl p-10 text-center">
            <div className="text-5xl flex justify-center text-blue-600">
              <FaHospital />
            </div>

            <h3 className="text-3xl font-bold mt-6">
              Trusted Hospitals
            </h3>

            <p className="text-gray-500 mt-4">
              Connected with top-rated hospitals
              for better healthcare services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}