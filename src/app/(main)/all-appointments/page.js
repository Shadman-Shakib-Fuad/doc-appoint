"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

export default function AllAppointmentsPage() {
  const [appointments,
    setAppointments] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchAppointments =
      async () => {
        try {
          const res =
            await api.get(
              "/bookings"
            );

          setAppointments(
            res.data
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-5 bg-base-200">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            All Appointments
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            View all booked appointments
            from patients and manage
            healthcare activities easily.
          </p>
        </div>

        {appointments.length ===
        0 ? (
          <div className="bg-white rounded-[30px] shadow-lg p-16 text-center mt-20">
            <h2 className="text-4xl font-bold">
              No Appointments Found
            </h2>

            <p className="mt-5 text-gray-500 text-lg">
              No patients have booked any
              appointments yet.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {appointments.map(
              (appointment) => (
                <div
                  key={
                    appointment._id
                  }
                  className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                      {
                        appointment.patientName
                      }
                    </h2>

                    <span className="badge badge-primary badge-lg">
                      Active
                    </span>
                  </div>

                  <p className="mt-5 text-gray-500">
                    {
                      appointment.email
                    }
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="font-semibold">
                      Doctor:{" "}
                      {
                        appointment.doctorName
                      }
                    </p>

                    <p>
                      Date:{" "}
                      {
                        appointment.date
                      }
                    </p>
                  </div>

                  <button className="btn btn-primary rounded-full w-full mt-8">
                    View Details
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}