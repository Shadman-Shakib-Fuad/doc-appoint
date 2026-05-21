import doctors from "@/lib/doctors";
import DoctorCard from "./DoctorCard";
import SectionTitle from "../shared/SectionTitle";

export default function TopDoctors() {
  return (
    <section className="py-24">
      <div className="container-width">
        <SectionTitle
          title="Top Rated Doctors"
          subtitle="Find experienced and highly rated doctors for better healthcare services."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}