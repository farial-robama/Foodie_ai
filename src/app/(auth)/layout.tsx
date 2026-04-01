// import Link from "next/link";
// import { UtensilsCrossed } from "lucide-react";

// const testimonials = [
//   {
//     text: "Found my favourite biryani spot in 30 seconds. The AI recommendations are scary accurate!",
//     name: "Tasnim Rahman",
//     role: "Food Blogger",
//     avatar: "T",
//     rating: 5,
//   },
//   {
//     text: "Booked a table for 8 people in under a minute. Incredible experience.",
//     name: "Arif Hossain",
//     role: "Software Engineer",
//     avatar: "A",
//     rating: 5,
//   },
//   // {
//   //   text: "The AI chatbot suggested a hidden gem I never would have found on my own.",
//   //   name: "Nadia Islam",
//   //   role: "Marketing Manager",
//   //   avatar: "N",
//   //   rating: 5,
//   // },
// ];

// const stats = [
//   { value: "1,200+", label: "Restaurants" },
//   { value: "50K+",   label: "Happy users" },
//   { value: "4.9★",   label: "Avg rating"  },
// ];

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

//       {/* ── Left panel ── */}
//       <div
//         className="hidden lg:flex flex-col relative overflow-hidden"
//         style={{ backgroundColor: "var(--color-primary)" }}
//       >
//         {/* Background pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2" />
//           <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/20 translate-x-1/3 translate-y-1/3" />
//           <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
//         </div>

//         <div className="relative flex flex-col h-full p-10 xl:p-14">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2.5 w-fit">
//             <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
//               <UtensilsCrossed size={18} className="text-white" />
//             </div>
//             <span className="text-white font-bold text-xl tracking-tight">FoodieAI</span>
//           </Link>

//           {/* Main content */}
//           <div className="flex-1 flex flex-col justify-center py-12">

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 w-fit mb-8">
//               <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//               <span className="text-white/90 text-xs font-medium">AI-Powered Discovery</span>
//             </div>

//             <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-5">
//               Find your next<br />
//               <span className="text-white/70">favourite meal</span>
//             </h1>

//             <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
//               Discover top-rated restaurants, book tables instantly, and get AI-powered recommendations tailored just for you.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-12">
//               {stats.map((s) => (
//                 <div
//                   key={s.label}
//                   className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
//                 >
//                   <p className="text-white text-xl font-bold">{s.value}</p>
//                   <p className="text-white/50 text-xs mt-1">{s.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Testimonials */}
//             <div className="space-y-3">
//               {testimonials.map((t) => (
//                 <div
//                   key={t.name}
//                   className="flex items-start gap-3 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-4"
//                 >
//                   <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
//                     {t.avatar}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-1 mb-1">
//                       {Array.from({ length: t.rating }).map((_, i) => (
//                         <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#FCD34D">
//                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                         </svg>
//                       ))}
//                     </div>
//                     <p className="text-white/80 text-xs leading-relaxed">"{t.text}"</p>
//                     <p className="text-white/40 text-xs mt-1.5">— {t.name}, {t.role}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Footer */}
//           <p className="text-white/25 text-xs">
//             © 2025 FoodieAI · All rights reserved
//           </p>
//         </div>
//       </div>

//       {/* ── Right panel ── */}
//       <div className="flex flex-col min-h-screen bg-[var(--color-warm)] dark:bg-stone-950">

//         {/* Mobile header */}
//         <div className="lg:hidden flex items-center justify-between px-6 pt-8 pb-4">
//           <Link href="/" className="flex items-center gap-2">
//             <div
//               className="w-8 h-8 rounded-xl flex items-center justify-center"
//               style={{ backgroundColor: "var(--color-primary)" }}
//             >
//               <UtensilsCrossed size={14} className="text-white" />
//             </div>
//             <span className="font-bold text-stone-900 dark:text-white">
//               Foodie<span style={{ color: "var(--color-primary)" }}>AI</span>
//             </span>
//           </Link>
//           <Link
//             href="/"
//             className="text-xs text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
//           >
//             ← Back to site
//           </Link>
//         </div>

//         {/* Desktop back link */}
//         <div className="hidden lg:flex justify-end px-10 pt-8">
//           <Link
//             href="/"
//             className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors flex items-center gap-1"
//           >
//             ← Back to FoodieAI
//           </Link>
//         </div>

//         {/* Form area */}
//         <div className="flex-1 flex items-center justify-center px-6 py-8 lg:px-10">
//           <div className="w-full max-w-[420px]">

//             {/* Card wrapper */}
//             <div className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm p-7">
//               {children}
//             </div>

//             {/* Bottom note */}
//             <p className="text-center text-xs text-stone-400 dark:text-stone-600 mt-5">
//               By continuing, you agree to our{" "}
//               <Link href="/terms" className="underline hover:text-stone-600 dark:hover:text-stone-400">
//                 Terms
//               </Link>{" "}
//               &{" "}
//               <Link href="/privacy" className="underline hover:text-stone-600 dark:hover:text-stone-400">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Mobile stats */}
//         <div className="lg:hidden grid grid-cols-3 gap-3 px-6 pb-8">
//           {stats.map((s) => (
//             <div
//               key={s.label}
//               className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-3 text-center"
//             >
//               <p className="text-sm font-bold text-stone-900 dark:text-white">{s.value}</p>
//               <p className="text-xs text-stone-400 mt-0.5">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import Link from "next/link";
import { UtensilsCrossed, Sparkles } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const features = [
    "AI-powered restaurant discovery",
    "Personalised picks based on your taste",
    "Real-time availability & reservations",
    "Curated local hidden gems",
  ];

  return (
    <div className="min-h-screen flex">

      {/* ── Left branding panel ── */}
      <div
        className="hidden lg:flex flex-col w-[46%] flex-shrink-0"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {/* Top logo */}
        <div className="px-12 pt-12">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <UtensilsCrossed size={16} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">FoodieAI</span>
          </Link>
        </div>

        {/* Centre content */}
        <div className="flex-1 flex flex-col justify-center px-12">
          <div className="inline-flex items-center gap-1.5 mb-8 px-3 py-1 rounded-full bg-white/15 border border-white/20 w-fit">
            <Sparkles size={11} className="text-white/80" />
            <span className="text-white/80 text-xs font-medium">AI-Powered</span>
          </div>

          <h1 className="text-[2.6rem] font-bold text-white leading-tight tracking-tight mb-4">
            Discover the best<br />food in your city
          </h1>

          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xs">
            Smart, instant recommendations tailored to your taste — every single time.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                <span className="text-white/70 text-sm">{f}</span>
              </li>
            ))}
          </ul>

          {/* Stat strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-6">
            {[
              { n: "50K+", l: "Users" },
              { n: "200+", l: "Cities" },
              { n: "4.9", l: "Rating" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-white text-xl font-bold">{s.n}</p>
                <p className="text-white/45 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="px-12 pb-10">
          <p className="text-white/30 text-xs">© 2025 FoodieAI. All rights reserved.</p>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex flex-col bg-[var(--color-warm)] dark:bg-stone-950">

        {/* Mobile header */}
        <div className="lg:hidden px-6 pt-8 pb-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <UtensilsCrossed size={14} className="text-white" />
            </div>
            <span className="font-semibold text-stone-900 dark:text-white text-base">
              Foodie<span style={{ color: "var(--color-primary)" }}>AI</span>
            </span>
          </Link>
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-10">
          <div className="w-full max-w-[400px] flex flex-col gap-5">

            {/* Demo credentials */}
            <div className="rounded-xl border border-amber-200 dark:border-amber-800/50 overflow-hidden text-xs">
              <div className="bg-amber-100/80 dark:bg-amber-900/30 px-4 py-2 border-b border-amber-200 dark:border-amber-800/50">
                <span className="font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-widest text-[10px]">
                  Demo credentials
                </span>
              </div>
              <div className="bg-white/60 dark:bg-stone-900/40 grid grid-cols-2 divide-x divide-amber-100 dark:divide-amber-900/50">
                {[
                  { role: "User", email: "user00@example.com", pass: "User@123409" },
                  { role: "Admin", email: "farialrobama15@gmail.com", pass: "09876@fF" },
                ].map((c) => (
                  <div key={c.role} className="px-4 py-3 space-y-0.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500 mb-1">
                      {c.role}
                    </p>
                    <p className="text-stone-600 dark:text-stone-400 break-all">{c.email}</p>
                    <p className="text-stone-500 dark:text-stone-500 font-mono">{c.pass}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clerk slot */}
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}