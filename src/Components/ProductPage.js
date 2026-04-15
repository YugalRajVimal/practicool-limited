import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
  HiArrowRight,
  HiGift,
  HiHome,
  HiSparkles,
  HiTag,
  HiCube,
  HiArrowNarrowRight,
} from 'react-icons/hi'

const categories = [
  {
    icon: HiGift,
    title: 'Gift Items',
    desc: 'A versatile range of giftware suitable for all occasions — from everyday retail to seasonal peaks. Carefully selected for broad appeal and strong sell-through rates.',
    highlights: ['Novelty & Keepsake Gifts', 'Home Décor Gifts', 'Stationery & Desk Items', 'Occasion-Specific Sets'],
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=700&auto=format&fit=crop&q=80',
  },
  {
    icon: HiHome,
    title: 'Household Essentials',
    desc: 'Practical, everyday products that move quickly from shelves. Our household range covers the items your customers return for time and time again.',
    highlights: ['Kitchen & Dining', 'Storage & Organisation', 'Cleaning & Utility', 'Bathroom Accessories'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=80',
  },
  {
    icon: HiSparkles,
    title: 'Seasonal Products',
    desc: 'Timely, trend-aligned collections built around key UK seasonal periods. Get ahead of demand with ranges designed to sell fast when it matters most.',
    highlights: ['Christmas & Festive', 'Spring & Easter', 'Summer Essentials', 'Autumn & Halloween'],
    image: 'https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=700&auto=format&fit=crop&q=80',
  },
]

const carouselProducts = [
  { title: 'Seasonal Gift Sets', category: 'Gift Items', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80' },
  { title: 'Kitchen Essentials Pack', category: 'Household', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=80' },
  { title: 'Festive Décor Collection', category: 'Seasonal', img: 'https://images.unsplash.com/photo-1607251952052-a6ea528dfaa1?w=600&auto=format&fit=crop&q=80' },
  { title: 'Home Storage Solutions', category: 'Household', img: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&auto=format&fit=crop&q=80' },
  { title: 'Novelty Gift Range', category: 'Gift Items', img: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=80' },
  { title: 'Spring Essentials', category: 'Seasonal', img: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600&auto=format&fit=crop&q=80' },
]

export default function Products() {
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
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-gold text-xs tracking-[0.22em] uppercase">Our Range</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-black max-w-2xl leading-tight"
          >
            Explore Our
            <br />
            <span className="text-black italic">Wholesale Range</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-black text-base mt-4 max-w-xl"
          >
            A carefully curated selection of giftware and household essentials, available in bulk
            at wholesale prices for UK retailers.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── Categories ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <span className="section-tag justify-center">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">Product Categories</span>
              <span className="w-4 h-px bg-gold" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black">
              Three Core Categories
            </h2>
          </div>

          <div className="space-y-6">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                style={{ transition: 'opacity 0.7s, transform 0.7s', transitionDelay: `${i * 100}ms` }}
                className={`fade-up grid md:grid-cols-2 gap-0 rounded-sm overflow-hidden bg-white border border-cream-dark shadow-sm ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image */}
                <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="w-11 h-11 rounded-sm bg-white flex items-center justify-center mb-5">
                    <cat.icon className="text-gold" size={18} />
                  </div>
                  <h3 className="font-display text-2xl text-black font-semibold mb-3">
                    {cat.title}
                  </h3>
                  <p className="font-body text-black text-sm leading-relaxed mb-5">
                    {cat.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {cat.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 font-body text-black text-xs">
                        <span className="w-3 h-px bg-gold inline-block shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-gold font-body font-medium text-sm hover:gap-3 transition-all duration-200"
                  >
                    Enquire About This Range
                    <HiArrowNarrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Carousel ──────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-12">
            <span className="section-tag">
              <span className="w-4 h-px bg-gold" />
              <span className="text-black">Product Showcase</span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black max-w-xl">
              A Snapshot of Our Range
            </h2>
          </div>

          <div style={{ transition: 'opacity 0.7s, transform 0.7s', transitionDelay: '100ms' }}>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="pb-12"
            >
              {carouselProducts.map((p) => (
                <SwiperSlide key={p.title}>
                  <div className="group rounded-sm overflow-hidden bg-gray-100 border border-black/8">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="font-body text-gold text-xs tracking-widest uppercase">
                        {p.category}
                      </span>
                      <h3 className="font-display text-black text-base font-semibold mt-1">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ── Bulk Supply CTA ───────────────────────────────────── */}
      <section className="py-20 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #252525 1px, transparent 1px)`,
            backgroundSize: '25px 25px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="flex items-center gap-2 font-body text-black text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              <HiCube size={14} />
              Bulk Supply Available
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black leading-tight mb-4">
              Order in Volume.
              <br />
              Save on Every Unit.
            </h2>
            <p className="font-body text-black text-base leading-relaxed mb-3">
              Practicool offers flexible bulk purchasing across all product categories. The more
              you order, the more competitive your pricing becomes — protecting your margins and
              ensuring you never run short on fast-moving lines.
            </p>
            <div className="flex gap-6 mt-6 mb-8">
              {[
                { icon: HiTag, label: 'Volume Pricing' },
                { icon: HiCube, label: 'Flexible MOQ' },
                { icon: HiSparkles, label: 'Mixed Cases' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5">
                  <item.icon className="text-black" size={18} />
                  <span className="font-body text-black text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-gold font-body font-semibold px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-black/80 group text-sm"
            >
              Request a Quote
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div style={{ transition: 'opacity 0.7s, transform 0.7s', transitionDelay: '150ms' }}>
            <div className="bg-black/10 rounded-sm p-8 border border-black/15">
              <h3 className="font-display text-black text-xl font-semibold mb-5">
                Why Buy in Bulk with Practicool?
              </h3>
              <ul className="space-y-3.5">
                {[
                  'Better unit costs to protect your retail margin',
                  'Consistent product quality across large orders',
                  'Dedicated support for high-volume buyers',
                  'Flexible ordering to suit your storage capacity',
                  'Access to exclusive bulk-only deals and bundles',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 font-body text-black text-sm">
                    <span className="w-4 h-4 rounded-full bg-black/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}