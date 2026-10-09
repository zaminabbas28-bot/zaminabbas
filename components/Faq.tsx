"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { ChevronDownIcon } from "./icons";
import { FAQS, SITE } from "@/lib/site";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 py-20 sm:py-28">
      <JsonLd id="faq-jsonld" data={faqSchema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2
            id="faq-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-body">
            Everything you need to know about working with {SITE.name}.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 80}>
                <div
                  className={`card-surface overflow-hidden transition-colors ${
                    open ? "border-accent/40" : ""
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-bold text-ink sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                          open ? "rotate-180 bg-accent text-white" : "bg-cream text-accent"
                        }`}
                      >
                        <ChevronDownIcon className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className="faq-answer"
                    data-open={open}
                  >
                    <div className="faq-answer-inner">
                      <p className="px-6 pb-6 leading-relaxed text-body">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
