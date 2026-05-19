import "./globals.css";

export const metadata = {
  title: "Doc Appoint",
  description: "Doctor Appointment Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}