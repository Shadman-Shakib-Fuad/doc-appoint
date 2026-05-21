"use client";

import AuthProvider from "@/context/AuthContext";

export default function MainProvider({
  children,
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}