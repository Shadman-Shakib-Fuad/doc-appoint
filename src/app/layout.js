import "./globals.css";

import { Toaster } from "react-hot-toast";

import MainProvider from "@/provider/MainProvider";

export const metadata = {
  title: "DocAppoint",
  description: "Doctor Appointment Booking Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth">
      <body>
        <MainProvider>
          {children}

          <Toaster position="top-right" />
        </MainProvider>
      </body>
    </html>
  );
}
