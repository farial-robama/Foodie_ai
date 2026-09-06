"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactPage() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error,   setError]   = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) { setError("Please fill all required fields"); return; }
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSuccess(true);
    setName(""); setEmail(""); setSubject(""); setMessage("");
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "123 Food Street, Gulshan, Dhaka 1212" },
    { icon: Phone,  label: "Phone",   value: "+880 1700 000000" },
    { icon: Mail,   label: "Email",   value: "hello@foodieai.com" },
  ];

  const hours = [
    { day: "Monday – Friday", time: "9am – 6pm" },
    { day: "Saturday", time: "10am – 4pm" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen pt-20 bg-warm dark:bg-dark">
      <section className="section-pad">
        <div className="container-pad">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary">Get in touch</p>
            <h1 className="mt-3 text-4xl font-bold text-dark sm:text-5xl dark:text-warm">
              Questions, feedback,
              <br />
              or a restaurant to add?
            </h1>
            <p className="mt-4 text-dark/70 dark:text-warm/70">
              Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:gap-12">
            {/* Info panel — dark, one bold block against the light page */}
            <div className="rounded-3xl bg-dark p-8 text-warm">
              <div className="divide-y divide-warm/10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 py-4 first:pt-0">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-warm/50">{item.label}</p>
                      <p className="mt-0.5 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com/?q=123+Food+Street,+Gulshan,+Dhaka+1212"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Get directions
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <div className="mt-8 border-t border-warm/10 pt-6">
                <p className="text-sm font-semibold">Business hours</p>
                <div className="mt-3 space-y-2 text-sm text-warm/70">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span>{h.day}</span>
                      <span className="font-medium text-warm">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form — sits directly on the page, no card wrapper */}
            <div>
              {success ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl border border-dark/10 py-16 text-center dark:border-warm/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15">
                    <CheckCircle2 className="h-7 w-7 text-secondary" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-dark dark:text-warm">Message sent</p>
                  <p className="max-w-xs text-sm text-dark/60 dark:text-warm/60">
                    Thanks for reaching out — we'll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSuccess(false)} variant="outline" size="sm">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      label="Your name *"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      label="Email address *"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <Input
                    label="Subject"
                    placeholder="What is this about?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-dark dark:text-warm">
                      Message *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      rows={6}
                      className="w-full resize-none rounded-xl border border-dark/15 bg-warm px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary dark:border-warm/15 dark:bg-dark dark:text-warm"
                    />
                  </div>

                  {error && <p className="text-sm text-primary">{error}</p>}

                  <Button type="submit" variant="primary" size="md" loading={loading}>
                    <Send size={15} />
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}