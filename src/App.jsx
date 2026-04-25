import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Wrench, Truck, ShieldCheck, Star, Clock, CheckCircle, Mail, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Air Conditioning Repair",
    description: "Professional AC diagnostics and repair to keep your vehicle comfortable in every season.",
  },
  {
    title: "Engine Repair",
    description: "Accurate diagnostics and expert repair for gas and diesel engines, from warning lights to complex performance issues.",
  },
  {
    title: "General Repair & Maintenance",
    description: "Preventative maintenance, inspections, tune-ups, brakes, fluids, and routine vehicle care.",
  },
  {
    title: "RV Repair",
    description: "Mobile repair and maintenance support for RVs and larger vehicles throughout Larimer County.",
  },
  {
    title: "Transmission Services",
    description: "Transmission diagnostics, service, maintenance, and repair performed with precision and care.",
  },
  {
    title: "Mobile Repair & Roadside Assistance",
    description: "Convenient mobile mechanic services brought directly to your home, workplace, or roadside location.",
  },
  {
    title: "Hydraulic Cylinder Repairs",
    description: "Repair and service for hydraulic cylinders used in trucks, equipment, trailers, and heavy-duty applications.",
  },
  {
    title: "Welding Fabrication",
    description: "Custom welding, fabrication, and repair solutions for vehicles, trailers, equipment, and metal components.",
  },
  {
    title: "Light Autobody Repairs",
    description: "Minor body repair support for dents, panels, cosmetic damage, and light exterior restoration needs.",
  },
];

const serviceAreas = ["Fort Collins", "Loveland", "Windsor", "Timnath", "Berthoud", "Wellington", "Laporte", "Johnstown", "Greeley", "Milliken", "Larimer County"];

const googleReviewsUrl = "https://www.google.com/search?q=evelvated+dieserl+reviews&rlz=1C5CHFA_enUS1021US1038&oq=evelvated+dieserl+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMg0IAhAAGIYDGIAEGIoFMg0IAxAAGIYDGIAEGIoFMg0IBBAAGIYDGIAEGIoFMgcIBRAAGO8FMgcIBhAAGO8FMgoIBxAAGIAEGKIEMgoICBAAGIAEGKIE0gEJNTY1NGowajE1qAIIsAIB8QUqll-R0_j0Nw&sourceid=chrome&ie=UTF-8#lrd=0x876953b5ed9bed75:0xa9d645c1dc45f679,1,,,,";
const financingUrl = "https://kolify.com";

// Add real, approved 5-star Google review snippets here when available.
const fiveStarReviews = [
  {
    name: "John D.",
    text: "Fast, honest, and reliable. Came out same day and got my truck running again. Highly recommend.",
  },
  {
    name: "Sarah M.",
    text: "Super professional and way more convenient than going to a shop. Great communication and fair pricing.",
  },
  {
    name: "Mike R.",
    text: "Top quality work. You can tell they know what they're doing. Will definitely use again.",
  },
];

const galleryImages = [
  {
    src: "/images/diesel-engine-rebuild-loveland-co.webp",
    title: "Diesel Engine Rebuild",
    caption: "Precision engine work for heavy-duty diesel performance.",
    category: "Engine Repair",
  },
  {
    src: "/images/welding-fabrication-commercial-truck-loveland-co.webp",
    title: "Welding & Fabrication",
    caption: "On-site welding repair for commercial trucks and trailers.",
    category: "Fabrication",
  },
  {
    src: "/images/heavy-duty-mobile-truck-service-larimer-county.webp",
    title: "Heavy-Duty Truck Service",
    caption: "Mobile repair capability for work trucks and fleet vehicles.",
    category: "Mobile Repair",
  },
  {
    src: "/images/trailer-frame-repair-welding-loveland-co.webp",
    title: "Frame & Trailer Repair",
    caption: "Detailed inspection and repair of structural problem areas.",
    category: "Welding",
  },
  {
    src: "/images/diesel-engine-assembly-larimer-county.webp",
    title: "Engine Assembly Work",
    caption: "Clean, professional mechanical repair and assembly support.",
    category: "Diesel Repair",
  },
  {
    src: "/images/mechanical-diagnostics-diesel-repair-loveland-co.webp",
    title: "Mechanical Diagnostics",
    caption: "Hands-on diagnostics and repair for complex vehicle systems.",
    category: "Diagnostics",
  },
];

const faqs = [
  {
    question: "Do you offer mobile auto repair?",
    answer: "Yes. Elevated Auto & Diesel Repair provides mobile auto and diesel repair throughout Larimer County, bringing professional service directly to your home, workplace, job site, or roadside location.",
  },
  {
    question: "Do you work on diesel vehicles?",
    answer: "Yes. We service both gas and diesel vehicles, including diagnostics, engine repair, maintenance, and related mechanical services.",
  },
  {
    question: "Do you repair RVs?",
    answer: "Yes. We offer mobile RV repair and maintenance services for customers across Larimer County and surrounding communities.",
  },
  {
    question: "Can you help with roadside assistance?",
    answer: "Yes. We provide roadside support for common mechanical issues when service can be safely completed on-site.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Larimer County, including Fort Collins, Loveland, Windsor, Timnath, Berthoud, Wellington, and nearby areas.",
  },
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function CTAButton({ children, variant = "primary" }) {
  const classes = variant === "primary"
    ? "bg-slate-950 text-white hover:bg-slate-800"
    : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-100";
  return (
    <a href="#contact" className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-sm transition ${classes}`}>
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  );
}

export default function ElevatedAutoDieselRepair() {
  const [submitted, setSubmitted] = React.useState(false);
  const [activeReview, setActiveReview] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((current) => (current + 1) % fiveStarReviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img
              src="/images/elevated-auto-diesel-logo-phone.png"
              alt="Elevated Auto & Diesel Repair logo"
              className="h-10 w-auto max-w-[190px] rounded-xl bg-white object-contain sm:h-12 sm:max-w-[260px] md:h-14 md:max-w-none"
            />
          </a>
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <a href="tel:+19709660473" className="rounded-xl bg-slate-950 px-3 py-2 text-xs font-semibold text-white">Call</a>
            <a href="#contact" className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-950">Book</a>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#gallery" className="hover:text-slate-950">Gallery</a>
            <a href="#reviews" className="hover:text-slate-950">Reviews</a>
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#areas" className="hover:text-slate-950">Service Areas</a>
            <a href="#faq" className="hover:text-slate-950">FAQ</a>
            <a href="tel:+19709660473" className="rounded-2xl border border-slate-300 px-5 py-2.5 text-slate-950 hover:bg-slate-100">Call Now</a>
            <a href="#contact" className="rounded-2xl bg-slate-950 px-5 py-2.5 text-white hover:bg-slate-800">Request Service</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.25),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-32">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <img
                src="/images/elevated-auto-diesel-logo-phone.png"
                alt="Elevated Auto & Diesel Repair logo with phone number 970-966-0473"
                className="mb-5 w-full max-w-sm rounded-2xl bg-white p-3 shadow-2xl sm:max-w-md sm:rounded-3xl sm:p-4"
              />
              <div className="flex flex-col gap-3">
                <p className="inline-flex w-fit rounded-full border border-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                  Premium Mobile Auto & Diesel Repair
                </p>
                <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-white/20">
                  <ShieldCheck className="h-4 w-4" /> Financing Available
                </a>
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
                Elevated Auto & Diesel Service, Delivered to You.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Elevated Auto & Diesel Repair provides modern mobile auto repair, diesel repair, RV repair, roadside assistance, hydraulic cylinder repair, welding fabrication, and light autobody repair throughout Loveland, Larimer County, and surrounding Northern Colorado communities.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap">
                <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Apply for Financing
                </a>
                <a href="tel:+19709660473" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" /> Call 970-966-0473
                </a>
                <CTAButton>Request Service</CTAButton>
                <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Star className="mr-2 h-4 w-4" /> View Reviews
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-white sm:grid-cols-3 sm:gap-4">
              {/* Gallery Preview */}
              <div className="sm:col-span-3 grid grid-cols-3 gap-2 sm:gap-3">
                {galleryImages.slice(0, 6).map((image) => (
                  <img key={image.src} src={image.src} alt={`${image.title} - Elevated Auto & Diesel Repair`} className="h-20 w-full rounded-xl object-cover sm:h-24" />
                ))}
              </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Star className="mb-2 h-5 w-5" />
                  <p className="text-sm text-slate-300">70+ excellent Google reviews</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Truck className="mb-2 h-5 w-5" />
                  <p className="text-sm text-slate-300">Mobile service available</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="mb-2 h-5 w-5" />
                  <p className="text-sm text-slate-300">Professional, reliable repairs</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl sm:p-4">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-700 via-slate-900 to-black p-5 text-white sm:p-8 md:aspect-[4/5]">
                <div className="flex h-full flex-col">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Larimer County, CO</p>
                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Auto Repair—Elevated.</h2>
                    <p className="mt-4 text-slate-300">Dealership-level attention without the shop visit.</p>
                  </div>
                  <div className="mt-5 space-y-3 sm:space-y-4">
                    {["Engine & transmission repair", "Diesel, RV & mobile service", "Roadside assistance", "Hydraulics, welding & light body work"].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                        <CheckCircle className="h-5 w-5 text-slate-200" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl bg-white/10 p-4 hover:bg-white/20 transition">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-white" />
                        <span className="text-sm font-semibold">Financing Available</span>
                      </div>
                      <span className="text-xs text-slate-300">Apply →</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="reviews" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-white">
              <Star className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Google Reviews</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Trusted by 70+ 5-Star Reviews on Google</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Read verified Google reviews from customers who trust Elevated Auto & Diesel Repair for mobile auto repair, diesel service, welding, and roadside support across Loveland and Larimer County.
            </p>

            {fiveStarReviews.length > 0 && (
              <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="mb-5 flex justify-center gap-1 text-slate-950">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-xl font-medium leading-9 text-slate-800">“{fiveStarReviews[activeReview].text}”</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{fiveStarReviews[activeReview].name}</p>
                </motion.div>
                <div className="mt-6 flex justify-center gap-2">
                  {fiveStarReviews.map((review, index) => (
                    <button
                      key={`${review.name}-${index}`}
                      type="button"
                      onClick={() => setActiveReview(index)}
                      aria-label={`View review ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${index === activeReview ? "w-8 bg-slate-950" : "w-2.5 bg-slate-300"}`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
                <Star className="mr-2 h-4 w-4" /> View All 5-Star Google Reviews
              </a>
              <a href="tel:+19709660473" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                <Phone className="mr-2 h-4 w-4" /> Call 970-966-0473
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-slate-50 px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Gallery"
              title="Real Repairs. Real Results."
              text="A curated look at diesel engine repair, welding fabrication, mobile truck service, diagnostics, and heavy-duty repair work completed by Elevated Auto & Diesel Repair."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <motion.article key={image.src} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={image.src} alt={`${image.title} in Larimer County, CO`} className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{image.category}</p>
                    <h3 className="text-xl font-bold text-slate-950">{image.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{image.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Services"
              title="Complete Mobile Auto, Diesel & Specialty Repair"
              text="From routine maintenance to complex repairs, Elevated Auto & Diesel Repair provides high-quality service with the convenience of mobile support."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.03 }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">About</p>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">A Higher Standard for Auto Repair in Larimer County.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Elevated Auto & Diesel Repair was built for drivers who want more than a basic repair experience. We combine skilled diagnostics, clean workmanship, and mobile convenience to make vehicle repair simpler, faster, and more professional.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need engine repair, diesel support, RV service, transmission work, hydraulic cylinder repair, welding fabrication, or light autobody repair, our team brings dependable service directly to you.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton>Schedule Service</CTAButton>
                <a href="#faq" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">View FAQ</a>
              </div>
            </div>
            <div className="grid gap-5">
              {[
                [Clock, "Convenient Mobile Service", "We save customers time by bringing repair support to homes, workplaces, job sites, and roadside locations."],
                [ShieldCheck, "Trust-First Workmanship", "Transparent communication, reliable diagnostics, and high-quality repairs from start to finish."],
                [Star, "Proven Local Reputation", "Backed by 70+ excellent Google reviews and trusted by drivers across Larimer County."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <Icon className="mb-4 h-7 w-7 text-slate-950" />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Service Areas"
              title="Serving Larimer County & Surrounding Communities"
              text="Premium mobile auto repair, diesel repair, RV repair, roadside assistance, and specialty repair services across Northern Colorado."
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <MapPin className="h-5 w-5 text-slate-950" />
                  <span className="font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-24 text-white md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Why Customers Choose Us</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Mobile Convenience. Professional Results. No Shop Hassle.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              We help customers avoid towing delays, long shop waits, and unnecessary stress by delivering dependable repair service wherever it is needed most.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {["Premium mobile repair", "Gas, diesel & RV expertise", "Specialty repair capability"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <CheckCircle className="mx-auto mb-4 h-7 w-7" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 px-5 py-24 md:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" text="Answers to common questions about mobile auto repair and diesel service in Larimer County." />
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-950">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-slate-950 p-8 text-white md:grid-cols-2 md:p-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Request Service</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Need Reliable, Professional Repair Without the Hassle?</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Contact Elevated Auto & Diesel Repair for mobile auto repair, diesel repair, RV repair, transmission service, hydraulic cylinder repair, welding fabrication, light autobody repair, or roadside assistance in Larimer County.
              </p>
              <div className="mt-8 space-y-4 text-slate-300">
                <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> 970-966-0473</p>
                <p className="flex items-center gap-3"><Mail className="h-5 w-5" /> elevateddieselrepair@gmail.com</p>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> 1815 Co Rd 13C, Loveland, CO 80537</p>
              </div>
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps?q=1815+Co+Rd+13C+Loveland+CO+80537&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-slate-950">
              <h3 className="text-2xl font-bold">Service Request</h3>
              <p className="mt-2 text-slate-600">Complete the form below, call directly, or use the booking link to request mobile service.</p>
              {submitted ? (
                <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-6 text-center">
                  <h4 className="text-xl font-bold text-green-700">Request Received</h4>
                  <p className="mt-2 text-green-600">Thanks! We’ll contact you shortly.</p>
                </div>
              ) : (
              <form 
                action="https://formspree.io/f/mjgjledd"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="mt-6 space-y-4">
                <input name="name" className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Name" />
                <input name="phone" className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Phone" />
                <input name="service" className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Vehicle / Service Needed" />
                <textarea name="message" className="min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Tell us what is going on" />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <button type="submit" className="w-full rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">Submit Request</button>
              </form>
              )}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href="tel:+19709660473" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Elevated Auto & Diesel Repair. All rights reserved.</p>
          <p>Mobile auto repair, diesel repair, RV repair, roadside assistance, welding, hydraulics, and light autobody repair in Larimer County, CO.</p>
        </div>
      </footer>
    </div>
  );
}
