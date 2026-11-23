"use client";

import { useState } from "react";
import { StarIcon } from "../icons";
import { SITE } from "@/lib/site";

const QUALIFICATIONS = [
  { degree: "MBBS", detail: "Nishtar Medical University, Multan" },
  { degree: "FCPS (Medicine)", detail: "College of Physicians & Surgeons Pakistan" },
  { degree: "Diploma in Cardiology", detail: "Postgraduate diploma, sample qualification" },
];

const SERVICES = [
  { name: "General Consultation", desc: "Complete check-up and advice", price: 2000 },
  { name: "Diabetes Care", desc: "Sugar control, diet and follow-up plan", price: 2500 },
  { name: "Heart Check-up", desc: "ECG, blood pressure and risk review", price: 4000 },
  { name: "Blood Pressure Clinic", desc: "Monitoring and medicine adjustment", price: 1500 },
  { name: "Thyroid Clinic", desc: "Testing, reports and treatment plan", price: 3000 },
  { name: "Online Consultation", desc: "Video call consultation from home", price: 2000 },
];

const EXPERIENCE = [
  { years: "2016 – Present", role: "Consultant Physician", place: "Sample Clinic, Multan" },
  { years: "2013 – 2016", role: "Senior Medical Officer", place: "Sample Hospital, Multan" },
  { years: "2010 – 2013", role: "House Officer", place: "Sample Teaching Hospital, Multan" },
];

const REVIEWS = [
  { name: "Ahmad Raza", text: "Listened carefully and explained everything in simple words. Sample review.", stars: 5 },
  { name: "Fatima Noor", text: "My sugar is under control after following the plan. Sample review.", stars: 5 },
  { name: "Bilal Ahmed", text: "Short wait, clear advice and honest fees. Sample review.", stars: 4 },
];

const TIMINGS = [
  { days: "Monday – Friday", hours: "5:00 PM – 10:00 PM" },
  { days: "Saturday", hours: "4:00 PM – 9:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-mist-100 outline-none focus:border-accent";

export default function DoctorDemo() {
  const [bookingDone, setBookingDone] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <header className="max-w-2xl">
        <p className="label-caps !text-gold">Sample Doctor Portfolio — Multan</p>
        <h1 className="display-mega mt-4 font-sans text-4xl text-mist-100 sm:text-6xl">
          Dr. Ayesha Rahman, <span className="text-gradient-accent">physician in Multan.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-mist-500">
          This sample shows a doctor portfolio website design in Multan:
          qualifications, services, experience, patient reviews and an
          appointment booking form. The doctor and reviews here are fictional
          examples.
        </p>
      </header>

      {/* About + qualifications */}
      <section aria-label="About the doctor" className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="card-surface flex items-start gap-5 p-6 sm:p-8">
          <span
            aria-hidden
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white"
          >
            AR
          </span>
          <div>
            <p className="text-xl font-bold text-mist-100">Dr. Ayesha Rahman</p>
            <p className="mt-1 text-sm text-mist-500">
              MBBS, FCPS (Medicine) — Consultant Physician
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              Over 14 years of sample experience in general medicine, diabetes
              and heart care. Patients in Multan can book a clinic visit or an
              online consultation from this page.
            </p>
          </div>
        </div>
        <div className="card-surface p-6">
          <h2 className="text-lg font-bold text-mist-100">Qualifications</h2>
          <ul className="mt-4 space-y-3">
            {QUALIFICATIONS.map((q) => (
              <li key={q.degree}>
                <p className="font-semibold text-mist-100">{q.degree}</p>
                <p className="text-sm text-mist-500">{q.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section aria-label="Services and fees" className="mt-14">
        <h2 className="text-2xl font-bold text-mist-100">Services & consultation fees</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Sample fees in PKR. The same layout works for any specialist —
          services, fees and booking in one place.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.name} className="card-surface flex flex-col p-5">
              <p className="font-semibold text-mist-100">{service.name}</p>
              <p className="mt-1 flex-1 text-sm text-mist-500">{service.desc}</p>
              <p className="mt-3 text-sm font-bold text-accent-deep">
                PKR {service.price.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience + timings */}
      <section className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold text-mist-100">Experience</h2>
          <ul className="mt-6 space-y-4">
            {EXPERIENCE.map((job) => (
              <li key={job.role} className="card-surface flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-mist-100">{job.role}</p>
                  <p className="text-sm text-mist-500">{job.place}</p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-accent-deep">{job.years}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-surface h-fit p-6">
          <h2 className="text-lg font-bold text-mist-100">Clinic timings</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {TIMINGS.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span className="text-mist-500">{row.days}</span>
                <span className="font-semibold text-mist-100">{row.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-mist-500">
            Sample Clinic, Bosan Road, Multan (sample address).
          </p>
        </div>
      </section>

      {/* Patient reviews */}
      <section aria-label="Patient reviews" className="mt-14">
        <h2 className="text-2xl font-bold text-mist-100">What patients say</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Sample patient reviews written for this demo design.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {REVIEWS.map((review) => (
            <article key={review.name} className="card-surface flex flex-col p-5">
              <span className="flex gap-0.5" aria-label={`${review.stars} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < review.stars ? "text-accent" : "text-mist-500/40"}`}
                  />
                ))}
              </span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 font-semibold text-mist-100">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Appointment */}
      <section aria-label="Appointment booking" className="mt-14">
        <div className="card-surface mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-mist-100">Book an appointment</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist-500">
            A sample doctor appointment form. Fill it in to see the
            confirmation step, or chat on{" "}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-4"
            >
              WhatsApp
            </a>
            .
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
                Service
                <select required defaultValue="" className={`${inputCls} mt-1.5`}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — PKR {s.price.toLocaleString()}
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
                Symptoms (optional)
                <input
                  placeholder="For example: fever for 2 days"
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
        Built as an example of doctor portfolio website development in Multan.
        Looking for an SEO expert for doctor in Multan? This demo shows the
        website side of that work.
      </p>
    </div>
  );
}
