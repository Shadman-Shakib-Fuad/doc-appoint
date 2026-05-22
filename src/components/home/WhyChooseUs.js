import {
  FaUserMd,
  FaHeadset,
  FaHospital,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const facilities = [
    {
      title: "Expert Doctors",
      description:
        "Experienced and professional doctors available for quality treatment.",
      icon: <FaUserMd size={45} />,
    },

    {
      title: "24/7 Support",
      description:
        "Book appointments anytime from anywhere with quick support.",
      icon: <FaHeadset size={45} />,
    },

    {
      title: "Trusted Hospitals",
      description:
        "Connected with top-rated hospitals for better healthcare services.",
      icon: <FaHospital size={45} />,
    },
  ];

  return (
    <div className="bg-base-200 py-32">
      <div className="container-width">
        <div className="text-center">
          <h2 className="text-5xl font-black">
            Why Choose Us
          </h2>

          <p className="mt-8 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            We provide trusted healthcare
            services with experienced
            doctors and fast appointment
            booking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-28">
          {facilities.map(
            (facility, index) => (
              <div
                key={index}
                className="bg-white rounded-[35px] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 text-center"
              >
                <div className="flex justify-center text-primary">
                  {facility.icon}
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {facility.title}
                </h3>

                <p className="text-gray-500 leading-8 mt-6">
                  {
                    facility.description
                  }
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}