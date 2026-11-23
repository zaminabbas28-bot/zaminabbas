"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/site";

type Product = { name: string; desc: string; price: number; unit: string };

const PRODUCTS: Record<string, Product[]> = {
  Grocery: [
    { name: "Basmati Rice 5 kg", desc: "Premium long-grain rice", price: 1850, unit: "pack" },
    { name: "Cooking Oil 5 L", desc: "Refined vegetable oil", price: 2950, unit: "bottle" },
    { name: "Wheat Flour 10 kg", desc: "Fine chakki atta", price: 1150, unit: "bag" },
    { name: "Sugar 5 kg", desc: "Refined white sugar", price: 950, unit: "bag" },
  ],
  Fresh: [
    { name: "Fresh Milk 1 L", desc: "Farm fresh, delivered daily", price: 240, unit: "litre" },
    { name: "Brown Eggs (12 pc)", desc: "Farm eggs, dozen pack", price: 420, unit: "dozen" },
    { name: "Mixed Vegetables 1 kg", desc: "Seasonal fresh vegetables", price: 220, unit: "kg" },
    { name: "Bananas (1 dozen)", desc: "Ripe, sweet bananas", price: 180, unit: "dozen" },
  ],
  Bakery: [
    { name: "Fresh Bread (Large)", desc: "Baked every morning", price: 180, unit: "loaf" },
    { name: "Chocolate Cake 1 lb", desc: "Fresh cream chocolate cake", price: 1200, unit: "cake" },
    { name: "Rusks (Family Pack)", desc: "Crispy tea rusks", price: 350, unit: "pack" },
    { name: "Burger Buns (6 pc)", desc: "Soft sesame buns", price: 220, unit: "pack" },
  ],
  Household: [
    { name: "Laundry Detergent 3 kg", desc: "Washing powder, family pack", price: 1450, unit: "pack" },
    { name: "Dishwash Liquid 1 L", desc: "Lemon fresh dishwash", price: 450, unit: "bottle" },
    { name: "Tissue Box (5 pc)", desc: "Soft facial tissues", price: 550, unit: "pack" },
    { name: "Floor Cleaner 2 L", desc: "Phenyl floor cleaner", price: 650, unit: "bottle" },
  ],
};

const OFFERS = [
  { title: "Ramadan Grocery Bundle", desc: "Rice, oil, flour and sugar in one pack", oldPrice: 6900, price: 5999 },
  { title: "Fresh Weekend Deal", desc: "Milk, eggs and vegetables together", oldPrice: 1080, price: 899 },
  { title: "Bakery Family Pack", desc: "Bread, cake and rusks for the week", oldPrice: 1730, price: 1499 },
];

const SLOTS = ["9 AM – 12 PM", "12 PM – 3 PM", "3 PM – 6 PM", "6 PM – 9 PM"];

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-mist-100 outline-none focus:border-accent";

export default function SuperStoreDemo() {
  const categories = Object.keys(PRODUCTS);
  const [category, setCategory] = useState("Grocery");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryDone, setDeliveryDone] = useState(false);

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
      <header className="max-w-2xl">
        <p className="label-caps !text-gold">Sample Super Store — Multan</p>
        <h1 className="display-mega mt-4 font-sans text-4xl text-mist-100 sm:text-6xl">
          Grocery, fresh and household — <span className="text-gradient-accent">delivered home.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-mist-500">
          This sample shows a super store website design in Multan: product
          categories with prices in PKR, weekly offers and home delivery in
          one place.
        </p>
      </header>

      {/* Products + cart */}
      <section aria-label="Sample products" className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
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
                className="card-surface flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="font-semibold text-mist-100">{item.name}</p>
                  <p className="mt-1 text-sm text-mist-500">
                    {item.desc} · per {item.unit}
                  </p>
                  <p className="mt-2 text-sm font-bold text-accent-deep">
                    PKR {item.price.toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(item.name)}
                  className="shrink-0 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-deep"
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        <aside className="card-surface h-fit p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-bold text-mist-100">Your cart</h2>
          {cartLines.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              Your cart is empty. Add products from the categories to try the
              online ordering flow.
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
                Free home delivery in Multan on sample orders above PKR 2,000.
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

      {/* Weekly offers */}
      <section aria-label="Weekly offers" className="mt-14">
        <h2 className="text-2xl font-bold text-mist-100">Weekly offers</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Sample bundle deals — example prices in PKR, changed weekly on a
          real store.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {OFFERS.map((offer) => (
            <article key={offer.title} className="card-surface flex flex-col p-5">
              <span className="w-fit rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-white">
                SAVE PKR {(offer.oldPrice - offer.price).toLocaleString()}
              </span>
              <p className="mt-3 font-semibold text-mist-100">{offer.title}</p>
              <p className="mt-1 flex-1 text-sm text-mist-500">{offer.desc}</p>
              <p className="mt-3 text-sm">
                <span className="font-bold text-accent-deep">
                  PKR {offer.price.toLocaleString()}
                </span>{" "}
                <span className="text-mist-500 line-through">
                  PKR {offer.oldPrice.toLocaleString()}
                </span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Delivery form */}
      <section aria-label="Delivery details" className="mt-14">
        <div className="card-surface mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-mist-100">Book a delivery slot</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist-500">
            A sample home delivery form. Fill it in to see the confirmation
            step. Store timings: 9:00 AM – 11:00 PM, open 7 days.
          </p>
          {deliveryDone ? (
            <p className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800">
              Thanks! Your sample delivery request has been received. This is
              a demo only — no real delivery was booked.
            </p>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setDeliveryDone(true);
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
                Delivery address
                <input
                  required
                  placeholder="House, street, area — Multan"
                  className={`${inputCls} mt-1.5`}
                />
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Delivery slot
                <select required defaultValue="" className={`${inputCls} mt-1.5`}>
                  <option value="" disabled>
                    Select a delivery slot
                  </option>
                  {SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-deep sm:col-span-2"
              >
                Request delivery
              </button>
            </form>
          )}
        </div>
      </section>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-mist-500">
        Built as an example of super store website development in Multan.
        Looking for an SEO expert for super store in Multan? This demo shows
        the website side of that work.
      </p>
    </div>
  );
}
