import {
  FaUserMd,
  FaHospital,
  FaClock,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <div className="py-32 bg-base-200">
      <div className="container-width">
        <div className="text-center">
          <h2 className="text-6xl font-black">
            Why Choose Us
          </h2>

          <p className="mt-8 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            We provide trusted
            healthcare services with
            experienced doctors and
            fast appointment booking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          <div className="bg-white rounded-[35px] p-12 text-center shadow-lg">
            <FaUserMd className="text-6xl text-primary mx-auto" />

            <h3 className="text-4xl font-black mt-8">
              Expert Doctors
            </h3>

            <p className="mt-6 text-gray-500 leading-8">
              Experienced and
              professional doctors
              available for quality
              treatment.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-12 text-center shadow-lg">
            <FaClock className="text-6xl text-primary mx-auto" />

            <h3 className="text-4xl font-black mt-8">
              24/7 Support
            </h3>

            <p className="mt-6 text-gray-500 leading-8">
              Book appointments
              anytime from anywhere
              with quick support.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-12 text-center shadow-lg">
            <FaHospital className="text-6xl text-primary mx-auto" />

            <h3 className="text-4xl font-black mt-8">
              Trusted Hospitals
            </h3>

            <p className="mt-6 text-gray-500 leading-8">
              Connected with
              top-rated hospitals for
              better healthcare
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}