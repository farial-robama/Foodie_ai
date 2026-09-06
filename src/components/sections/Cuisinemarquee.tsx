import { Utensils } from "lucide-react";

const CUISINES = [
  "Bengali",
  "Biryani",
  "Chinese",
  "Street Food",
  "Thai",
  "Italian",
  "Indian",
  "Continental",
  "Desserts",
  "BBQ & Grill",
  "Seafood",
  "Korean",
  "Cafe & Bakery",
  "Fast Food",
];

/**
 * Full-bleed marquee strip of cuisine tags.
 * Pure CSS animation (no JS deps) — pauses on hover, respects reduced motion.
 * Drop this between the Hero and Categories sections.
 */
export default function CuisineMarquee() {
  // Duplicate the list once so the loop is seamless at -50% translate.
  const track = [...CUISINES, ...CUISINES];

  return (
    <section
      aria-label="Cuisines on FoodieAI"
      className="relative overflow-hidden border-y border-dark/10 bg-dark py-4 dark:border-warm/10"
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {track.map((cuisine, i) => (
          <div
            key={`${cuisine}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Utensils className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium tracking-wide text-warm/90">
              {cuisine}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}