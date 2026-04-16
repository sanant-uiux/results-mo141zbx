import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowDown, Target, Eye, Lightbulb, Handshake,
  GraduationCap, BarChart3, Timer, RefreshCw, Lock, Scale,
  PhoneCall, FileText, Linkedin, Github, Twitter
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDivider from '../components/WaveDivider'

const values = [
  { icon: Target, title: 'Outcome-Obsessed', desc: 'We don\'t measure success by lines of code or hours logged. We measure it by the business results our solutions deliver — revenue gained, costs reduced, users retained.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'No hidden timelines, no buried risks, no surprise invoices. Every client gets real-time project dashboards, weekly executive summaries, and direct access to the engineers building their product.' },
  { icon: Lightbulb, title: 'Continuous Innovation', desc: 'We invest 15% of our annual revenue into R&D, internal tooling, and team upskilling. Our engineers participate in monthly tech talks, annual hackathons, and industry conferences to stay at the cutting edge.' },
  { icon: Handshake, title: 'Partnership Over Transaction', desc: "Our average client relationship lasts 4.3 years. We don't chase short-term contracts — we build long-term partnerships where we grow together and share in each other's success." },
]

const differences = [
  { icon: GraduationCap, title: 'Senior-First Staffing Model', desc: "78% of our engineering team holds 7+ years of professional experience. You won't find junior developers learning on your project — every team member assigned to your engagement is a proven expert in their domain." },
  { icon: BarChart3, title: 'Data-Driven Delivery', desc: "We track 23 project health metrics in real time — from code quality scores and test coverage to velocity trends and defect density. You'll always know exactly where your project stands, backed by data, not guesswork." },
  { icon: Timer, title: 'Rapid Team Assembly', desc: 'Need a team of 5 specialized engineers? We can have them onboarded and contributing within 2 weeks, not 2 months. Our bench of pre-vetted, interview-ready professionals means you never wait for talent.' },
  { icon: RefreshCw, title: 'Technology-Agnostic Approach', desc: "We recommend the right tool for the job, not the tool we happen to know best. Whether it's React or Angular, AWS or Azure, PostgreSQL or MongoDB — our recommendations are driven by your requirements, not our preferences." },
  { icon: Lock, title: 'IP Protection & Compliance', desc: "Every engagement includes full IP assignment, NDA coverage, and compliance documentation. We're GDPR-ready, HIPAA-aware, and have experience working within PCI-DSS, SOX, and FedRAMP frameworks." },
  { icon: Scale, title: 'Flexible Engagement Models', desc: 'Fixed-price projects, time-and-materials, dedicated teams, or hybrid models — we structure engagements to match your risk tolerance, budget cycles, and organizational preferences. No one-size-fits-all contracts.' },
]

const team = [
  { name: 'Sanant Saini', role: 'Founder & CEO', bio: 'With 16 years in enterprise technology consulting, Sanant founded XTEC Global to bridge the gap between business strategy and engineering execution. Previously led technology transformation programs at Accenture and Infosys. Holds an MBA from ISB Hyderabad and a B.Tech in Computer Science.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', socials: [{ icon: Linkedin }, { icon: Twitter }] },
  { name: 'Rakesh Menon', role: 'Chief Technology Officer', bio: "Rakesh oversees XTEC's technical architecture standards, R&D initiatives, and engineering culture. A former principal engineer at Amazon Web Services, he brings deep expertise in distributed systems, cloud-native architecture, and platform engineering. AWS Solutions Architect Professional and Kubernetes certified.", img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', socials: [{ icon: Linkedin }, { icon: Github }] },
  { name: 'Elena Vasquez', role: 'VP of Client Success', bio: "Elena ensures every client engagement delivers measurable business value. She manages XTEC's portfolio of 80+ active accounts and leads the client success team across three time zones. Previously held director-level roles at Thoughtworks and Deloitte Digital. Known for her relentless focus on outcomes over outputs.", img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', socials: [{ icon: Linkedin }] },
  { name: 'Arjun Kapoor', role: 'Head of AI & Data Practice', bio: "Arjun leads XTEC's fastest-growing practice area, building ML pipelines, predictive analytics platforms, and NLP solutions for enterprise clients. Former data science lead at Flipkart with publications in IEEE and ACM journals. M.S. in Machine Learning from Carnegie Mellon University.", img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', socials: [{ icon: Linkedin }] },
]

const certs = [
  'ISO 27001:2022 — Information Security Management',
  'SOC 2 Type II — Security, Availability & Confidentiality',
  'AWS Advanced Consulting Partner — Cloud Solutions',
  'Microsoft Gold Partner — Azure & Enterprise Solutions',
  'Google Cloud Partner — Cloud Platform Services',
  'CMMI Level 3 — Development Process Maturity',
  'ISO 9001:2015 — Quality Management System',
  'Clutch Top 100 — Global B2B IT Services (2024, 2025)',
]

const clients = ['FreightLink Europe', 'Meridian Health Systems', 'Atlas Retail Group', 'NordicPay Financial', 'Pinnacle Insurance', 'TerraVolt Energy', 'Brightpath Education', 'Quantum Logistics', 'CrestView Capital', 'NovaBuild Construction']
const partners = ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'Salesforce', 'MongoDB']

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mesh-gradient pt-28 pb-16">
        <div className="blob w-80 h-80 bg-purple-400 -top-20 right-10" />
        <div className="blob w-64 h-64 bg-pink-300 bottom-10 -left-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-purple-600 font-medium mb-4">Home &gt; About Us</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
          >
            We Build Technology That{' '}
            <span className="gradient-text">Builds Businesses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Since 2014, XTEC Global has been the engineering partner behind some of the world's most ambitious digital transformations. We're a team of strategists, architects, and builders obsessed with delivering solutions that actually work.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <button className="flex items-center gap-2 mx-auto text-purple-600 font-semibold">
              Explore Our Story <ArrowDown size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">The XTEC Global Story</h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-[15px]">
              <p>XTEC Global was founded in 2014 by a group of senior technologists who shared a frustration: enterprises were spending millions on technology projects that missed deadlines, exceeded budgets, and failed to deliver real business value. Too many consulting firms were selling slide decks instead of shipping working software.</p>
              <p>We set out to build a different kind of technology partner — one that leads with engineering excellence, communicates with radical transparency, and measures success by outcomes, not hours billed.</p>
              <p>Starting with a core team of 12 engineers in a single office, we landed our first enterprise client within three months — a logistics company that needed to replace a failing warehouse management system. We delivered in 14 weeks, 15% under budget. That client is still with us today.</p>
              <p>Over the past 12 years, we've grown to 200+ team members across four offices, delivered 1,200+ projects, and expanded our capabilities from pure software development into cloud architecture, AI/ML, DevOps automation, and full-spectrum digital transformation consulting.</p>
              <p>What hasn't changed is our founding principle: <strong>technology should solve real problems for real businesses — and it should be built by people who genuinely care about getting it right.</strong></p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="XTEC team collaborating"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {['2014 — Founded', '2016 — 100th Client', '2019 — Cloud Practice', '2021 — AI Division', '2024 — 25th Country'].map((m, i) => (
                <span key={i} className="text-xs bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full font-medium">{m}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#faf5ff" />

      {/* Mission / Vision / Values */}
      <section className="py-20 px-6 bg-purple-50">
        <SectionHeading title="What Drives Us" />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100/50"
            >
              <h3 className="font-heading font-bold text-xl text-purple-600 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">To empower enterprises with technology solutions that accelerate growth, reduce operational complexity, and create lasting competitive advantage — delivered with engineering rigor and strategic clarity.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100/50"
            >
              <h3 className="font-heading font-bold text-xl text-pink-500 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">To be the most trusted technology partner for mid-market and enterprise organizations worldwide — known for the quality of our engineering, the integrity of our relationships, and the measurable impact of our work.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100/50 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto mb-4"
                >
                  <v.icon size={24} className="text-purple-600" />
                </motion.div>
                <h4 className="font-heading font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* What Makes Us Different */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading
          title="The XTEC Difference"
          subtitle="In a crowded market of IT service providers, here's what sets us apart."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differences.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100/50 relative overflow-hidden"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
              />
              <div className="pl-4">
                <d.icon size={24} className="text-purple-600 mb-4" />
                <h4 className="font-heading font-bold text-gray-900 mb-2">{d.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider color="#faf5ff" />

      {/* Team */}
      <section className="py-20 px-6 bg-purple-50">
        <SectionHeading
          title="Leadership Team"
          subtitle="The strategists and technologists guiding XTEC Global's vision and delivery."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100/50 group"
            >
              <div className="relative overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-gray-900">{m.name}</h4>
                <p className="text-sm text-purple-600 font-medium mb-2">{m.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">{m.bio}</p>
                <div className="flex gap-2 mt-3">
                  {m.socials.map((s, j) => (
                    <span key={j} className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                      <s.icon size={14} className="text-purple-600" />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Certifications */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading
          title="Certified. Accredited. Trusted."
          subtitle="Our certifications reflect our commitment to the highest standards of security, quality, and operational excellence."
        />
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="animate-marquee flex gap-6 whitespace-nowrap">
            {[...certs, ...certs].map((c, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-purple-50 rounded-2xl px-6 py-4 border border-purple-100 min-w-fit">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=40&q=80" alt="cert" className="w-6 h-6 rounded object-cover" />
                </div>
                <span className="text-sm font-medium text-gray-700">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Clients */}
      <section className="py-20 px-6 bg-purple-50">
        <SectionHeading
          title="Trusted by Industry Leaders"
          subtitle="We're proud to work with forward-thinking organizations across healthcare, finance, logistics, retail, and technology."
        />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
            {clients.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl py-4 px-3 text-center shadow-sm border border-purple-100/50 hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-gray-600">{c}</span>
              </motion.div>
            ))}
          </div>
          <h4 className="font-heading font-semibold text-gray-900 text-center mb-4">Technology Partners</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl py-3 px-5 shadow-sm border border-purple-100/50">
                <span className="text-sm font-semibold text-purple-600">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=20")', backgroundSize: 'cover' }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Let's Build Something That Matters</h2>
          <p className="text-lg text-gray-300 mb-8">Whether you're modernizing legacy systems, launching a new digital product, or scaling your engineering team — XTEC Global is ready to be your technology partner. Let's start with a conversation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-3.5 rounded-full font-semibold shadow-xl">
                <PhoneCall size={18} /> Schedule a Discovery Call
              </motion.button>
            </Link>
            <Link to="/blog">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors">
                <FileText size={18} /> View Our Case Studies
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
