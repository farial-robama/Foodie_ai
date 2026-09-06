import { UtensilsCrossed, Target, Heart, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const team = [
  { name: "Rafiq Ahmed",  role: "Founder & CEO",     avatar: "https://i.pravatar.cc/160?img=11" },
  { name: "Nusrat Jahan", role: "Head of Product",   avatar: "https://i.pravatar.cc/160?img=47" },
  { name: "Karim Hassan", role: "Lead Engineer",     avatar: "https://i.pravatar.cc/160?img=14" },
  { name: "Priya Sharma", role: "AI & Data Science", avatar: "https://i.pravatar.cc/160?img=48" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make discovering great food effortless for everyone in Bangladesh through the power of AI and community reviews.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    desc: "A world where no one ever has a bad meal — where every dining experience is informed, intentional, and memorable.",
  },
  {
    icon: Zap,
    title: "Our Approach",
    desc: "We combine real user reviews with cutting-edge AI to give recommendations that feel personal, not algorithmic.",
  },
];

const stats = [
  { value: "1,200+", label: "Restaurants listed" },
  { value: "50,000+", label: "Happy users" },
  { value: "80+", label: "Cities covered" },
  { value: "4.8★", label: "Average rating" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-warm dark:bg-dark">

      {/* Hero */}
      <section className="section-pad">
        <div className="container-pad grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="text-sm font-medium text-primary">Founded in Dhaka, 2024</p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] text-dark sm:text-6xl dark:text-warm">
              Finding a great
              <br />
              restaurant should feel
              <br />
              as good as eating
              <br />
              at one.
            </h1>
            <p className="mt-6 max-w-md text-lg text-dark/70 dark:text-warm/70">
              We're on a mission to transform how people in Bangladesh discover
              food — pairing real reviews with AI that actually understands taste.
            </p>
          </div>

          {/* Two-photo collage, fixed heights so it can't blow out the hero */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-8 h-56 overflow-hidden rounded-3xl sm:h-64 md:mt-10 md:h-72">
              <Image
                src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&auto=format&fit=crop"
                alt="A shared meal at a Dhaka restaurant table"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-3xl sm:h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&auto=format&fit=crop"
                alt="Close-up of a plated dish"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
                <UtensilsCrossed className="h-5 w-5 text-warm" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — editorial rows, not a card grid */}
      <section className="section-pad border-t border-dark/10 dark:border-warm/10">
        <div className="container-pad">
          <h2 className="mb-10 text-3xl font-semibold text-dark md:mb-14 dark:text-warm">
            What drives us
          </h2>

          <div className="divide-y divide-dark/10 border-y border-dark/10 dark:divide-warm/10 dark:border-warm/10">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="grid grid-cols-[3rem_1fr] items-start gap-6 py-8 sm:grid-cols-[4rem_1fr_2fr] sm:gap-10 md:py-10"
              >
                <span className="text-lg text-dark/30 dark:text-warm/30">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-3">
                  <v.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-dark dark:text-warm">
                    {v.title}
                  </h3>
                </div>

                <p className="col-span-2 text-dark/70 sm:col-span-1 dark:text-warm/70">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — full-bleed dark band */}
      <section className="bg-dark py-16 text-warm md:py-20">
        <div className="container-pad">
          <div className="grid grid-cols-2 divide-x divide-y divide-warm/10 border border-warm/10 md:grid-cols-4 md:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <p className="text-4xl font-bold text-primary md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-warm/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — masthead list, not avatar cards */}
      <section className="section-pad">
        <div className="container-pad">
          <h2 className="mb-10 text-3xl font-semibold text-dark md:mb-14 dark:text-warm">
            Meet the team
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-dark/5 dark:bg-warm/5">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 20vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-semibold text-dark dark:text-warm">
                  {member.name}
                </p>
                <p className="text-sm text-dark/60 dark:text-warm/60">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20 text-warm md:py-28">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to discover great food?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-warm/60">
            Join thousands of food lovers already using FoodieAI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/explore">
              <Button variant="primary" size="lg">Explore Restaurants</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" size="lg">Sign Up Free</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}