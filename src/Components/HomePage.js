import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import {
  HiArrowRight,
  HiGift,
  HiHome,
  HiSparkles,
  HiTrendingUp,
  HiTag,
  HiShieldCheck,
  HiCube,
  HiLightningBolt,
  HiStar,
  HiUsers,
} from 'react-icons/hi'

// Sample unsplash images for more commercial, lively UI
const heroImg =
  "/images/img4.png";
const snapshotImg =
  "/images/img4.png";
const offerImages = [
  "/images/img5.png", // Gift Items
  "/images/img6.png", // Household
  "/images/img7.png", // Seasonal
  "/images/img8.png", // Bulk
  "/images/img9.png", // Pricing
];

const testimonialImages = [
  "https://randomuser.me/api/portraits/women/47.jpg",
  "https://randomuser.me/api/portraits/men/35.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
];

const offers = [
  {
    icon: HiGift,
    title: 'Gift Items',
    desc: 'Curated giftware suitable for all occasions and retail segments.',
    img: offerImages[0]
  },
  {
    icon: HiHome,
    title: 'Household Essentials',
    desc: 'Everyday products that move fast off retail shelves.',
    img: offerImages[1]
  },
  {
    icon: HiSparkles,
    title: 'Seasonal Products',
    desc: 'Timely collections aligned with UK seasonal demand.',
    img: offerImages[2]
  },
  {
    icon: HiCube,
    title: 'Bulk Purchasing',
    desc: 'Flexible volume ordering to suit your stock requirements.',
    img: offerImages[3]
  },
  {
    icon: HiTag,
    title: 'Competitive Pricing',
    desc: 'Wholesale prices designed to protect your margin.',
    img: offerImages[4]
  },
]

const whyUs = [
  { icon: HiShieldCheck, title: 'Reliable UK Supplier', desc: 'Registered company operating from London with transparent terms.', img:"/images/img10.png" },
  { icon: HiCube, title: 'Consistent Stock', desc: 'Well-managed inventory ensures you never face supply gaps.',img: "/images/img11.png" },
  { icon: HiLightningBolt, title: 'Fast Processing', desc: 'Orders processed promptly so your business keeps moving.',img: "/images/img12.png" },
  { icon: HiTag, title: 'Strong Pricing', desc: 'Margins that work for your business model, every time.', img:"/images/img13.png" },
  { icon: HiUsers, title: 'Customer Focused', desc: 'We build long-term relationships, not just one-off transactions.', img:"/images/img14.png" }
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Independent Retailer, Bristol',
    quote: "Practicool has been our go-to wholesale supplier for over a year. The pricing is excellent and the products always sell well.",
    stars: 5,
    img: testimonialImages[0],
  },
  {
    name: 'James T.',
    role: 'Gift Shop Owner, Manchester',
    quote: "Consistent stock availability and fast turnaround. Exactly what a busy retailer needs from a wholesale partner.",
    stars: 5,
    img: testimonialImages[1],
  },
  {
    name: 'Priya K.',
    role: 'Online Retailer, Birmingham',
    quote: "The seasonal ranges are particularly strong. Their gift items have become some of our best-selling lines.",
    stars: 5,
    img: testimonialImages[2],
  },
]

const marqueeItems = [
  'Trusted by UK Retailers',
  'Bulk Supply Available',
  'Fast Delivery',
  'Competitive Pricing',
  'Quality Products',
  'London Based',
  'Seasonal Collections',
]

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 } }
};

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
        {/* Hero Background Image */}
        <img
          src={heroImg}
          alt="Giftware and household products for UK wholesale"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-35 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-gold/10 pointer-events-none" style={{ zIndex: 1 }} />
        {/* Decorative grid as before, above overlay */}
        <div className="absolute inset-0 opacity-[0.09]" style={{zIndex: 2,
            backgroundImage:
              `repeating-linear-gradient(0deg, #C9A447 0, #C9A447 1px, transparent 0, transparent 50%),
               repeating-linear-gradient(90deg, #C9A447 0, #C9A447 1px, transparent 0, transparent 50%)`,
            backgroundSize: '60px 60px',
        }}/>
        {/* Radial glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] rounded-full bg-gold/15 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-16 w-full z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.22em] uppercase font-medium">
                Wholesale Supplier · London, UK
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-black leading-[1.05] mb-6 drop-shadow-2xl"
            >
              Wholesale{' '}
              <span className="text-black italic">Giftware</span>
              <br />
              &amp; Household
              <br />
              <span className="text-black">Essentials</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-body text-black text-xl md:text-2xl mb-3 font-medium drop-shadow"
            >
              Supplying Retailers Across the UK
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-body text-black text-sm tracking-wider mb-10"
            >
              Reliable Supply &nbsp;·&nbsp; Competitive Pricing &nbsp;·&nbsp; Practical Solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {/* Improved Button: Explore Products */}
              <Link
                to="/products"
                className="relative flex items-center gap-2 bg-gradient-to-br from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 hover:scale-[1.045] transition-all duration-200 text-black font-bold text-lg px-8 py-3 rounded-2xl shadow-xl group ring-2 ring-gold/30 focus-visible:ring-4 focus-visible:ring-gold/70"
                style={{ minWidth: '190px' }}
              >
                <span className="bg-clip-text text-black transition drop-shadow-sm">
                  Explore Products
                </span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/90 group-hover:bg-gold/80 shadow transition">
                  <HiArrowRight className="text-gold group-hover:text-black text-xl transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 rounded-2xl bg-gold/10 opacity-0 group-hover:opacity-20 transition pointer-events-none" />
              </Link>
              {/* Improved Button: Contact Us */}
              <Link
                to="/contact"
                className="relative flex items-center gap-2 px-8 py-3 rounded-2xl border-2 border-gold text-black font-semibold text-lg hover:bg-gold/10 hover:border-gold/70 transition-all duration-200 shadow group focus-visible:ring-2 focus-visible:ring-gold/40"
                style={{ minWidth: '170px' }}
              >
                <span className="bg-clip-text text-black transition drop-shadow-sm">
                  Contact Us
                </span>
                <span className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-20 transition pointer-events-none" />
              </Link>
         
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="mt-20 flex flex-wrap gap-8 md:gap-16"
          >
            {[
              { value: '500+', label: 'Products Available', icon: HiCube },
              { value: '200+', label: 'Retailers Supplied', icon: HiUsers },
              { value: 'UK-Wide', label: 'Distribution', icon: HiTag },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="bg-gold/15 rounded-full p-2">
                  <stat.icon className="text-gold" size={26} />
                </span>
                <div>
                  <div className="font-display text-gold text-3xl font-semibold">{stat.value}</div>
                  <div className="font-body text-black text-xs tracking-wider mt-0.5 uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>


      {/* ── About Snapshot (Image + Info Split) ──────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-lg shadow-lg relative hidden md:block"
            >
              <img
                src={snapshotImg}
                alt="Wholesale stock in London warehouse"
                className="object-cover w-full h-[350px] grayscale-0 hover:grayscale-0 transition duration-300"
                loading="lazy"
              />
              <div className="absolute left-0 bottom-0 bg-gradient-to-r from-cream/80 to-transparent w-full h-24" />
            </motion.div>
            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="section-tag">
                <span className="w-4 h-px bg-gold" />
                <span className="text-black">About Practicool</span>
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-black leading-tight mb-6">
                A Wholesale Partner You Can Rely On
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-black text-lg leading-relaxed mb-6">
                London-based wholesale supplier helping retailers access quality, affordable,<br/>
                trending products — consistently and competitively.&nbsp;
                <span className="text-black font-body">Practicool Limited</span> is a
                registered UK company specialising in giftware and household
                essentials built for the modern retail market.
              </p>
              <Link to="/about" className=" flex justify-start gap-2 items-center btn-outline text-sm group">
                <span className="text-black">Learn More</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 text-black" />
              </Link>
            </motion.div>
          </div>
          {/* Quick facts/benefits cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { icon: HiShieldCheck, label: 'UK Registered Company' },
              { icon: HiTrendingUp, label: 'Growing Product Range' },
              { icon: HiLightningBolt, label: 'Fast Order Processing' },
              { icon: HiUsers, label: 'Retailer Focused' },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="bg-white rounded-sm p-5 border border-cream-dark shadow-sm card-hover flex flex-col items-center text-center"
              >
                <item.icon className="text-gold mb-3" size={28} />
                <p className="font-body font-medium text-black text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What We Offer w/ Images ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">What We Offer</span>
              <span className="w-4 h-px bg-gold" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black">
              Everything Your Store Needs
            </h2>
            <p className="text-black font-body mt-3 max-w-xl mx-auto">
              A comprehensive wholesale range designed to keep your shelves stocked and your customers satisfied.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.14 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {offers.map((item, i) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-cream rounded-lg border border-cream-dark card-hover cursor-pointer relative shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ minHeight: 320 }}
              >
                <div className="relative h-36 w-full overflow-hidden rounded-t-lg mb-3 group-hover:brightness-105 group-hover:scale-[1.02] transition">
                  <img
                    src={item.img}
                    alt={item.title + " - sample product"}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/60 to-transparent" />
                </div>
                <div className="flex flex-col items-start p-5 pt-0 pb-1">
                  <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center mb-4 group-hover:bg-gold/80 shadow">
                    <item.icon className="text-gold group-hover:text-black transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="font-display text-lg text-black font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-black text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Info Marquee ─────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-navy to-gold/10 py-5 overflow-hidden">
        <Marquee speed={45} gradient={false} className="marquee-container">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center mx-6 opacity-80 hover:opacity-100 transition">
              <span className="font-display text-black text-sm italic">{item}</span>
              <span className="ml-6 w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ── Why Choose Us w/ Images ─────────────────────────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #C9A447 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-14"
          >
            <span className="section-tag">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">Why Practicool</span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black max-w-xl">
              The Wholesale Advantage You Deserve
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyUs.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group border border-white/8 rounded-xl p-0 bg-white/3 hover:bg-gold/5 transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-36 overflow-hidden rounded-t-xl">
                  <img
                    src={item.img}
                    alt={item.title + " - advantage"}
                    className="w-full h-full object-cover group-hover:brightness-110 transition duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <item.icon className="text-gold mb-4" size={28} />
                  <h3 className="font-display text-black text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-black text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials w/ Avatars ─────────────────────────── */}
      <section className="py-20 bg-cream relative">
        <div className="pointer-events-none absolute top-0 right-16 w-44 h-44 bg-gold/10 rounded-full blur-[64px]" />
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">Retailer Feedback</span>
              <span className="w-4 h-px bg-gold" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black">
              What Retailers Say
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.16 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="bg-cream-light rounded-2xl p-8 border border-cream-dark card-hover shadow-md hover:shadow-lg flex flex-col items-center text-center transition-all duration-300"
              >
                <img
                  src={t.img}
                  alt={t.name + " avatar"}
                  className="w-16 h-16 rounded-full mb-4 border-4 border-gold/40 object-cover shadow-md"
                />
                <div className="flex gap-1 mb-3 justify-center">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <HiStar key={i} className="text-gold" size={16} />
                  ))}
                </div>
                <p className="font-body text-black text-base leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-body font-semibold text-black text-sm">{t.name}</p>
                  <p className="font-body text-black text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Band w/ Feature Visual ──────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-navy-deep via-navy/95 to-navy/80 relative overflow-hidden flex items-center">
        {/* Gold glow + layered accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-gold/20 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-gold/10 blur-3xl rounded-full opacity-60" />
        {/* Card effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.23 }}
          transition={{ duration: 0.85, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-3xl px-6 md:px-12 py-14 border border-cream-dark/60"
        >
          {/* Floating accent visual */}
          {/* <motion.img
            src={offerImages[0]}
            alt="Giftware highlight"
            initial={{ opacity: 0, scale: 1.08, rotate: 5, x: "-40%" }}
            whileInView={{ opacity: 0.12, scale: 1, x: "-50%", rotate: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, delay: 0.2, type: "spring", stiffness: 32 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-[320px] md:w-[440px] rounded-3xl object-cover z-0 pointer-events-none drop-shadow-xl"
          /> */}
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-3">
              Ready to Start Ordering?
            </h2>
            <p className="font-body text-navy/90 text-lg mb-9 md:mb-10">
              Get in touch today for a tailored wholesale quote and discover our full product range.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary group text-lg px-8 py-3 shadow-lg flex items-center justify-center gap-2 font-bold tracking-wide transition-all duration-200"
                style={{ minWidth: "200px" }}
              >
                <span className="text-black">Request a Quote</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 text-gold" />
              </Link>
              <Link
                to="/products"
                className="btn-outline border-gold/60 text-lg px-8 py-3 shadow flex items-center justify-center gap-2 font-bold tracking-wide transition-all duration-200"
                style={{ minWidth: "200px" }}
              >
                <span className="text-navy">View Products</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </>
  )
}