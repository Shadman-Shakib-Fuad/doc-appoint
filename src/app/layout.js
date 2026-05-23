import "./globals.css";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DocAppoint",
  description:
    "Doctor Appointment Booking Website",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}

        <Toaster position="top-right" />
      </body>
    </html>
  );
}