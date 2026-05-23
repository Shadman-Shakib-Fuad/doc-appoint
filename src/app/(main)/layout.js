import Navbar from "@/components/shared/Navbar";

import Footer from "@/components/shared/Footer";

export default function MainLayout({
  children,
}) {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}