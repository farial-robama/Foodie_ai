"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is booking a table on FoodieAI free?",
    answer:
      "Yes. Browsing, saving restaurants, and reserving a table are all free. Some restaurants may require a deposit for large groups, which is shown before you confirm.",
  },
  {
    question: "How does the AI chatbot pick recommendations?",
    answer:
      "It looks at the cuisine, price range, and location you mention, plus your saved and reviewed restaurants, then matches those against current ratings and availability.",
  },
  {
    question: "Can I cancel or change a booking?",
    answer:
      "Yes, from My Bookings in your dashboard up until the restaurant's cancellation window, usually 2 hours before your reservation time.",
  },
  {
    question: "Do restaurant owners write their own descriptions?",
    answer:
      "Owners can write their own or use the admin AI description generator as a starting point, which they then edit before it's published.",
  },
  {
    question: "Which cities does FoodieAI cover?",
    answer:
      "Dhaka, Chattogram, Sylhet, Khulna, Rajshahi, and Cox's Bazar today, with new cities added as restaurants join.",
  },
];

/**
 * Single-open accordion. No external dependency — swap for shadcn/ui
 * Accordion if that's already in the project.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-warm dark:bg-dark">
      <div className="container-pad max-w-2xl">
        <h2 className="text-3xl font-semibold text-dark dark:text-warm md:text-4xl">
          Questions people ask
        </h2>

        <div className="mt-10 divide-y divide-dark/10 border-t border-dark/10 dark:divide-warm/10 dark:border-warm/10">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-dark md:text-lg dark:text-warm">
                    {item.question}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="min-h-0 text-dark/70 dark:text-warm/70">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}