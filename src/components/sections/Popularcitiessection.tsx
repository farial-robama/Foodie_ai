import Link from "next/link";
import { MapPin, ArrowUpRight, Utensils } from "lucide-react";

interface CityEntry {
  city: string;
  specialty: string;
  restaurantCount: number;
}

const CITIES: CityEntry[] = [
  { city: "Dhaka", specialty: "Kacchi Biryani", restaurantCount: 1240 },
  { city: "Chattogram", specialty: "Mezban Beef", restaurantCount: 486 },
  { city: "Sylhet", specialty: "Shatkora Curry", restaurantCount: 312 },
  { city: "Khulna", specialty: "Chuijhal", restaurantCount: 198 },
  { city: "Rajshahi", specialty: "Silk City Sweets", restaurantCount: 176 },
  { city: "Cox's Bazar", specialty: "Fresh Seafood", restaurantCount: 154 },
];

const TOTAL_SPOTS = CITIES.reduce((sum, c) => sum + c.restaurantCount, 0);

/**
 * Bento-grid layout: one wide card per row edge, a typographic centerpiece,
 * and a stat + CTA tile filling out the grid. All gradients are built from
 * the theme's own primary/secondary/warm/dark tokens — no outside colors.
 */
export default function PopularCitiesSection() {
  return (
    <section className="section-pad bg-warm dark:bg-dark">
      <div className="container-pad">
        <div className="mb-10 max-w-md md:mb-14">
          <h2 className="text-3xl font-semibold text-dark dark:text-warm md:text-4xl">
            Where people are eating
          </h2>
          <p className="mt-3 text-dark/70 dark:text-warm/70">
            Restaurant counts and local specialties across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {/* Dhaka — wide */}
          <Link
            href={`/explore?location=${encodeURIComponent(CITIES[0].city)}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary/25 via-primary/10 to-warm p-6 sm:col-span-2 dark:to-dark"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark">{CITIES[0].city}</h3>
              <p className="mt-2 max-w-xs text-sm text-dark/70">
                {CITIES[0].restaurantCount.toLocaleString()} restaurants, led by{" "}
                {CITIES[0].specialty.toLowerCase()}.
              </p>
            </div>
            <span className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-dark px-4 py-2 text-sm font-medium text-warm">
              Explore {CITIES[0].city}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>

          {/* Chattogram */}
          <CityTile entry={CITIES[1]} className="from-secondary/25 to-warm dark:to-dark" />

          {/* Sylhet */}
          <CityTile entry={CITIES[2]} className="from-primary/15 via-secondary/10 to-warm dark:to-dark" />

          {/* Khulna */}
          <CityTile entry={CITIES[3]} className="from-secondary/15 via-primary/10 to-warm dark:to-dark" />

          {/* Centerpiece */}
          <div className="flex items-center justify-center rounded-3xl bg-dark p-6 sm:col-span-2 dark:bg-warm/5">
            <span className="text-4xl font-black tracking-tight text-warm md:text-5xl">
              CITIES
            </span>
          </div>

          {/* Rajshahi */}
          <CityTile entry={CITIES[4]} className="from-primary/20 to-warm dark:to-dark" />

          {/* Cox's Bazar — wide */}
          <Link
            href={`/explore?location=${encodeURIComponent(CITIES[5].city)}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/20 via-primary/10 to-warm p-6 sm:col-span-2 dark:to-dark"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark">{CITIES[5].city}</h3>
              <p className="mt-2 max-w-xs text-sm text-dark/70">
                {CITIES[5].restaurantCount.toLocaleString()} restaurants, known for{" "}
                {CITIES[5].specialty.toLowerCase()}.
              </p>
            </div>
            <span className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-dark px-4 py-2 text-sm font-medium text-warm">
              Explore {CITIES[5].city}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>

          {/* Stat tile */}
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-dark to-dark/90 p-6 text-warm dark:from-warm/10 dark:to-warm/5 dark:text-warm">
            <Utensils className="h-6 w-6 text-primary" aria-hidden="true" />
            <div>
              <p className="text-3xl font-bold">{TOTAL_SPOTS.toLocaleString()}+</p>
              <p className="text-sm text-warm/60">restaurants nationwide</p>
            </div>
          </div>

          {/* CTA tile */}
          <Link
            href="/explore"
            className="group flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary/20 to-warm p-6 dark:to-dark"
          >
            <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="inline-flex items-center gap-1 text-lg font-semibold text-dark">
              Explore all cities
              <ArrowUpRight
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CityTile({
  entry,
  className,
}: {
  entry: CityEntry;
  className: string;
}) {
  return (
    <Link
      href={`/explore?location=${encodeURIComponent(entry.city)}`}
      className={`group flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br p-6 ${className}`}
    >
      <h3 className="text-xl font-bold text-dark">{entry.city}</h3>
      <div className="mt-6 flex items-end justify-between">
        <p className="text-sm text-dark/60">{entry.specialty}</p>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-dark/15 text-dark/60 transition-colors group-hover:border-dark/40 group-hover:text-dark">
          <MapPin className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}