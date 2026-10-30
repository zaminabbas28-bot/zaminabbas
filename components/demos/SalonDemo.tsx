"use client";

import { useState } from "react";

const SERVICES = [
  { name: "Haircut", desc: "Wash, cut and style", price: 1500 },
  { name: "Beard Trim & Shape", desc: "Trim, shape and hot towel finish", price: 800 },
  { name: "Hair Colour", desc: "Full colour with wash and style", price: 6500 },
  { name: "Facial", desc: "Deep cleanse facial, 60 minutes", price: 4500 },
  { name: "Manicure", desc: "Nails shaped, cleaned and polished", price: 2500 },
  { name: "Bridal Package", desc: "Hair, makeup and styling for the day", price: 25000 },
];

const STYLISTS = [
  { initials: "AK", name: "Ayesha Khan", role: "Hair & Colour" },
  { initials: "BR", name: "Bilal Raza", role: "Barbering" },
  { initials: "SM", name: "Sana Malik", role: "Skin & Facials" },
];

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-mist-100 outline-none focus:border-accent";

export default function SalonDemo() {
  const [bookingDone, setBookingDone] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <header className="max-w-2xl">
        <p className="label-caps !text-gold">Sample Salon — Multan</p>
        <h1 className="display-mega mt-4 font-sans text-4xl text-mist-100 sm:text-6xl">
          Book your chair, <span className="text-gradient-accent">skip the wait.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-mist-500">
          This sample shows a salon website design in Multan: services with
          prices, stylists and an appointment booking form.
        </p>
      </header>

      {/* Services */}
      <section aria-label="Salon services" className="mt-12">
        <h2 className="text-2xl font-bold text-mist-100">Services & prices</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Sample prices in PKR. The same layout works as a barber shop
          website — services, prices, barbers and booking in one place.
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

      {/* Stylists */}
      <section aria-label="Stylists" className="mt-14">
        <h2 className="text-2xl font-bold text-mist-100">Meet the stylists</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Fictional team members shown for this sample design.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {STYLISTS.map((stylist) => (
            <article key={stylist.name} className="card-surface flex items-center gap-4 p-5">
              <span
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white"
              >
                {stylist.initials}
              </span>
              <div>
                <p className="font-semibold text-mist-100">{stylist.name}</p>
                <p className="text-sm text-mist-500">{stylist.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section aria-label="Appointment booking" className="mt-14">
        <div className="card-surface mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-mist-100">Book an appointment</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist-500">
            A sample salon appointment booking form. Fill it in to see the
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
                <input required placeholder="Sample Guest" className={`${inputCls} mt-1.5`} />
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
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Stylist
                <select defaultValue="Any available" className={`${inputCls} mt-1.5`}>
                  <option value="Any available">Any available</option>
                  {STYLISTS.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — {s.role}
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
        Built as an example of salon website design in Multan, with local SEO
        for salons in Multan available alongside a real build.
      </p>
    </div>
  );
}
