import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowDown, ArrowRight, Calendar, FileDown, Check
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDivider from '../components/WaveDivider'

const services = [
  {
    title: 'Custom Software Development',
    desc: "We build bespoke software solutions that fit your business like a glove — not off-the-shelf tools that force you to adapt. From complex enterprise platforms to customer-facing web and mobile applications, our engineering teams deliver production-ready software using modern architectures and battle-tested development practices.\n\nEvery project begins with a thorough technical discovery phase where we map your business requirements to architectural decisions. We favor component-based, modular architectures that allow for iterative delivery and future extensibility. Our sprint-based development process means you see working software every two weeks — not a big reveal after six months.",
    features: [
      'Full-stack web development (React, Next.js, Angular, Vue.js, Node.js, Python, .NET)',
      'Native and cross-platform mobile development (React Native, Flutter, Swift, Kotlin)',
      'API design and microservices architecture',
      'Legacy application modernization and re-platforming',
      'UI/UX design and interactive prototyping',
      'Automated testing and CI/CD pipeline setup',
    ],
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    cta: 'Start Your Software Project',
  },
  {
    title: 'Cloud Solutions & DevOps Engineering',
    desc: "The cloud isn't just about moving servers — it's about rethinking how your business builds, deploys, and scales technology. XTEC Global's cloud practice helps enterprises design, migrate to, and optimize cloud environments across AWS, Azure, and Google Cloud Platform.\n\nOur DevOps engineers implement the automation layer that makes cloud powerful: CI/CD pipelines that ship code safely, Infrastructure as Code that makes environments reproducible, container orchestration that scales elastically, and monitoring systems that catch issues before users do. We've completed 180+ cloud migrations with a 100% success rate — no data loss, no unplanned downtime.",
    features: [
      'Cloud architecture design and cost optimization (average 34% cost reduction)',
      'Lift-and-shift, re-platform, and re-architecture migration strategies',
      'Infrastructure as Code (Terraform, Pulumi, CloudFormation)',
      'Kubernetes and Docker container orchestration',
      'CI/CD pipeline design (GitHub Actions, GitLab CI, Jenkins, ArgoCD)',
      '24/7 cloud monitoring and incident response (Datadog, Grafana, PagerDuty)',
    ],
    img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
    cta: 'Plan Your Cloud Strategy',
  },
  {
    title: 'AI, Machine Learning & Data Analytics',
    desc: "Data is your most underutilized asset. XTEC Global's AI and data practice helps enterprises build the infrastructure, models, and dashboards needed to turn raw data into strategic advantage. We don't just build models — we build production-grade ML systems that integrate into your business workflows and deliver measurable ROI.\n\nOur data engineers design scalable pipelines that ingest, clean, and transform data from dozens of sources. Our data scientists build predictive models, recommendation engines, and NLP systems. And our visualization experts create dashboards that make complex data accessible to decision-makers at every level.",
    features: [
      'Data pipeline engineering (Apache Spark, Airflow, dbt, Snowflake, BigQuery)',
      'Machine learning model development and MLOps deployment',
      'Predictive analytics and demand forecasting',
      'Natural Language Processing (chatbots, document understanding, sentiment analysis)',
      'Business intelligence dashboards (Tableau, Power BI, Looker, custom solutions)',
      'Computer vision applications (quality inspection, document processing)',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    cta: "Unlock Your Data's Potential",
  },
  {
    title: 'Dedicated Development Teams',
    desc: "When you need to scale your engineering capacity quickly and reliably, XTEC Global's dedicated team model gives you access to pre-vetted, senior-level professionals who integrate directly into your workflows. Unlike traditional outsourcing, our dedicated teams work exclusively on your projects, attend your standups, use your tools, and align with your engineering culture.\n\nWe handle recruitment, onboarding, HR, and infrastructure — you focus on building your product. Teams can scale from 3 to 30+ members, with the ability to add or adjust roles monthly. Our average team ramp-up time is just 12 business days from contract signing to first productive sprint.",
    features: [
      'Full-stack developers, QA engineers, DevOps specialists, data scientists, and UI/UX designers',
      'Overlap with US, European, and APAC time zones (minimum 4-hour daily overlap guaranteed)',
      'Embedded Scrum Master and Technical Lead for teams of 5+',
      'Monthly performance reviews and skill gap analysis',
      'Transparent billing with no hidden markups on salaries',
      '30-day replacement guarantee for any team member',
    ],
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    cta: 'Build Your Extended Team',
  },
  {
    title: 'Cybersecurity & Compliance Services',
    desc: "In an era of escalating cyber threats and tightening regulatory requirements, security can't be an afterthought. XTEC Global's cybersecurity practice provides end-to-end protection — from vulnerability assessments and penetration testing to security architecture design and compliance program implementation.\n\nWe help organizations build security into their SDLC (Shift-Left Security), implement zero-trust architectures, and achieve compliance with frameworks like SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS. Our security engineers have collectively identified and remediated over 15,000 vulnerabilities across client environments.",
    features: [
      'Application security testing (SAST, DAST, SCA) and secure code review',
      'Penetration testing and red team exercises',
      'Security architecture design and zero-trust implementation',
      'Compliance program setup (SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS)',
      'Security monitoring, SIEM implementation, and incident response planning',
      'Security awareness training and phishing simulation programs',
    ],
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
    cta: 'Strengthen Your Security Posture',
  },
]

const tableData = {
  headers: ['Feature', 'Fixed-Price Project', 'Time & Materials', 'Dedicated Team'],
  rows: [
    ['Best For', 'Well-defined scope, clear requirements', 'Evolving requirements, R&D, MVPs', 'Long-term product development'],
    ['Pricing', 'Fixed budget, milestone-based payments', 'Hourly/monthly billing, pay for actual work', 'Monthly retainer per team member'],
    ['Team Size', '2–8 engineers', '1–10 engineers', '3–30+ engineers'],
    ['Minimum Engagement', '8 weeks', '4 weeks', '3 months'],
    ['Scope Flexibility', 'Low (change requests via formal CR process)', 'High (adjust priorities sprint-by-sprint)', 'High (full backlog control)'],
    ['Project Management', 'XTEC-managed (included)', 'Shared or client-managed', 'Client-managed (Scrum Master available)'],
    ['IP Ownership', 'Full transfer on milestone completion', 'Full transfer on payment', 'Full transfer on payment'],
    ['Ideal Budget Range', '$25K – $500K', '$10K – $200K/month', '$15K – $150K/month'],
  ],
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mesh-gradient pt-28 pb-16">
        <div className="blob w-80 h-80 bg-purple-400 top-10 -right-20" />
        <div className="blob w-64 h-64 bg-pink-300 bottom-20 left-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-purple-600 font-medium mb-4">Home &gt; Services</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
          >
            Technology Solutions{' '}
            <span className="gradient-text">Engineered for Your Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            From custom software development to AI-powered analytics, XTEC Global delivers full-spectrum technology services designed to solve complex business challenges and drive measurable growth.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <button className="flex items-center gap-2 mx-auto text-purple-600 font-semibold">
              Explore Our Services <ArrowDown size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Services */}
      {services.map((s, i) => (
        <section key={i} className={`py-20 px-6 ${i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}`}>
          <div className={`max-w-6xl mx-auto flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <img src={s.img} alt={s.title} className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">{s.title}</h2>
              {s.desc.split('\n\n').map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed mb-4 text-[15px]">{p}</p>
              ))}
              <h4 className="font-heading font-semibold text-gray-900 mb-3 mt-6">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {s.features.map((f, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-pink-500 transition-colors">
                {s.cta} <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
          {i < services.length - 1 && <WaveDivider color={i % 2 === 0 ? '#faf5ff' : '#ffffff'} />}
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading
          title="Find the Right Engagement Model"
          subtitle="Choose the model that best fits your project scope, timeline, and budget."
        />
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                {tableData.headers.map((h, i) => (
                  <th key={i} className={`text-left py-4 px-4 font-heading font-semibold text-sm ${i === 3 ? 'bg-purple-50 border-t-4 border-purple-500 rounded-t-xl' : ''} ${i === 0 ? 'text-gray-500' : 'text-gray-900'}`}>
                    {i === 3 && <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full mb-1">Most Popular</span>}
                    <br className={i !== 3 ? 'hidden' : ''} />
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-t border-gray-100"
                >
                  {row.map((cell, j) => (
                    <td key={j} className={`py-3.5 px-4 text-sm ${j === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'} ${j === 3 ? 'bg-purple-50' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-800 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Not Sure Which Service Fits? Let's Figure It Out Together.</h2>
          <p className="text-lg text-purple-100 mb-8">Every business is different, and so is every technology challenge. Book a 30-minute strategy call with one of our solution architects — no pitch, no pressure, just honest guidance.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 bg-white text-purple-700 px-7 py-3.5 rounded-full font-semibold shadow-xl">
                <Calendar size={18} /> Book a Free Strategy Call
              </motion.button>
            </Link>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors">
              <FileDown size={18} /> Download Service Catalog (PDF)
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
