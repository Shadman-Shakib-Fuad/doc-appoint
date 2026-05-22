import {
  FaUserMd,
  FaHospital,
  FaClock,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Doctors",
      description:
        "Experienced and professional doctors available for quality treatment.",
      icon: <FaUserMd size={40} />,
    },
    {
      title: "24/7 Support",
      description:
        "Book appointments anytime from anywhere with quick support.",
      icon: <FaClock size={40} />,
    },
    {
      title: "Trusted Hospitals",
      description:
        "Connected with top-rated hospitals for better healthcare services.",
      icon: <FaHospital size={40} />,
    },
  ];

  const stats = [
    {
      number: "12+",
      title: "Expert Doctors",
    },
    {
      number: "500+",
      title: "Happy Patients",
    },
    {
      number: "24/7",
      title: "Support Service",
    },
    {
      number: "10+",
      title: "Trusted Hospitals",
    },
  ];

  return (
    <div className="py-32 bg-base-200">
      <div className="container-width">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Why Choose Us
          </h2>

          <p className="mt-8 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            We provide trusted healthcare
            services with experienced
            doctors and fast appointment
            booking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {features.map(
            (feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="text-primary">
                  {feature.icon}
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {feature.title}
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  {
                    feature.description
                  }
                </p>
              </div>
            )
          )}
        </div>

        <div className="grid md:grid-cols-4 gap-10 mt-28">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-10 shadow-lg text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <h2 className="text-6xl font-black text-primary">
                {stat.number}
              </h2>

              <p className="mt-5 text-xl text-gray-500">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}