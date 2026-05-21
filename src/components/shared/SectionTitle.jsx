export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}