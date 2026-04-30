import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Wrench,
  Truck,
  ShieldCheck,
  Star,
  Clock,
  Mail,
  ArrowRight,
  CreditCard,
  Image,
  HelpCircle,
  Home,
} from "lucide-react";

const services = [
  { title: "Air Conditioning Repair", description: "Professional AC diagnostics and repair to keep your vehicle comfortable in every season." },
  { title: "Engine Repair", description: "Accurate diagnostics and expert repair for gas and diesel engines, from warning lights to complex performance issues." },
  { title: "General Repair & Maintenance", description: "Preventative maintenance, inspections, tune-ups, brakes, fluids, and routine vehicle care." },
  { title: "RV Repair", description: "Mobile repair and maintenance support for RVs and larger vehicles throughout Larimer and Weld County." },
  { title: "Transmission Services", description: "Transmission diagnostics, service, maintenance, and repair performed with precision and care." },
  { title: "Mobile Repair & Roadside Assistance", description: "Convenient mobile mechanic services brought directly to your home, workplace, or roadside location." },
  { title: "Hydraulic Cylinder Repairs", description: "Repair and service for hydraulic cylinders used in trucks, equipment, trailers, and heavy-duty applications." },
  { title: "Welding Fabrication", description: "Custom welding, fabrication, and repair solutions for vehicles, trailers, equipment, and metal components." },
  { title: "Light Autobody Repairs", description: "Minor body repair support for dents, panels, cosmetic damage, and light exterior restoration needs." },
];

const serviceAreas = ["Fort Collins", "Loveland", "Windsor", "Timnath", "Berthoud", "Wellington", "Laporte", "Johnstown", "Greeley", "Milliken", "Larimer County", "Weld County"];

const googleReviewsUrl = "https://www.google.com/search?q=evelvated+dieserl+reviews&rlz=1C5CHFA_enUS1021US1038&oq=evelvated+dieserl+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMg0IAhAAGIYDGIAEGIoFMg0IAxAAGIYDGIAEGIoFMg0IBBAAGIYDGIAEGIoFMgcIBRAAGO8FMgcIBhAAGO8FMgoIBxAAGIAEGKIEMgoICBAAGIAEGKIE0gEJNTY1NGowajE1qAIIsAIB8QUqll-R0_j0Nw&sourceid=chrome&ie=UTF-8#lrd=0x876953b5ed9bed75:0xa9d645c1dc45f679,1,,,,";
const financingUrl = "https://koalafi.com";
const autoRepairScoreUrl = "https://autorepairscore.com/co/loveland/elevated-diesel-repair-llc-loveland-colorado";

const reviewPlatforms = [
  { name: "Google Reviews", description: "View verified customer feedback directly on Google.", url: googleReviewsUrl, cta: "View Google Reviews" },
  { name: "AutoRepairScore", description: "See additional reputation signals on an independent auto repair review platform.", url: autoRepairScoreUrl, cta: "View AutoRepairScore Profile" },
];

const fiveStarReviews = [
  { name: "John D.", text: "Fast, honest, and reliable. Came out same day and got my truck running again. Highly recommend." },
  { name: "Sarah M.", text: "Super professional and way more convenient than going to a shop. Great communication and fair pricing." },
  { name: "Mike R.", text: "Top quality work. You can tell they know what they're doing. Will definitely use again." },
];

const galleryImages = [
  { src: "/images/diesel-engine-rebuild-loveland-co.webp", title: "Diesel Engine Rebuild", caption: "Precision engine work for heavy-duty diesel performance.", category: "Engine Repair" },
  { src: "/images/welding-fabrication-commercial-truck-loveland-co.webp", title: "Welding & Fabrication", caption: "On-site welding repair for commercial trucks and trailers.", category: "Fabrication" },
  { src: "/images/heavy-duty-mobile-truck-service-larimer-county.webp", title: "Heavy-Duty Truck Service", caption: "Mobile repair capability for work trucks and fleet vehicles.", category: "Mobile Repair" },
  { src: "/images/trailer-frame-repair-welding-loveland-co.webp", title: "Frame & Trailer Repair", caption: "Detailed inspection and repair of structural problem areas.", category: "Welding" },
  { src: "/images/diesel-engine-assembly-larimer-county.webp", title: "Engine Assembly Work", caption: "Clean, professional mechanical repair and assembly support.", category: "Diesel Repair" },
  { src: "/images/mechanical-diagnostics-diesel-repair-loveland-co.webp", title: "Mechanical Diagnostics", caption: "Hands-on diagnostics and repair for complex vehicle systems.", category: "Diagnostics" },
];

const faqs = [
  { question: "Do you offer mobile auto repair?", answer: "Yes. Elevated Auto & Diesel Repair provides mobile auto and diesel repair throughout Larimer and Weld County, bringing professional service directly to your home, workplace, job site, or roadside location." },
  { question: "Do you work on diesel vehicles?", answer: "Yes. We service both gas and diesel vehicles, including diagnostics, engine repair, maintenance, and related mechanical services." },
  { question: "Do you repair RVs?", answer: "Yes. We offer mobile RV repair and maintenance services for customers across Northern Colorado." },
  { question: "Can you help with roadside assistance?", answer: "Yes. We provide roadside support for common mechanical issues when service can be safely completed on-site." },
  { question: "What areas do you serve?", answer: "We proudly serve Loveland, Fort Collins, Greeley, Milliken, Larimer County, Weld County, and surrounding Northern Colorado communities." },
];

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "services", label: "Services", icon: Wrench },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "financing", label: "Financing", icon: CreditCard },
  { id: "about", label: "About", icon: ShieldCheck },
  { id: "areas", label: "Service Areas", icon: MapPin },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "contact", label: "Contact", icon: Phone },
];

const shell = {
  page: "min-h-screen overflow-x-hidden bg-[#03050d] pb-24 text-white md:pb-0",
  panel: "overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#050814] text-white shadow-2xl shadow-black/50",
  card: "rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.035] p-6 shadow-xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-[#d6b25e]/40 hover:bg-white/[0.12]",
};

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b25e]">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
        <span className="bg-gradient-to-r from-white via-slate-100 to-[#d6b25e] bg-clip-text text-transparent">{title}</span>
      </h2>
      {text && <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg md:leading-8">{text}</p>}
    </div>
  );
}

function PageButton({ page, activePage, setActivePage }) {
  const Icon = page.icon;
  const active = activePage === page.id;
  return (
    <button
      onClick={() => setActivePage(page.id)}
      className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold shadow-sm transition ${
        active
          ? "bg-gradient-to-r from-white to-[#f3dfac] text-slate-950 shadow-xl shadow-black/20"
          : "border border-white/10 bg-white/[0.06] text-slate-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1] hover:shadow-lg"
      }`}
    >
      <span className="flex items-center gap-3"><Icon className="h-4 w-4" /> {page.label}</span>
      <ArrowRight className={`h-4 w-4 transition ${active ? "text-slate-950" : "text-slate-400 group-hover:translate-x-1 group-hover:text-white"}`} />
    </button>
  );
}

function CTAButton({ children, onClick, variant = "primary" }) {
  const classes = variant === "primary"
    ? "bg-gradient-to-r from-white to-[#f3dfac] text-slate-950 hover:from-[#f8edca] hover:to-white shadow-xl shadow-black/20"
    : "border border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12]";
  return (
    <button onClick={onClick} className={`inline-flex min-w-0 items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-semibold transition sm:px-6 ${classes}`}>
      {children}<ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
}

export default function ElevatedAutoDieselRepair() {
  const [activePage, setActivePage] = React.useState("home");
  const [submitted, setSubmitted] = React.useState(false);
  const [activeReview, setActiveReview] = React.useState(0);

  React.useEffect(() => {
    if (!fiveStarReviews.length) return;
    const timer = setInterval(() => setActiveReview((current) => (current + 1) % fiveStarReviews.length), 3000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "reviews": return <ReviewsPage activeReview={activeReview} setActiveReview={setActiveReview} />;
      case "services": return <ServicesPage setActivePage={setActivePage} />;
      case "gallery": return <GalleryPage />;
      case "financing": return <FinancingPage />;
      case "about": return <AboutPage setActivePage={setActivePage} />;
      case "areas": return <AreasPage />;
      case "faq": return <FAQPage />;
      case "contact": return <ContactPage submitted={submitted} setSubmitted={setSubmitted} />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className={shell.page}>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_40%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03050d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <button onClick={() => setActivePage("home")} className="flex min-w-0 items-center gap-3">
            <img src="/images/elevated-auto-diesel-logo-phone.png" alt="Elevated Auto & Diesel Repair logo" className="h-10 w-auto max-w-[190px] rounded-xl bg-white object-contain shadow-lg sm:h-12 sm:max-w-[260px] md:h-14 md:max-w-none" />
          </button>
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <a href="tel:+19709660473" className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-950 shadow-sm">Call</a>
            <button onClick={() => setActivePage("contact")} className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur">Book</button>
          </div>
          <nav className="hidden items-center gap-2 text-sm font-medium text-slate-300 md:flex">
            {pages.slice(0, 6).map((page) => (
              <button key={page.id} onClick={() => setActivePage(page.id)} className={`rounded-2xl px-4 py-2.5 transition ${activePage === page.id ? "bg-gradient-to-r from-white to-[#f3dfac] text-slate-950 shadow-lg" : "hover:bg-white/10 hover:text-white"}`}>{page.label}</button>
            ))}
            <a href="tel:+19709660473" className="rounded-2xl border border-white/20 px-5 py-2.5 text-white hover:bg-white/10">Call Now</a>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[280px_1fr] md:px-8 md:py-8">
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b25e]">Navigate</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {pages.map((page) => <PageButton key={page.id} page={page} activePage={activePage} setActivePage={setActivePage} />)}
            </div>
          </div>
        </aside>

        <motion.div key={activePage} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          {renderPage()}
        </motion.div>
      </main>

      <footer className="relative border-t border-white/10 bg-[#03050d] px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Elevated Auto & Diesel Repair. All rights reserved.</p>
          <p>Mobile auto repair, diesel repair, RV repair, roadside assistance, welding, hydraulics, and light autobody repair in Larimer & Weld County, CO.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#03050d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a href="tel:+19709660473" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-white to-[#f3dfac] px-4 py-3 text-sm font-semibold text-slate-950"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
          <button onClick={() => setActivePage("contact")} className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white">Book Service</button>
        </div>
      </div>
    </div>
  );
}

function PageShell({ children, dark = false }) {
  return <section className={dark ? "overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 text-white shadow-2xl shadow-black/40" : shell.panel}>{children}</section>;
}

function HomePage({ setActivePage }) {
  return (
    <PageShell dark>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.25),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
        <div className="relative grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <img src="/images/elevated-auto-diesel-logo-phone.png" alt="Elevated Auto & Diesel Repair logo" className="mb-5 block w-full max-w-[320px] rounded-2xl bg-white p-2 shadow-2xl sm:max-w-md sm:rounded-3xl sm:p-4" />
            <div className="flex flex-wrap gap-2">
              <p className="rounded-full border border-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 sm:px-4 sm:text-sm">Premium Mobile Auto & Diesel Repair</p>
              <p className="rounded-full border border-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 sm:px-4 sm:text-sm">Larimer & Weld County</p>
              <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-white/20 sm:px-4 sm:text-xs"><ShieldCheck className="h-4 w-4" /> Financing Available</a>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#d6b25e] bg-clip-text text-transparent">Premium Auto, Diesel & Mobile Repair</span>
              <span className="block text-white">Built Around Your Schedule.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Professional mobile auto repair, diesel service, RV repair, roadside assistance, hydraulic cylinder repair, welding fabrication, and light autobody repair throughout Loveland, Larimer County, Weld County, and Northern Colorado.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:flex xl:flex-wrap">
              <a href="tel:+19709660473" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-white to-[#f3dfac] px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"><Phone className="mr-2 h-4 w-4" /> Call 970-966-0473</a>
              <CTAButton onClick={() => setActivePage("contact")}>Request Service</CTAButton>
              <CTAButton onClick={() => setActivePage("reviews")} variant="secondary">View Reviews</CTAButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#d6b25e]/25 bg-gradient-to-br from-white/[0.14] to-white/[0.04] p-3 shadow-2xl shadow-black/50 sm:p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#d6b25e]/25 bg-gradient-to-br from-slate-700 via-slate-900 to-black shadow-2xl">
              <img src="/images/tow-truck.png" alt="Mobile diesel service truck" className="h-56 w-full object-cover transition duration-700 hover:scale-105 sm:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="mb-2 w-fit rounded-full border border-[#d6b25e]/40 bg-[#d6b25e]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f7e7b0] backdrop-blur">Mobile Service Available</p>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Heavy-Duty Help, Wherever You Are</h3>
                <p className="mt-1 text-sm text-slate-200">Serving Larimer & Weld County communities.</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <TrustCard icon={Star} text="70+ excellent Google reviews" />
              <TrustCard icon={Truck} text="Mobile service available" />
              <TrustCard icon={CreditCard} text="Financing available through Koalafi" />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function TrustCard({ icon: Icon, text }) {
  return <div className="rounded-2xl border border-white/10 bg-black/25 p-4 shadow-inner shadow-white/5"><Icon className="mb-2 h-5 w-5 text-[#d6b25e]" /><p className="text-sm text-slate-200">{text}</p></div>;
}

function ReviewsPage({ activeReview, setActiveReview }) {
  return (
    <PageShell>
      <div className="p-6 text-center md:p-12">
        <SectionHeader eyebrow="Customer Reputation" title="Trusted by 70+ 5-Star Reviews on Google" text="Customers across Loveland, Larimer County, and Weld County trust Elevated Auto & Diesel Repair for professional mobile repair, diesel service, welding, roadside support, and honest communication." />
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard icon={Star} value="70+" label="Google Reviews" />
          <StatCard icon={ShieldCheck} value="Verified" label="Public Profiles" />
          <StatCard icon={Truck} value="Local" label="Northern Colorado" />
        </div>
        {fiveStarReviews.length > 0 && (
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.035] p-6 shadow-sm md:p-8">
            <div className="mb-5 flex justify-center gap-1 text-[#d6b25e]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-6 w-6 fill-current" />)}</div>
            <motion.div key={activeReview} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <p className="text-lg font-medium leading-8 text-slate-100 md:text-xl md:leading-9">“{fiveStarReviews[activeReview].text}”</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{fiveStarReviews[activeReview].name}</p>
            </motion.div>
            <div className="mt-6 flex justify-center gap-2">{fiveStarReviews.map((review, index) => <button key={`${review.name}-${index}`} type="button" onClick={() => setActiveReview(index)} aria-label={`View review ${index + 1}`} className={`h-2.5 rounded-full transition-all ${index === activeReview ? "w-8 bg-white" : "w-2.5 bg-white/30"}`} />)}</div>
          </div>
        )}
        <div className="mt-8 grid gap-4 md:grid-cols-2">{reviewPlatforms.map((platform) => <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.035] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white/[0.1]"><div className="flex items-start justify-between gap-4"><div><p className="text-xl font-bold text-white">{platform.name}</p><p className="mt-2 leading-7 text-slate-300">{platform.description}</p></div><ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-white" /></div><p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b25e]">{platform.cta}</p></a>)}</div>
      </div>
    </PageShell>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.035] p-6"><Icon className="mx-auto mb-3 h-7 w-7 text-[#d6b25e]" /><p className="text-3xl font-bold text-white">{value}</p><p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</p></div>;
}

function ServicesPage({ setActivePage }) {
  return (
    <PageShell>
      <div className="p-6 md:p-12">
        <SectionHeader eyebrow="Services" title="Complete Mobile Auto, Diesel & Specialty Repair" text="From routine maintenance to complex repairs, Elevated Auto & Diesel Repair provides high-quality service with the convenience of mobile support." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map((service) => <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className={shell.card}><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950"><Wrench className="h-5 w-5" /></div><h3 className="text-xl font-bold text-white">{service.title}</h3><p className="mt-3 leading-7 text-slate-300">{service.description}</p></motion.div>)}</div>
        <div className="mt-8 text-center"><CTAButton onClick={() => setActivePage("contact")}>Request Service</CTAButton></div>
      </div>
    </PageShell>
  );
}

function GalleryPage() {
  return (
    <PageShell>
      <div className="p-6 md:p-12">
        <SectionHeader eyebrow="Gallery" title="Real Repairs. Real Results." text="A curated look at diesel engine repair, welding fabrication, mobile truck service, diagnostics, and heavy-duty repair work completed by Elevated Auto & Diesel Repair." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{galleryImages.map((image) => <motion.article key={image.src} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-sm transition hover:-translate-y-1 hover:bg-white/[0.1] hover:shadow-xl"><img src={image.src} alt={`${image.title} in Larimer County, CO`} className="h-72 w-full object-cover" /><div className="p-6"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b25e]">{image.category}</p><h3 className="text-xl font-bold text-white">{image.title}</h3><p className="mt-3 leading-7 text-slate-300">{image.caption}</p></div></motion.article>)}</div>
      </div>
    </PageShell>
  );
}

function FinancingPage() {
  return (
    <PageShell dark>
      <div className="grid items-center gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b25e]">Flexible Payment Options</p><h2 className="text-3xl font-bold tracking-tight md:text-5xl">Financing Available Through Koalafi</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">Unexpected repairs don’t have to delay getting back on the road. Customers can apply for financing through Koalafi and move forward with necessary repairs while spreading payments over time.</p></div>
        <div className="rounded-3xl border border-[#d6b25e]/30 bg-gradient-to-br from-white to-[#f3dfac] p-6 text-slate-950 shadow-2xl shadow-black/40"><CreditCard className="mb-4 h-8 w-8" /><h3 className="text-2xl font-bold">Repair Now. Pay Over Time.</h3><p className="mt-3 leading-7 text-slate-600">Use financing for larger repairs, diesel service, RV work, welding fabrication, and unexpected breakdowns.</p><a href={financingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Apply for Financing <ArrowRight className="ml-2 h-4 w-4" /></a></div>
      </div>
    </PageShell>
  );
}

function AboutPage({ setActivePage }) {
  return (
    <PageShell>
      <div className="grid items-center gap-12 p-6 md:grid-cols-2 md:p-12">
        <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b25e]">About</p><h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">A Higher Standard for Auto Repair in Larimer County.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Elevated Auto & Diesel Repair was built for drivers who want more than a basic repair experience. We combine skilled diagnostics, clean workmanship, and mobile convenience to make vehicle repair simpler, faster, and more professional.</p><p className="mt-5 text-lg leading-8 text-slate-300">Whether you need engine repair, diesel support, RV service, transmission work, hydraulic cylinder repair, welding fabrication, or light autobody repair, our team brings dependable service directly to you.</p><div className="mt-8"><CTAButton onClick={() => setActivePage("contact")}>Schedule Service</CTAButton></div></div>
        <div className="grid gap-5">{[[Clock, "Convenient Mobile Service", "We save customers time by bringing repair support to homes, workplaces, job sites, and roadside locations."], [ShieldCheck, "Trust-First Workmanship", "Transparent communication, reliable diagnostics, and high-quality repairs from start to finish."], [Star, "Proven Local Reputation", "Backed by 70+ excellent Google reviews and trusted by drivers across Larimer and Weld County."]].map(([Icon, title, text]) => <div key={title} className={shell.card}><Icon className="mb-4 h-7 w-7 text-[#d6b25e]" /><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}</div>
      </div>
    </PageShell>
  );
}

function AreasPage() {
  return (
    <PageShell>
      <div className="p-6 md:p-12">
        <SectionHeader eyebrow="Service Areas" title="Serving Larimer & Weld County Communities" text="Premium mobile auto repair, diesel repair, RV repair, roadside assistance, and specialty repair services across Larimer County, Weld County, and Northern Colorado." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{serviceAreas.map((area) => <div key={area} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-sm"><MapPin className="h-5 w-5 text-[#d6b25e]" /><span className="font-semibold text-white">{area}</span></div>)}</div>
      </div>
    </PageShell>
  );
}

function FAQPage() {
  return (
    <PageShell>
      <div className="p-6 md:p-12">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" text="Answers to common questions about mobile auto repair and diesel service in Larimer and Weld County." />
        <div className="space-y-4">{faqs.map((item) => <div key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-sm"><h3 className="text-xl font-bold text-white">{item.question}</h3><p className="mt-3 leading-7 text-slate-300">{item.answer}</p></div>)}</div>
      </div>
    </PageShell>
  );
}

function ContactPage({ submitted, setSubmitted }) {
  return (
    <PageShell dark>
      <div className="grid gap-8 p-6 md:grid-cols-2 md:p-12">
        <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b25e]">Request Service</p><h2 className="text-4xl font-bold tracking-tight md:text-5xl">Need Reliable, Professional Repair Without the Hassle?</h2><p className="mt-6 text-lg leading-8 text-slate-300">Contact Elevated Auto & Diesel Repair for mobile auto repair, diesel repair, RV repair, transmission service, hydraulic cylinder repair, welding fabrication, light autobody repair, or roadside assistance in Larimer and Weld County.</p><div className="mt-8 space-y-4 text-slate-300"><p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#d6b25e]" /> 970-966-0473</p><p className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#d6b25e]" /> elevateddieselrepair@gmail.com</p><p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#d6b25e]" /> 1815 Co Rd 13C, Loveland, CO 80537</p></div><div className="mt-6 overflow-hidden rounded-3xl border border-white/10"><iframe title="Google Map Location" src="https://www.google.com/maps?q=1815+Co+Rd+13C+Loveland+CO+80537&output=embed" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div></div>
        <div className="rounded-3xl bg-white p-6 text-slate-950"><h3 className="text-2xl font-bold">Service Request</h3><p className="mt-2 text-slate-600">Complete the form below, call directly, or request mobile service.</p>{submitted ? <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center"><h4 className="text-xl font-bold text-green-700">Request Received</h4><p className="mt-2 text-green-600">Thanks! We’ll contact you shortly.</p></div> : <form action="https://formspree.io/f/mjgjledd" method="POST" onSubmit={() => setSubmitted(true)} className="mt-6 space-y-4"><input name="name" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950" placeholder="Name" /><input name="phone" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950" placeholder="Phone" /><input name="service" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950" placeholder="Vehicle / Service Needed" /><textarea name="message" className="min-h-32 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950" placeholder="Tell us what is going on" /><input type="text" name="_gotcha" style={{ display: "none" }} /><button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-slate-950 to-slate-800 px-6 py-3 font-semibold text-white shadow-lg transition hover:from-slate-800 hover:to-slate-950">Submit Request</button></form>}<div className="mt-5 grid gap-3 sm:grid-cols-2"><a href="tel:+19709660473" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"><Phone className="mr-2 h-4 w-4" /> Call Now</a><a href="sms:+19709660473" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-slate-950 to-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:from-slate-800 hover:to-slate-950">Text Us</a></div></div>
      </div>
    </PageShell>
  );
}
