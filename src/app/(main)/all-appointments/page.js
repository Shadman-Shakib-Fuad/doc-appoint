import doctors from "@/lib/doctors";
import DoctorCard from "@/components/home/DoctorCard";
import SectionTitle from "@/components/shared/SectionTitle";

export default function AllAppointmentsPage() {
  return (
    <div className="py-20">
      <div className="container-width">
        <SectionTitle
          title="All Doctors"
          subtitle="Browse all available doctors and book appointments easily."
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
    </div>
  );
}