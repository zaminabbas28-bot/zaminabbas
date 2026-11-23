"use client";

import { useMemo, useState } from "react";
import Reveal from "../Reveal";
import { SITE } from "@/lib/site";

type Product = { name: string; desc: string; price: number };

const PRODUCTS: Record<string, Product[]> = {
  "Tablets & Capsules": [
    { name: "Paracetamol 500mg (10 tabs)", desc: "Fever and pain relief", price: 120 },
    { name: "Multivitamin Tablets (30 tabs)", desc: "Daily vitamin supplement", price: 850 },
    { name: "Omeprazole 20mg (14 caps)", desc: "Acidity relief capsules", price: 480 },
    { name: "Cetirizine 10mg (10 tabs)", desc: "Allergy relief tablets", price: 150 },
  ],
  Syrups: [
    { name: "Cough Syrup 120ml", desc: "Dry cough relief", price: 320 },
    { name: "Iron Syrup 120ml", desc: "Iron supplement for weakness", price: 380 },
    { name: "ORS Sachets (10 pc)", desc: "Oral rehydration salts", price: 250 },
    { name: "Vitamin D Drops 15ml", desc: "For children and adults", price: 450 },
  ],
  "First Aid": [
    { name: "Antiseptic Liquid 500ml", desc: "Wound cleaning antiseptic", price: 550 },
    { name: "Bandages (Box of 20)", desc: "Adhesive wound strips", price: 180 },
    { name: "Digital Thermometer", desc: "Fast-reading thermometer", price: 650 },
    { name: "Cotton Roll 100g", desc: "Surgical cotton roll", price: 220 },
  ],
  "Baby & Care": [
    { name: "Baby Diapers (Medium, 24 pc)", desc: "Soft dry baby diapers", price: 1450 },
    { name: "Baby Powder 200g", desc: "Gentle baby talc powder", price: 420 },
    { name: "Hand Sanitizer 250ml", desc: "70% alcohol sanitizer", price: 350 },
    { name: "Face Masks (Box of 50)", desc: "3-ply disposable masks", price: 500 },
  ],
};

const TIMINGS = [
  { days: "Monday – Saturday", hours: "9:00 AM – 11:00 PM" },
  { days: "Sunday", hours: "10:00 AM – 10:00 PM" },
  { days: "Emergency delivery", hours: "24 hours (call first)" },
];

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-mist-100 outline-none focus:border-accent";

export default function MedicalStoreDemo() {
  const categories = Object.keys(PRODUCTS);
  const [category, setCategory] = useState("Tablets & Capsules");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [prescriptionDone, setPrescriptionDone] = useState(false);

  const cartLines = useMemo(
    () =>
      Object.entries(cart).map(([name, qty]) => {
        const item = Object.values(PRODUCTS)
          .flat()
          .find((i) => i.name === name)!;
        return { name, qty, price: item.price, total: item.price * qty };
      }),
    [cart]
  );
  const cartTotal = cartLines.reduce((sum, l) => sum + l.total, 0);

  const addToCart = (name: string) =>
    setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }));
  const changeQty = (name: string, delta: number) =>
    setCart((c) => {
      const next = { ...c, [name]: (c[name] ?? 0) + delta };
      if (next[name] <= 0) delete next[name];
      return next;
    });

  const whatsappOrder = `${SITE.whatsapp}?text=${encodeURIComponent(
    `Sample order (demo):\n${cartLines.map((l) => `${l.qty} x ${l.name} — PKR ${l.total}`).join("\n")}\nTotal: PKR ${cartTotal}`
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
      <header className="max-w-2xl">
        <p className="label-caps !text-gold">Sample Medical Store — Multan</p>
        <h1 className="display-mega mt-4 font-sans text-4xl text-mist-100 sm:text-6xl">
          Medicines at your door, <span className="text-gradient-accent">day or night.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-mist-500">
          This sample shows a medical store website design in Multan: medicine
          categories with prices in PKR, prescription orders and home delivery.
        </p>
      </header>
      </Reveal>

      {/* Products + cart */}
      <section aria-label="Sample medicines" className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
        <div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  category === cat
                    ? "bg-accent text-white"
                    : "border border-black/15 text-mist-100 hover:border-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <ul className="mt-6 space-y-4">
            {PRODUCTS[category].map((item) => (
              <li
                key={item.name}
                className="card-surface card-hover flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="font-semibold text-mist-100">{item.name}</p>
                  <p className="mt-1 text-sm text-mist-500">{item.desc}</p>
                  <p className="mt-2 text-sm font-bold text-accent-deep">
                    PKR {item.price.toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(item.name)}
                  className="shrink-0 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-deep"
                >
                  Add to order
                </button>
              </li>
            ))}
          </ul>
        </div>
        </Reveal>

        <aside className="card-surface h-fit p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-bold text-mist-100">Your order</h2>
          {cartLines.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              Your order is empty. Add medicines from the categories to try
              the online ordering flow.
            </p>
          ) : (
            <>
              <ul className="mt-4 space-y-3">
                {cartLines.map((line) => (
                  <li key={line.name} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-mist-100">
                      {line.name} <span className="text-mist-500">× {line.qty}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Remove one ${line.name}`}
                        onClick={() => changeQty(line.name, -1)}
                        className="h-7 w-7 rounded-full border border-black/15 font-bold text-mist-100"
                      >
                        −
                      </button>
                      <button
                        type="button"
                        aria-label={`Add one ${line.name}`}
                        onClick={() => changeQty(line.name, 1)}
                        className="h-7 w-7 rounded-full border border-black/15 font-bold text-mist-100"
                      >
                        +
                      </button>
                      <span className="w-20 text-right font-semibold text-mist-100">
                        PKR {line.total.toLocaleString()}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex justify-between border-t border-black/10 pt-4 font-bold text-mist-100">
                <span>Total</span>
                <span>PKR {cartTotal.toLocaleString()}</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-mist-500">
                Free home delivery in Multan on sample orders above PKR 1,000.
              </p>
              {orderPlaced ? (
                <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800">
                  Thanks! Your sample order has been received. This is a demo
                  only — no real order was placed and no payment was taken.
                </p>
              ) : (
                <button
                  type="button"
                  onClick={() => setOrderPlaced(true)}
                  className="mt-5 w-full rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-deep"
                >
                  Place sample order
                </button>
              )}
              <a
                href={whatsappOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full border border-black/15 py-3 text-center text-sm font-semibold text-mist-100 transition hover:border-accent hover:text-accent"
              >
                Send this order on WhatsApp
              </a>
            </>
          )}
        </aside>
      </section>

      {/* Prescription order */}
      <Reveal delay={100}>
      <section aria-label="Prescription order" className="mt-14">
        <div className="card-surface mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-mist-100">Order with a prescription</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist-500">
            A sample prescription order form. File upload is not available in
            this demo — type the medicine names from your prescription
            instead, and the store confirms availability.
          </p>
          {prescriptionDone ? (
            <p className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800">
              Thanks! Your sample prescription request has been received. This
              is a demo only — no real order was placed.
            </p>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setPrescriptionDone(true);
              }}
            >
              <label className="block text-sm font-medium text-mist-100">
                Your name
                <input required placeholder="Sample Customer" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100">
                Phone (optional)
                <input placeholder="03xx xxxxxxx" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Medicines on your prescription
                <textarea
                  required
                  rows={3}
                  placeholder="For example: Paracetamol 500mg — 1 strip, Cough syrup — 1 bottle"
                  className={`${inputCls} mt-1.5 resize-y`}
                />
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Delivery address
                <input
                  required
                  placeholder="House, street, area — Multan"
                  className={`${inputCls} mt-1.5`}
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-deep sm:col-span-2"
              >
                Send prescription order
              </button>
            </form>
          )}
        </div>
      </section>
      </Reveal>

      {/* Timings + delivery */}
      <Reveal delay={100}>
      <section className="mt-14 grid gap-4 sm:grid-cols-2">
        <div className="card-surface card-hover p-6">
          <h2 className="text-lg font-bold text-mist-100">Store timings</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {TIMINGS.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span className="text-mist-500">{row.days}</span>
                <span className="font-semibold text-mist-100">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-surface card-hover p-6">
          <h2 className="text-lg font-bold text-mist-100">Home delivery</h2>
          <p className="mt-3 text-sm leading-relaxed text-mist-500">
            Same-day delivery across Multan on sample orders placed before
            6:00 PM. A licensed pharmacist checks every prescription order
            before it is packed.
          </p>
        </div>
      </section>
      </Reveal>

      <Reveal delay={80}>
      <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-mist-500">
        Built as an example of medical store website development in Multan.
        Looking for an SEO expert for medical store in Multan? This demo shows
        the website side of that work.
      </p>
      </Reveal>
    </div>
  );
}
