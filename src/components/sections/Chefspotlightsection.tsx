import Image from "next/image";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

/**
 * Shape matches your Restaurant model — swap this hardcoded object for a
 * real query (e.g. the oldest / highest-rated `featured: true` restaurant)
 * once you're ready to wire it up.
 */
const SPOTLIGHT = {
  name: "Star Kabab",
  slug: "star-kabab",
  location: "Nawabpur Road, Old Dhaka",
  established: 1948,
  rating: 4.7,
  reviewCount: 289,
  image:
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1200",
  signatureDish: { name: "Beef Rezala", price: 220 },
  blurb:
    "Melt-in-mouth kababs and slow-cooked beef rezala, made the same way since Old Dhaka's kitchens first opened their doors to the neighborhood.",
};

export default function ChefSpotlightSection() {
  return (
    <section className="section-pad bg-dark text-warm">
      <div className="container-pad grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-sm md:aspect-auto">
          <Image
            src={SPOTLIGHT.image}
            alt={`${SPOTLIGHT.name} in ${SPOTLIGHT.location}`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 90vw"
          />

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-dark/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
            {SPOTLIGHT.rating}
            <span className="text-warm/50">
              ({SPOTLIGHT.reviewCount} reviews)
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Quote className="h-8 w-8 text-primary" aria-hidden="true" />

          <blockquote className="mt-4 text-2xl leading-snug md:text-3xl">
            {SPOTLIGHT.blurb}
          </blockquote>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-warm/60">
            <span className="font-medium text-warm">{SPOTLIGHT.name}</span>
            <span aria-hidden="true">·</span>
            <span>{SPOTLIGHT.location}</span>
            <span aria-hidden="true">·</span>
            <span>Serving since {SPOTLIGHT.established}</span>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-warm/10 pt-4">
            <div>
              <p className="text-xs text-warm/50">Signature dish</p>
              <p className="font-medium">{SPOTLIGHT.signatureDish.name}</p>
            </div>
            <p className="text-lg font-medium text-primary">
              ৳{SPOTLIGHT.signatureDish.price}
            </p>
          </div>

          <Link
            href={`/restaurants/${SPOTLIGHT.slug}`}
            className="mt-8 inline-flex w-fit items-center border-b border-primary pb-1 text-sm font-medium text-primary transition-colors hover:border-warm hover:text-warm"
          >
            Visit {SPOTLIGHT.name}
          </Link>
        </div>
      </div>
    </section>
  );
}