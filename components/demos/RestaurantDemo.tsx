"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/site";

type MenuItem = { name: string; desc: string; price: number };

const MENU: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Chicken Corn Soup", desc: "Classic starter, served hot", price: 450 },
    { name: "Chicken Wings (6 pc)", desc: "Tossed in your choice of sauce", price: 650 },
    { name: "Spring Rolls (4 pc)", desc: "Crispy vegetable rolls with dip", price: 400 },
    { name: "Fries Loaded", desc: "Fries with cheese and chicken chunks", price: 550 },
  ],
  Mains: [
    { name: "Chicken Karahi (Half)", desc: "Desi-style karahi with fresh spices", price: 1400 },
    { name: "Chicken Tikka Leg Piece", desc: "Charcoal-grilled, served with naan", price: 550 },
    { name: "Beef Burger", desc: "Grilled patty, cheese, house sauce", price: 750 },
    { name: "Chicken Biryani", desc: "Fragrant rice, raita and salad", price: 450 },
  ],
  Desserts: [
    { name: "Gulab Jamun (2 pc)", desc: "Warm, syrup-soaked", price: 300 },
    { name: "Chocolate Brownie", desc: "Served with a scoop of vanilla", price: 500 },
    { name: "Kheer", desc: "Traditional rice pudding", price: 350 },
  ],
  Drinks: [
    { name: "Mint Margarita", desc: "Fresh mint and lemon", price: 300 },
    { name: "Cold Drink (Can)", desc: "Chilled soft drink", price: 200 },
    { name: "Lassi Sweet / Salted", desc: "Thick traditional lassi", price: 250 },
  ],
};

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-mist-100 outline-none focus:border-accent";

export default function RestaurantDemo() {
  const categories = Object.keys(MENU);
  const [category, setCategory] = useState("Mains");
  const [order, setOrder] = useState<Record<string, number>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);

  const orderLines = useMemo(
    () =>
      Object.entries(order).map(([name, qty]) => {
        const item = Object.values(MENU)
          .flat()
          .find((i) => i.name === name)!;
        return { name, qty, price: item.price, total: item.price * qty };
      }),
    [order]
  );
  const orderTotal = orderLines.reduce((sum, l) => sum + l.total, 0);

  const addToOrder = (name: string) =>
    setOrder((o) => ({ ...o, [name]: (o[name] ?? 0) + 1 }));
  const changeQty = (name: string, delta: number) =>
    setOrder((o) => {
      const next = { ...o, [name]: (o[name] ?? 0) + delta };
      if (next[name] <= 0) delete next[name];
      return next;
    });

  const whatsappOrder = `${SITE.whatsapp}?text=${encodeURIComponent(
    `Sample order (demo):\n${orderLines.map((l) => `${l.qty} x ${l.name} — PKR ${l.total}`).join("\n")}\nTotal: PKR ${orderTotal}`
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <header className="max-w-2xl">
        <p className="label-caps !text-gold">Sample Restaurant — Multan</p>
        <h1 className="display-mega mt-4 font-sans text-4xl text-mist-100 sm:text-6xl">
          Taste the menu, <span className="text-gradient-accent">book the table.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-mist-500">
          This sample shows a restaurant website design in Multan: a menu with
          prices in PKR, online ordering and table booking in one place.
        </p>
      </header>

      {/* Menu + order */}
      <section aria-label="Sample menu" className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
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
            {MENU[category].map((item) => (
              <li
                key={item.name}
                className="card-surface flex items-center justify-between gap-4 p-5"
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
                  onClick={() => addToOrder(item.name)}
                  className="shrink-0 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-deep"
                >
                  Add to order
                </button>
              </li>
            ))}
          </ul>
        </div>

        <aside className="card-surface h-fit p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-bold text-mist-100">Your order</h2>
          {orderLines.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              Your order is empty. Add dishes from the menu to try the online
              ordering flow.
            </p>
          ) : (
            <>
              <ul className="mt-4 space-y-3">
                {orderLines.map((line) => (
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
                <span>PKR {orderTotal.toLocaleString()}</span>
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

      {/* Table booking */}
      <section aria-label="Table booking" className="mt-16">
        <div className="card-surface mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-mist-100">Book a table</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist-500">
            A sample of restaurant table booking in Multan, built into the
            website. Fill in the form to see the confirmation step.
          </p>
          {bookingDone ? (
            <p className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800">
              Thanks! Your sample table request has been received. This is a
              demo only — no real booking was made.
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
              <label className="block text-sm font-medium text-mist-100">
                Date
                <input required type="date" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100">
                Time
                <input required type="time" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Guests
                <select required defaultValue="" className={`${inputCls} mt-1.5`}>
                  <option value="" disabled>
                    Select guests
                  </option>
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-deep sm:col-span-2"
              >
                Request table
              </button>
            </form>
          )}
        </div>
      </section>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-mist-500">
        Built as an example of restaurant website development in Multan.
        Looking for an SEO expert for restaurant in Multan? This demo shows
        the website side of that work.
      </p>
    </div>
  );
}
