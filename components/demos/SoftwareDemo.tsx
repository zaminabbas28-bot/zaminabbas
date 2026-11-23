"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import { SITE } from "@/lib/site";

const SERVICES = [
  { name: "Web Applications", desc: "Custom dashboards, portals and business software", price: 150000, priceNote: "from" },
  { name: "Mobile Apps", desc: "Android and iOS apps for your customers", price: 250000, priceNote: "from" },
  { name: "APIs & Integrations", desc: "Payment gateways, WhatsApp, maps and more", price: 80000, priceNote: "from" },
  { name: "UI/UX Design", desc: "Clean, modern interfaces your users enjoy", price: 60000, priceNote: "from" },
  { name: "E-Commerce Websites", desc: "Online stores with orders and payments", price: 120000, priceNote: "from" },
  { name: "Maintenance & Support", desc: "Monthly updates, fixes and backups", price: 25000, priceNote: "per month from" },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We listen to your idea and map the features you need." },
  { step: "02", title: "Design", desc: "Screens and flows are designed for your approval first." },
  { step: "03", title: "Build", desc: "Development in weekly steps, with a demo link to follow along." },
  { step: "04", title: "Launch", desc: "Testing, launch and training — then ongoing support." },
];

const PROJECTS = [
  { name: "School Fee Manager", desc: "Fee collection and SMS reminders for a sample school.", stack: "Next.js · Firebase" },
  { name: "Clinic Appointment App", desc: "Online booking and reminders for a sample clinic.", stack: "Flutter · Node.js" },
  { name: "Store Billing Software", desc: "Billing and stock reports for a sample super store.", stack: "React · Laravel" },
];

const BUDGETS = ["Under PKR 100,000", "PKR 100,000 – 300,000", "PKR 300,000 – 1,000,000", "Above PKR 1,000,000"];

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-mist-100 outline-none focus:border-accent";

export default function SoftwareDemo() {
  const [quoteDone, setQuoteDone] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
      <header className="max-w-2xl">
        <p className="label-caps !text-gold">Sample Software Company — Multan</p>
        <h1 className="display-mega mt-4 font-sans text-4xl text-mist-100 sm:text-6xl">
          Software that runs <span className="text-gradient-accent">your business.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-mist-500">
          This sample shows a software services website design in Multan: web
          apps, mobile apps, APIs and UI/UX, with a get-a-quote form. The
          company and projects here are fictional examples.
        </p>
      </header>
      </Reveal>

      {/* Services */}
      <Reveal delay={100}>
      <section aria-label="Software services" className="mt-12">
        <h2 className="text-2xl font-bold text-mist-100">What we build</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Sample starting prices in PKR — a real quote depends on your
          features.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.name} className="card-surface card-hover flex flex-col p-5">
              <p className="font-semibold text-mist-100">{service.name}</p>
              <p className="mt-1 flex-1 text-sm text-mist-500">{service.desc}</p>
              <p className="mt-3 text-sm font-bold text-accent-deep">
                {service.priceNote} PKR {service.price.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </section>
      </Reveal>

      {/* Process */}
      <Reveal delay={100}>
      <section aria-label="How we work" className="mt-14">
        <h2 className="text-2xl font-bold text-mist-100">How we work</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          A simple four-step process, shown the same way it appears on a real
          project page.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <article key={item.step} className="card-surface card-hover p-5">
              <p className="text-gradient-accent font-display text-3xl font-extrabold">
                {item.step}
              </p>
              <p className="mt-3 font-semibold text-mist-100">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-mist-500">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
      </Reveal>

      {/* Project highlights */}
      <Reveal delay={100}>
      <section aria-label="Sample projects" className="mt-14">
        <h2 className="text-2xl font-bold text-mist-100">Sample project highlights</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
          Fictional projects shown for this sample design.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PROJECTS.map((project) => (
            <article key={project.name} className="card-surface card-hover flex flex-col p-5">
              <p className="font-semibold text-mist-100">{project.name}</p>
              <p className="mt-1 flex-1 text-sm text-mist-500">{project.desc}</p>
              <p className="mt-3 text-xs font-semibold text-accent-deep">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>
      </Reveal>

      {/* Quote form */}
      <Reveal delay={100}>
      <section aria-label="Get a quote" className="mt-14">
        <div className="card-surface mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-mist-100">Get a quote</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist-500">
            A sample quote request form. Fill it in to see the confirmation
            step, or chat on{" "}
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
          {quoteDone ? (
            <p className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800">
              Thanks! Your sample quote request has been received. This is a
              demo only — no real request was sent.
            </p>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setQuoteDone(true);
              }}
            >
              <label className="block text-sm font-medium text-mist-100">
                Your name
                <input required placeholder="Sample Client" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100">
                Phone or email
                <input required placeholder="03xx xxxxxxx or email" className={`${inputCls} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Project type
                <select required defaultValue="" className={`${inputCls} mt-1.5`}>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Budget range
                <select required defaultValue="" className={`${inputCls} mt-1.5`}>
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-mist-100 sm:col-span-2">
                Project details
                <textarea
                  required
                  rows={3}
                  placeholder="For example: a billing app for my store with stock reports"
                  className={`${inputCls} mt-1.5 resize-y`}
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-deep sm:col-span-2"
              >
                Request quote
              </button>
            </form>
          )}
        </div>
      </section>
      </Reveal>

      <Reveal delay={80}>
      <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-mist-500">
        Built as an example of software services website development in
        Multan. Looking for an SEO expert for software company in Multan? This
        demo shows the website side of that work.
      </p>
      </Reveal>
    </div>
  );
}
