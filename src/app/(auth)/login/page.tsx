// "use client";
// import { SignIn } from "@clerk/nextjs";
// import { useState } from "react";
// import { Zap, Copy, Check } from "lucide-react";

// export default function LoginPage() {
//   const [copied, setCopied] = useState<string | null>(null);

//   const copy = (text: string, key: string) => {
//     navigator.clipboard.writeText(text);
//     setCopied(key);
//     setTimeout(() => setCopied(null), 2000);
//   };

//   const demos = [
//     { role: "user",  label: "User",  email: "user00@example.com",        pass: "User@123409" },
//     { role: "admin", label: "Admin", email: "farialrobama15@gmail.com", pass: "09876@fF"    },
//   ];

//   return (
//     <div className="flex flex-col gap-5">

//       {/* Demo credentials */}
//       <div className="rounded-2xl border border-amber-200 dark:border-amber-800/40 overflow-hidden">
//         <div className="bg-amber-50 dark:bg-amber-900/20 px-4 py-2.5 flex items-center gap-2">
//           <Zap size={11} className="text-amber-600 dark:text-amber-500" />
//           <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
//             Demo Access — click to copy
//           </span>
//         </div>
//         <div className="grid grid-cols-2 divide-x divide-amber-100 dark:divide-stone-800 bg-amber-50/30 dark:bg-stone-800/20">
//           {demos.map((d) => (
//             <div key={d.role} className="p-3 space-y-2">
//               <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 dark:text-amber-500">
//                 {d.label}
//               </p>
//               <button
//                 onClick={() => copy(d.email, `${d.role}-e`)}
//                 className="flex items-center justify-between w-full text-left group"
//               >
//                 <span className="text-xs text-stone-600 dark:text-stone-400 break-all leading-relaxed group-hover:text-[var(--color-primary)] transition-colors">
//                   {d.email}
//                 </span>
//                 <span className="ml-1 flex-shrink-0 text-stone-300 dark:text-stone-600 group-hover:text-[var(--color-primary)] transition-colors">
//                   {copied === `${d.role}-e`
//                     ? <Check size={11} className="text-green-500" />
//                     : <Copy size={11} />}
//                 </span>
//               </button>
//               <button
//                 onClick={() => copy(d.pass, `${d.role}-p`)}
//                 className="flex items-center justify-between w-full text-left group"
//               >
//                 <span className="text-xs font-mono text-stone-500 dark:text-stone-500 group-hover:text-[var(--color-primary)] transition-colors">
//                   {d.pass}
//                 </span>
//                 <span className="ml-1 flex-shrink-0 text-stone-300 dark:text-stone-600 group-hover:text-[var(--color-primary)] transition-colors">
//                   {copied === `${d.role}-p`
//                     ? <Check size={11} className="text-green-500" />
//                     : <Copy size={11} />}
//                 </span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Clerk SignIn */}
//       <SignIn
//         routing="hash"
//         afterSignInUrl="/"
//         signUpUrl="/register"
//         appearance={{
//           variables: {
//             colorPrimary: "#E8593C",
//             borderRadius: "0.75rem",
//             fontFamily: "inherit",
//           },
//           elements: {
//             rootBox: "w-full",
//             card: "shadow-none p-0 bg-transparent border-0",
//             headerTitle: "text-stone-900 dark:text-white font-bold text-xl",
//             headerSubtitle: "text-stone-500 dark:text-stone-400 text-sm",
//             formButtonPrimary: "rounded-xl text-sm normal-case font-medium hover:opacity-90",
//             formFieldInput: "rounded-xl border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 dark:text-white text-sm",
//             formFieldLabel: "text-stone-700 dark:text-stone-300 text-sm font-medium",
//             footerActionLink: "text-[#E8593C] hover:text-[#D14B30] font-medium",
//             socialButtonsBlockButton: "rounded-xl border-stone-200 dark:border-stone-700 dark:bg-stone-800 dark:text-white",
//             socialButtonsBlockButtonText: "text-sm font-medium",
//             dividerLine: "bg-stone-200 dark:bg-stone-700",
//             dividerText: "text-stone-400 text-xs",
//             identityPreviewText: "text-stone-700 dark:text-stone-300",
//             identityPreviewEditButton: "text-[#E8593C]",
//             alertText: "text-sm",
//             footer: "hidden",
//           },
//         }}
//       />
//     </div>
//   );
// }


import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <SignIn
      routing="hash"
      afterSignInUrl="/"
      signUpUrl="/register"
      appearance={{
        variables: {
          colorPrimary: "#E8593C",
          borderRadius: "0.75rem",
          fontFamily: "inherit",
        },
        elements: {
          rootBox: "w-full",
          card: "shadow-none border border-stone-200 dark:border-stone-800 rounded-2xl bg-white dark:bg-stone-900 w-full p-6",
          headerTitle: "text-stone-900 dark:text-white font-bold",
          headerSubtitle: "text-stone-500 dark:text-stone-400",
          formButtonPrimary: "rounded-xl text-sm normal-case font-medium hover:opacity-90",
          formFieldInput: "rounded-xl border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 dark:text-white text-sm",
          formFieldLabel: "text-stone-700 dark:text-stone-300 text-sm font-medium",
          footerActionLink: "text-[#E8593C] hover:text-[#D14B30] font-medium",
          socialButtonsBlockButton: "rounded-xl border-stone-200 dark:border-stone-700 dark:bg-stone-800 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-700",
          socialButtonsBlockButtonText: "text-sm font-medium",
          dividerLine: "bg-stone-200 dark:bg-stone-700",
          dividerText: "text-stone-400 text-xs",
          identityPreviewText: "text-stone-700 dark:text-stone-300",
          identityPreviewEditButton: "text-[#E8593C]",
          alertText: "text-sm",
          formFieldSuccessText: "text-sm",
        },
      }}
    />
  );
}