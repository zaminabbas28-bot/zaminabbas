"use client";

import { useState } from "react";

const DOCTORS = [
  { initials: "AR", name: "Dr. A. Raza", role: "General Dentistry" },
  { initials: "SM", name: "Dr. S. Malik", role: "Orthodontics (Braces)" },
  { initials: "HN", name: "Dr. H. Nawaz", role: "Cosmetic Dentistry" },
];

const TREATMENTS = [
  { name: "Dental Check-up", desc: "Examination and advice", price: 1000 },
  { name: "Scaling & Polish", desc: "Cleaning for healthy gums", price: 4000 },
  { name: "Teeth Whitening", desc: "Single-session whitening", price: 15000 },
  { name: "Braces Consultation", desc: "Assessment and plan for alignment", price: 1500 },
];

const TIMINGS = [
  { days: "Monday – Friday", hours: "10:00 AM – 8:00 PM" },
  { days: "Saturday", hours: "10:00 AM – 6:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-mist-100 outline-none focus:border-accent";

export default function ClinicDemo() {
  const [bookingDone, setBookingDone] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <header className="max-w-2xl">
        <p className="label-caps !text-gold">Sample Dental Clinic — Multan</p>
        <h1 className="display-mega mt-4 font-sans text-4xl text-mist-100 sm:text-6xl">
          Care you can <span className="text-gradient-accent">book in minutes.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-mist-500">
          This sample shows a dental clinic website design in Multan: doctors,
          timings, location and a patient appointment form.
        </p>
      </header>

      {/* Doctors */}
      <section aria-label="Doctors" className="mt-12">
        <h2 className="text-2xl font-bold text-mist-100">Our doctors</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Fictional doctors shown for this sample design.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <article key={doctor.name} className="card-surface flex items-center gap-4 p-5">
              <span
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white"
              >
                {doctor.initials}
              </span>
              <div>
                <p className="font-semibold text-mist-100">{doctor.name}</p>
                <p className="text-sm text-mist-500">{doctor.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Treatments, timings, location */}
      <section className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold text-mist-100">Treatments & sample fees</h2>
          <ul className="mt-6 space-y-4">
            {TREATMENTS.map((treatment) => (
              <li key={treatment.name} className="card-surface flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="font-semibold text-mist-100">{treatment.name}</p>
                  <p className="mt-1 text-sm text-mist-500">{treatment.desc}</p>
                </div>
                <p className="shrink-0 text-sm font-bold text-accent-deep">
                  PKR {treatment.price.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <div className="card-surface p-6">
            <h2 className="text-lg font-bold text-mist-100">Clinic timings</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {TIMINGS.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span className="text-mist-500">{row.days}</span>
                  <span className="font-semibold text-mist-100">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6">
            <h2 className="text-lg font-bold text-mist-100">Location</h2>
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              Multan <span className="text-mist-500">(sample listing)</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist-500">
              Find us on the map and get directions — location details are
              added for the real clinic at launch.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section aria-label="Patient appointment" className="mt-14">
        <div className="card-surface mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-mist-100">Request an appointment</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist-500">
            A sample patient appointment form. Fill it in to see the
            confirmation step.
          </p>
          {bookingDone ? (
            <p className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800">
              Thanks! Your sample appointment request has been received. This
              is a demo only — no real booking was made.
            </p>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setBookingDone(true);
              }}
            >
              <label className="block text-sm font-medium text-mist-100">
                Your name
                <input required placeholder="Sample Patient" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100">
                Phone (optional)
                <input placeholder="03xx xxxxxxx" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Doctor
                <select defaultValue="Any available" className={`${inputCls} mt-1.5`}>
                  <option value="Any available">Any available</option>
                  {DOCTORS.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name} — {d.role}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-mist-100">
                Date
                <input required type="date" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100">
                Time
                <input required type="time" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Reason for visit (optional)
                <input
                  placeholder="For example: routine check-up"
                  className={`${inputCls} mt-1.5`}
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-deep sm:col-span-2"
              >
                Request appointment
              </button>
            </form>
          )}
        </div>
      </section>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-mist-500">
        If you searched for an SEO expert for clinic in Multan, this demo
        shows the website side of that work — doctors, timings, location and
        a patient booking form.
      </p>
    </div>
  );
}
