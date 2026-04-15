import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  HiShieldCheck,
  HiTag,
  HiLightningBolt,
  HiUsers,
  HiArrowRight,
  HiGlobe,
  HiOfficeBuilding,
} from 'react-icons/hi'

const values = [
  {
    icon: HiShieldCheck,
    title: 'Reliability',
    desc: 'We maintain consistent stock levels and dependable order fulfilment, so UK retailers can count on us every time.',
  },
  {
    icon: HiTag,
    title: 'Affordability',
    desc: 'Our wholesale pricing is structured to protect your retail margin and make your business more competitive.',
  },
  {
    icon: HiLightningBolt,
    title: 'Efficiency',
    desc: 'Streamlined ordering and processing means your stock arrives without unnecessary delays or complications.',
  },
  {
    icon: HiUsers,
    title: 'Customer Focus',
    desc: 'Every decision we make centres on the needs of the retailers we serve — your success is our success.',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Products Available' },
  { value: 200, suffix: '+', label: 'Retailers Served' },
  { value: 1000, suffix: '+', label: 'Orders Fulfilled' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.floor(current))
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-black font-semibold">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// FadeUp animation wrapper (from SectionWrapper, inlined here)
function FadeUp({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// StaggerContainer animation wrapper (from SectionWrapper, inlined here)
function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.14,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// staggerItem animation object (from SectionWrapper, inlined here)
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #C9A447 0, #C9A447 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #C9A447 0, #C9A447 1px, transparent 0, transparent 50%)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-black text-xs tracking-[0.22em] uppercase">About Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-black max-w-2xl leading-tight"
          >
            Built for UK Retailers.
            <br />
            <span className="text-black italic">Driven by Quality.</span>
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── Company Overview ──────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-14 items-center">
          <FadeUp>
            <span className="section-tag">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">Company Overview</span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black leading-tight mb-5">
              Who We Are
            </h2>
            <div className="gold-divider mb-6" />
            <p className="font-body text-black text-base leading-relaxed mb-4">
              Practicool Limited is a registered UK company specialising in the wholesale supply
              of giftware and household items. Operating from London, we serve independent
              retailers, gift shops, online sellers, and trade buyers across the United Kingdom.
            </p>
            <p className="font-body text-black text-base leading-relaxed mb-6">
              We combine a practical product philosophy with a deep understanding of the retail
              market, ensuring every item in our range is selected for quality, demand, and
              value. Our goal is simple: to make your buying experience as effortless and
              profitable as possible.
            </p>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 text-black font-body text-sm">
                <HiOfficeBuilding className="text-gold" size={16} />
                Registered in England &amp; Wales
              </div>
              <div className="flex items-center gap-2 text-black font-body text-sm">
                <HiGlobe className="text-gold" size={16} />
                Based in London, N22
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/3] bg-navy rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&auto=format&fit=crop&q=80"
                  alt="Wholesale warehouse"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/70 to-transparent" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -left-5 bg-gold text-black p-5 rounded-sm shadow-xl">
                <div className="font-display text-2xl font-bold leading-none">UK</div>
                <div className="font-body text-xs font-semibold tracking-wider mt-0.5">REGISTERED</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <FadeUp className="text-center mb-14">
            <span className="section-tag justify-center">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">Purpose &amp; Direction</span>
              <span className="w-4 h-px bg-gold" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black">
              Our Mission &amp; Vision
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp delay={0.05}>
              <div className="bg-navy rounded-sm p-10 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all duration-500" />
                <div className="relative">
                  <div className="w-10 h-0.5 bg-gold mb-5" />
                  <span className="font-body text-black text-xs tracking-[0.2em] uppercase font-semibold">Mission</span>
                  <h3 className="font-display text-2xl text-black mt-3 mb-4">
                    Empower Retailers with Quality Products
                  </h3>
                  <p className="font-body text-black text-sm leading-relaxed">
                    To be the wholesale supplier that UK retailers rely on — delivering quality giftware and
                    household essentials at prices that make retail businesses thrive. We aim to simplify
                    buying, reduce sourcing time, and maximise your product margins.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-gold rounded-sm p-10 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-10 h-0.5 bg-black mb-5" />
                  <span className="font-body text-black text-xs tracking-[0.2em] uppercase font-semibold opacity-70">Vision</span>
                  <h3 className="font-display text-2xl text-black mt-3 mb-4">
                    Trusted UK &amp; Global Wholesale Partner
                  </h3>
                  <p className="font-body text-black text-sm leading-relaxed">
                    To grow into a nationally recognised and internationally respected wholesale partner — known
                    for product quality, fair pricing, and the kind of consistent service that builds
                    decade-long business relationships.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <FadeUp className="mb-14">
            <span className="section-tag">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">Our Values</span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black max-w-xl">
              Principles That Guide Everything We Do
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="group flex gap-6 bg-white p-7 rounded-sm border border-cream-dark card-hover"
              >
                <div className="w-11 h-11 rounded-sm bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <v.icon className="text-gold group-hover:text-black transition-colors duration-300" size={18} />
                </div>
                <div>
                  <h3 className="font-display text-black text-lg font-semibold mb-1.5">
                    {v.title}
                  </h3>
                  <p className="font-body text-black text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Animated Counters ─────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.15}>
                <Counter target={s.value} suffix={s.suffix} />
                <p className="font-body text-black text-sm mt-2 tracking-wider uppercase">
                  {s.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <FadeUp className="text-center max-w-xl mx-auto px-5">
          <h2 className="font-display text-3xl md:text-4xl text-black mb-4">
            Partner with Practicool
          </h2>
          <p className="font-body text-black text-sm mb-7">
            Ready to simplify your wholesale buying? We'd love to talk.
          </p>
          <Link to="/contact" className="btn-primary group text-sm text-black">
            Get in Touch
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </FadeUp>
      </section>
    </>
  )
}