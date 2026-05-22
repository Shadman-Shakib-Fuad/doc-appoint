export default function BreakingNews() {
  return (
    <div className="bg-primary text-white py-4 overflow-hidden">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="8"
        className="font-semibold text-lg"
      >
        🏥 Latest News: Free health
        checkup campaign starts this
        week • New specialist doctors
        added • 24/7 emergency support
        available • Book appointments
        instantly with DocAppoint
      </marquee>
    </div>
  );
}