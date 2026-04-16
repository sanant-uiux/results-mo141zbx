import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Mail, MessageSquare } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDivider from '../components/WaveDivider'

const categories = ['All Articles', 'Cloud & Infrastructure', 'AI & Data', 'Software Engineering', 'Cybersecurity', 'Digital Transformation', 'Engineering Culture', 'Case Studies']

const featuredPost = {
  title: 'The Architecture Decision Records We Wish We\'d Written 5 Years Ago',
  author: 'Rakesh Menon, CTO',
  date: 'April 10, 2026',
  readTime: '14 min read',
  category: 'Engineering Culture',
  excerpt: "After reviewing 200+ pull requests from the past year, our CTO reflects on the architectural decisions that aged well, the ones that didn't, and why documenting the \"why\" behind every major technical choice has become non-negotiable at XTEC Global. Includes our ADR template and real examples from production systems.",
  img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=80',
}

const posts = [
  { title: 'Why 73% of Cloud Migrations Fail — and How to Be in the Other 27%', author: 'Priya Deshpande, Cloud Practice Lead', date: 'April 8, 2026', category: 'Cloud & Infrastructure', readTime: '11 min read', excerpt: "Most cloud migration failures aren't technical — they're strategic. After leading 180+ successful migrations, we've identified the five critical planning gaps that derail enterprise cloud initiatives. This article breaks down each gap with real client examples and the framework we use to mitigate them.", img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', cta: 'Read Article' },
  { title: 'Building AI-Ready Data Pipelines: A Practical Guide for Enterprise Teams', author: 'Arjun Kapoor, Head of AI & Data', date: 'March 22, 2026', category: 'AI & Data', readTime: '16 min read', excerpt: 'Your AI models are only as good as the data feeding them. This guide walks through the architecture decisions, tooling choices (dbt vs. Airflow vs. Prefect), and governance practices that separate production-grade ML pipelines from experimental notebooks that never make it to production.', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80', cta: 'Read Article' },
  { title: 'The True Cost of Technical Debt: How One Client Saved $2.4M by Modernizing Early', author: 'Elena Vasquez, VP of Client Success', date: 'March 5, 2026', category: 'Case Studies', readTime: '9 min read', excerpt: 'A mid-market insurance company was spending 68% of its IT budget maintaining legacy COBOL systems. This case study details how we helped them modernize incrementally over 18 months, reduce maintenance costs by 71%, and free their engineering team to build the mobile platform their customers had been demanding.', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80', cta: 'Read Case Study' },
  { title: 'Zero-Trust Architecture: Beyond the Buzzword — A Practical Implementation Playbook', author: 'Naveen Krishnamurthy, Security Practice Lead', date: 'February 18, 2026', category: 'Cybersecurity', readTime: '13 min read', excerpt: "Everyone talks about zero trust, but few organizations have actually implemented it end-to-end. This playbook shares the phased approach we used to deploy zero-trust architecture for a 4,000-employee financial services firm — including the identity provider migration, network micro-segmentation, and the cultural shift that was harder than the technology.", img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80', cta: 'Read Article' },
  { title: 'React Server Components in Production: What We Learned After 6 Months', author: 'Siddharth Iyer, Senior Frontend Architect', date: 'February 2, 2026', category: 'Software Engineering', readTime: '10 min read', excerpt: "We adopted React Server Components on three client projects over the past six months. This article shares our honest assessment — the performance wins (42% reduction in client-side JS), the DX trade-offs, the caching gotchas, and the patterns that worked best for data-heavy enterprise dashboards.", img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80', cta: 'Read Article' },
  { title: 'From Monolith to Microservices: A 14-Month Journey with a HealthTech Startup', author: 'Rakesh Menon, CTO', date: 'January 15, 2026', category: 'Digital Transformation', readTime: '18 min read', excerpt: "When a Series B healthtech startup's monolithic Rails application couldn't handle 10x user growth, they came to us. This is the detailed story of how we decomposed their system into 11 microservices, implemented event-driven architecture with Kafka, and achieved 99.99% uptime — all without a single user-facing outage during the transition.", img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', cta: 'Read Case Study' },
]

const tags = ['AWS', 'Kubernetes', 'React', 'Python', 'Machine Learning', 'DevOps', 'CI/CD', 'Microservices', 'Cloud Migration', 'Data Engineering', 'TypeScript', 'Security', 'PostgreSQL', 'Docker', 'Terraform', 'Next.js', 'Agile', 'API Design', 'System Design', 'Technical Debt']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Articles')

  const filteredPosts = activeCategory === 'All Articles'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mesh-gradient pt-28 pb-16">
        <div className="blob w-72 h-72 bg-purple-400 top-10 left-10" />
        <div className="blob w-56 h-56 bg-pink-300 bottom-10 right-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-purple-600 font-medium mb-4">Home &gt; Blog</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
          >
            The XTEC Global{' '}
            <span className="gradient-text">Engineering Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Technical deep-dives, industry analysis, and strategic insights from our team of engineers, architects, and technology leaders. Written by practitioners, for practitioners.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <button className="flex items-center gap-2 mx-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              <BookOpen size={18} /> Browse All Articles
            </button>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Featured Post */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-purple-100/50 flex flex-col lg:flex-row"
          >
            <div className="lg:w-1/2">
              <img src={featuredPost.img} alt={featuredPost.title} className="w-full h-full min-h-[300px] object-cover" />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">Featured Article</span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-3">{featuredPost.title}</h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                <span>{featuredPost.author}</span>
                <span>·</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
                <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">{featuredPost.category}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-purple-600 font-semibold cursor-pointer hover:text-pink-500 transition-colors">
                Read the Full Article <ArrowRight size={16} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-gray-500 mb-3">Browse by Topic</p>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === c
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
                    : 'bg-purple-50 text-gray-600 hover:bg-purple-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.12)' }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100/50 group"
            >
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">{p.category}</span>
                  <span className="text-xs text-gray-400">· {p.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-700">{p.author}</p>
                    <p className="text-xs text-gray-400">{p.date}</p>
                  </div>
                  <span className="text-sm text-purple-600 font-semibold flex items-center gap-1 cursor-pointer hover:text-pink-500 transition-colors">
                    {p.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider color="#f0f4ff" />

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-3">Stay Ahead of the Curve</h2>
          <p className="text-gray-600 mb-8">Join 8,200+ engineering leaders who receive our bi-weekly newsletter — curated technical insights, industry trend analysis, and practical guides delivered straight to your inbox. No spam, unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-5 py-3 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
            />
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow">
              <Mail size={16} /> Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">By subscribing, you agree to our Privacy Policy. We send 2 emails per month — no spam, ever.</p>
        </motion.div>
      </section>

      {/* Tags */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-xl text-gray-900 mb-6 text-center">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 rounded-full bg-purple-50 text-sm text-gray-600 font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-700 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">Have a Technology Challenge? Let's Talk.</h2>
          <p className="text-purple-100 mb-8">Our team writes about the same problems we solve every day. If any of these topics hit close to home, we'd love to hear about your specific situation.</p>
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 mx-auto bg-white text-purple-700 px-7 py-3.5 rounded-full font-semibold shadow-xl">
              <MessageSquare size={18} /> Book a Technical Consultation
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </>
  )
}
