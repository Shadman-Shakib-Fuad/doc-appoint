export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Doctors",
      description:
        "Experienced and professional doctors for quality healthcare.",
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated support team always ready to help patients.",
    },
    {
      title: "Trusted Hospitals",
      description:
        "Connected with trusted hospitals and healthcare centers.",
    },
  ];

  const stats = [
    {
      number: "12+",
      title: "Doctors",
    },
    {
      number: "500+",
      title: "Patients",
    },
    {
      number: "99%",
      title: "Success Rate",
    },
  ];

  return (
    <div className="py-28 bg-base-200">
      <div className="container-width">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Why Choose Us
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            We provide trusted healthcare
            services with experienced
            doctors, modern hospitals, and
            smooth appointment booking for
            patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {features.map(
            (feature, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <h3 className="text-3xl font-bold mb-5">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-8">
                  {
                    feature.description
                  }
                </p>
              </div>
            )
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {stats.map(
            (stat, index) => (
              <div
                key={index}
                className="bg-primary text-white rounded-[30px] p-10 text-center shadow-xl hover:scale-105 transition duration-500"
              >
                <h2 className="text-5xl font-bold">
                  {stat.number}
                </h2>

                <p className="mt-4 text-xl">
                  {stat.title}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}