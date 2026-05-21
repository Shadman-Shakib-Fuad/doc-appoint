import "./globals.css";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Doc Appoint",
  description:
    "Doctor Appointment Booking Platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}

          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}