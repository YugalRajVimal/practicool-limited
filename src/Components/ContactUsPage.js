import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheckCircle,
  HiArrowRight,
} from 'react-icons/hi'

// Local replacements for FadeUp, StaggerContainer, and staggerItem
// ── FadeUp Replacement ──
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// ── StaggerContainer and staggerItem Replacement ──
const StaggerContainer = ({ children, className }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.35 }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.14,
          delayChildren: 0
        }
      }
    }}
  >
    {children}
  </motion.div>
);

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const contactInfo = [
  {
    icon: HiLocationMarker,
    label: 'Address',
    lines: ['30A High Road, Wood Green', 'London N22 6BX, United Kingdom'],
  },
  {
    icon: HiPhone,
    label: 'Phone',
    lines: ['+44 7002982480'],
    link: 'tel:+447002982480',
  },
  {
    icon: HiMail,
    label: 'Email',
    lines: ['info@practicool.co.uk', 'practicoollimiteddirector@gmail.com'],
    link: 'mailto:info@practicool.co.uk',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #C9A447 0, #C9A447 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #C9A447 0, #C9A447 1px, transparent 0, transparent 50%)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-gold text-xs tracking-[0.22em] uppercase text-black">Contact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-black max-w-2xl leading-tight"
          >
            Let's Talk
            <br />
            <span className="text-black italic">Wholesale.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-black text-base mt-4 max-w-lg"
          >
            Whether you're looking for a quote, product information, or just want to explore what we offer — we're here to help.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── Main Contact Section ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeUp>
              <span className="section-tag text-black">
                <span className="w-4 h-px bg-gold" />
                Get in Touch
              </span>
              <h2 className="font-display text-3xl text-black mb-2">Contact Information</h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-black text-sm leading-relaxed">
                Reach out via phone, email, or the contact form. We aim to respond to all
                wholesale enquiries within one business day.
              </p>
            </FadeUp>

            <StaggerContainer className="space-y-4 mt-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={staggerItem}
                  className="flex gap-4 bg-white p-5 rounded-sm border border-cream-dark"
                >
                  <div className="w-10 h-10 rounded-sm bg-white flex items-center justify-center shrink-0">
                    <info.icon className="text-black" size={16} />
                  </div>
                  <div>
                    <p className="font-body text-black text-xs tracking-widest uppercase font-semibold mb-1">
                      {info.label}
                    </p>
                    {info.lines.map((line, i) =>
                      info.link && i === 0 ? (
                        <a
                          key={i}
                          href={info.link}
                          className="font-body text-black text-sm transition-colors block"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="font-body text-black text-sm">{line}</p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Map Placeholder */}
            <FadeUp delay={0.3}>
              <div className="rounded-sm overflow-hidden border border-cream-dark h-52 relative bg-white group">
                <iframe
                  title="Practicool Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8!2d-0.1086!3d51.5977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5b5e5b5e5b%3A0x0!2s30A+High+Rd%2C+London+N22+6BX!5e0!3m2!1sen!2suk!4v1"
                  className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  allowFullScreen=""
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-black/10">
                  <p className="font-body text-black text-xs">Wood Green, London N22</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <FadeUp>
              <div className="bg-white rounded-sm border border-cream-dark p-8 md:p-10">
                {!submitted ? (
                  <>
                    <h3 className="font-display text-2xl text-black mb-2">Send an Enquiry</h3>
                    <p className="font-body text-black text-sm mb-7">
                      Tell us about your business and what you're looking for — we'll come back with the right offer.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-body text-black text-xs font-medium tracking-wider uppercase block mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full bg-white border border-cream-dark rounded-sm px-4 py-3 font-body text-sm text-black placeholder-black focus:outline-none focus:border-black transition-colors duration-200"
                          />
                        </div>
                        <div>
                          <label className="font-body text-black text-xs font-medium tracking-wider uppercase block mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full bg-white border border-cream-dark rounded-sm px-4 py-3 font-body text-sm text-black placeholder-black focus:outline-none focus:border-black transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-black text-xs font-medium tracking-wider uppercase block mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+44 7000 000000"
                          className="w-full bg-white border border-cream-dark rounded-sm px-4 py-3 font-body text-sm text-black placeholder-black focus:outline-none focus:border-black transition-colors duration-200"
                        />
                      </div>

                      <div>
                        <label className="font-body text-black text-xs font-medium tracking-wider uppercase block mb-1.5">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your business, the products you're interested in, or any questions you have..."
                          className="w-full bg-white border border-cream-dark rounded-sm px-4 py-3 font-body text-sm text-black placeholder-black focus:outline-none focus:border-black transition-colors duration-200 resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary w-full flex items-center gap-2 justify-center text-sm disabled:opacity-70 disabled:cursor-not-allowed text-black"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2 text-black">
                            <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Enquiry
                            <HiArrowRight className="text-black" />
                          </>
                        )}
                      </motion.button>

                      <p className="font-body text-black text-xs text-center">
                        We typically respond within 1 business day.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <HiCheckCircle className="text-black mx-auto mb-4" size={52} />
                    <h3 className="font-display text-2xl text-black mb-2">
                      Enquiry Received
                    </h3>
                    <p className="font-body text-black text-sm max-w-sm mx-auto">
                      Thank you for reaching out. A member of the Practicool team will be in
                      touch within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                      className="mt-7 text-black font-body text-sm underline underline-offset-2 hover:text-black transition-colors"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Info Strip ───────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Response Time', value: '< 1 Business Day' },
              { label: 'Trade Hours', value: 'Mon–Fri, 9am–5pm' },
              { label: 'Enquiry Types', value: 'Quotes, Orders, General' },
            ].map((item) => (
              <FadeUp key={item.label}>
                <div className="font-display text-black text-xl">{item.value}</div>
                <div className="font-body text-black text-xs tracking-wider uppercase mt-1">{item.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}