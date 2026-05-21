export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Doctors",
      description:
        "Experienced specialists ready to provide top-quality healthcare.",
    },
    {
      title: "24/7 Support",
      description:
        "Get assistance anytime with our dedicated support team.",
    },
    {
      title: "Easy Booking",
      description:
        "Book appointments quickly and easily from anywhere.",
    },
  ];

  return (
    <div className="py-24 bg-base-200">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose Us
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            We provide trusted healthcare
            services with expert doctors and
            smooth appointment booking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map(
            (feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
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
      </div>
    </div>
  );
}