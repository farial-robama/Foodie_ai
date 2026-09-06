import Image from "next/image";
import StarRating from "@/components/ui/StarRating";

const testimonials = [
  {
    name: "Tasnim Rahman",
    role: "Food Blogger",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    review:
      "FoodieAI completely changed how I discover restaurants. The AI chatbot suggested a hidden gem in Dhanmondi I never would have found on my own. Absolutely love it!",
    restaurant: "Recommended: Kacchi Bhai",
  },
  {
    name: "Arif Hossain",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    review:
      "Booking a table used to be such a hassle. Now I just open FoodieAI, pick a time, and I'm done in 30 seconds. The review summaries save me so much time deciding where to go.",
    restaurant: "Recommended: Sakura Japanese",
  },
  {
    name: "Nadia Islam",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/80?img=32",
    rating: 5,
    review:
      "I used the AI assistant to plan a birthday dinner for 10 people with dietary restrictions. It gave me 3 perfect options with menus that worked for everyone. Incredible.",
    restaurant: "Recommended: Pizza Napoli",
  },
];

// Duplicated once so the marquee loop is seamless at -50% translate.
const track = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className="section-pad overflow-hidden bg-white dark:bg-stone-950">
      <div className="container-pad">
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-1" style={{ color: "var(--color-primary)" }}>
            Real stories
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white mb-3">
            What Our Users Say
          </h2>
          <p className="text-stone-500 dark:text-stone-400">
            Join thousands of food lovers who found their favourite restaurants with FoodieAI
          </p>
        </div>
      </div>

      <div className="testimonial-marquee-mask overflow-hidden">
        <div className="testimonial-marquee-track flex w-max gap-6 px-4 sm:px-6 lg:px-8">
          {track.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex w-80 shrink-0 flex-col gap-4 rounded-2xl border border-stone-200 bg-[var(--color-warm)] p-6 dark:border-stone-800 dark:bg-stone-900 sm:w-96"
            >
              <StarRating rating={t.rating} size={15} />
              <p className="flex-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                "{t.review}"
              </p>
              <div className="border-t border-stone-200 pt-3 dark:border-stone-800">
                <p className="mb-3 text-xs text-stone-400">{t.restaurant}</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-stone-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-marquee-track {
          animation: testimonial-marquee-scroll 36s linear infinite;
        }
        .testimonial-marquee-mask:hover .testimonial-marquee-track {
          animation-play-state: paused;
        }
        @keyframes testimonial-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}