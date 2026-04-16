import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, MessageSquare, Calendar } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDivider from '../components/WaveDivider'

const tabs = ['All Questions', 'Getting Started', 'Services & Capabilities', 'Pricing & Engagement', 'Security & Compliance', 'Post-Launch & Support']

const faqSections = [
  {
    category: 'Getting Started',
    questions: [
      { q: 'How do I begin a project with XTEC Global?', a: "The process starts with a simple conversation. You can fill out our contact form, email us at hello@xtecglobal.com, or book a call directly from our website. During the initial 30-minute discovery call, a solution architect will discuss your business objectives, technical requirements, timeline, and budget expectations. From there, we'll prepare a detailed proposal — typically within 5–7 business days — that includes scope, architecture recommendations, team composition, timeline, and commercial terms. There's absolutely no obligation at any stage." },
      { q: 'Do I need to have detailed technical requirements before reaching out?', a: "Not at all. Many of our most successful engagements started with a business problem and a rough idea — not a 50-page specification document. Our discovery process is designed to help you clarify requirements, evaluate technical options, and define scope. We've worked with clients who came to us with nothing more than a whiteboard sketch and helped them turn it into a fully scoped, production-ready product. That said, if you do have detailed specs, RFPs, or technical documentation, we're happy to work with those too." },
      { q: 'How long does it typically take to go from initial contact to project kickoff?', a: 'For most engagements, the timeline from first conversation to project start is 3–5 weeks. This includes discovery calls (1 week), proposal preparation and review (1–2 weeks), contract finalization (1 week), and team onboarding (1 week). For urgent projects, we can compress this to as little as 10 business days if the scope is well-defined and our bench has matching talent available. Dedicated team engagements typically ramp up within 12 business days of contract signing.' },
      { q: 'What information should I prepare for the discovery call?', a: "To make the most of our initial call, it helps to have a general sense of: the business problem you're trying to solve, your target users or audience, any existing systems the solution needs to integrate with, your approximate timeline and budget range, and any technical preferences or constraints. But don't stress about having everything figured out — our architects are experienced at asking the right questions to fill in the gaps. The discovery call is collaborative, not interrogative." },
      { q: 'Can I start with a small pilot project before committing to a larger engagement?', a: "Absolutely — and we actually recommend it. Starting with a 4–8 week pilot project is a great way to evaluate our technical capabilities, communication style, and cultural fit before scaling up. Many of our longest client relationships began with a small proof-of-concept or MVP engagement. We'll scope the pilot to deliver tangible, usable output — not just a throwaway demo — so you get real value regardless of whether you decide to continue." },
    ],
  },
  {
    category: 'Services & Capabilities',
    questions: [
      { q: 'What technologies does XTEC Global specialize in?', a: "Our engineering teams work across a wide range of modern technologies. On the frontend, we specialize in React, Next.js, Angular, Vue.js, and React Native. For backend development, our core stacks include Node.js (Express, NestJS), Python (Django, FastAPI), .NET, and Java (Spring Boot). We work extensively with cloud platforms (AWS, Azure, GCP), databases (PostgreSQL, MongoDB, Redis, Elasticsearch), DevOps tools (Terraform, Kubernetes, Docker, GitHub Actions), and AI/ML frameworks (TensorFlow, PyTorch, scikit-learn, LangChain). We're technology-agnostic — we recommend the stack that best fits your requirements, not the one we happen to prefer." },
      { q: 'Do you handle both web and mobile application development?', a: 'Yes. We build responsive web applications, progressive web apps (PWAs), native iOS (Swift) and Android (Kotlin) applications, and cross-platform mobile apps using React Native and Flutter. For products that need to work across web and mobile, we often recommend a shared backend architecture with platform-specific frontends optimized for each device\'s capabilities and UX patterns. About 40% of our projects involve both web and mobile components.' },
      { q: 'Can you work with our existing codebase and systems?', a: "Absolutely. A significant portion of our work involves inheriting, auditing, and improving existing codebases — not building from scratch. We start with a comprehensive code audit that evaluates architecture, code quality, test coverage, security vulnerabilities, and performance bottlenecks. From there, we create a prioritized improvement roadmap. We've taken over projects from in-house teams, other agencies, and freelancers — and we're experienced at navigating legacy code, undocumented systems, and technical debt. We'll be honest about what we find, even if it's not what you want to hear." },
      { q: 'Do you provide UI/UX design services, or do we need to bring our own designs?', a: "We offer full-service UI/UX design including user research, information architecture, wireframing, interactive prototyping (Figma), visual design, and usability testing. Our design team works closely with engineers to ensure feasibility and pixel-perfect implementation. That said, we're also happy to work with designs provided by your internal team or a third-party design agency. We can adapt to whatever workflow makes the most sense for your organization — whether that's us leading design, collaborating on it, or simply implementing your specs." },
      { q: 'What industries do you serve?', a: "We've delivered projects across healthcare, financial services, logistics and supply chain, retail and e-commerce, education, energy, insurance, real estate, and SaaS/technology companies. While we're not limited to any single vertical, this cross-industry experience is actually a strategic advantage — solutions and patterns that work in one industry often translate powerfully to others. For regulated industries like healthcare (HIPAA) and financial services (PCI-DSS, SOX), we have specific compliance expertise baked into our development process." },
    ],
  },
  {
    category: 'Pricing & Engagement',
    questions: [
      { q: 'How does XTEC Global structure its pricing?', a: "We offer three primary engagement models: Fixed-Price for well-defined projects with clear scope ($25K–$500K typical range), Time & Materials for projects with evolving requirements (billed monthly based on actual hours at agreed rates), and Dedicated Teams for long-term product development (monthly retainer per team member, $15K–$150K/month depending on team size and seniority). Each model has different advantages depending on your project's scope clarity, budget flexibility, and timeline. We'll recommend the best fit during our discovery call and can even blend models for different project phases." },
      { q: 'What is the typical cost of a custom software development project?', a: 'Project costs vary significantly based on complexity, team size, and duration. As a general guide: a focused MVP or proof-of-concept typically ranges from $25K–$75K over 6–12 weeks. A mid-complexity web or mobile application runs $75K–$250K over 3–6 months. Enterprise-grade platforms with multiple integrations, advanced features, and compliance requirements can range from $250K–$1M+ over 6–18 months. We provide detailed, transparent estimates after the discovery phase — broken down by feature, sprint, and role — so you know exactly where every dollar goes.' },
      { q: 'Do you require long-term contracts?', a: "No. For fixed-price projects, the contract covers the agreed scope and timeline — typically 2–6 months. For time-and-materials engagements, we require a minimum 4-week commitment with 2-week rolling notice for changes. For dedicated teams, we ask for a minimum 3-month commitment to justify the investment in team assembly and onboarding, with month-to-month continuation thereafter. We don't lock clients into multi-year contracts because we believe the quality of our work should earn your continued business, not a contract clause." },
      { q: 'What payment terms do you offer?', a: 'For fixed-price projects, we typically structure payments around milestones: 20% at project kickoff, then milestone-based payments tied to deliverable acceptance, with 10% held until final delivery and acceptance testing. For time-and-materials and dedicated team engagements, we bill monthly with net-15 payment terms. We accept wire transfers, ACH, and can accommodate purchase order processes for enterprise clients. For first-time engagements, we may request a retainer equal to one month\'s estimated spend.' },
      { q: 'Is there a free consultation before we commit?', a: "Yes. The initial 30-minute discovery call and subsequent follow-up conversations are completely free and carry no obligation. We'll invest the time to understand your project, provide preliminary architecture recommendations, and prepare a detailed proposal — all before you spend a dollar. We also offer free code audits for projects where you're considering bringing an existing codebase to us. We believe in earning your business through demonstrated expertise, not sales pressure." },
    ],
  },
  {
    category: 'Security & Compliance',
    questions: [
      { q: 'What security certifications does XTEC Global hold?', a: 'We maintain ISO 27001:2022 certification for our Information Security Management System and SOC 2 Type II compliance covering security, availability, and confidentiality. Our processes are assessed at CMMI Level 3 for development maturity. We also hold ISO 9001:2015 for quality management. All certifications are audited annually by independent third-party assessors. Copies of our certification documents are available upon request under NDA.' },
      { q: 'How do you protect our intellectual property and source code?', a: 'Every engagement includes full IP assignment — all code, designs, documentation, and deliverables are your property upon payment. We sign comprehensive NDAs before any technical discussions begin. Source code is hosted in your repositories (or dedicated private repos that transfer to you at project completion). Our employees and contractors sign individual IP assignment and confidentiality agreements. We do not reuse, repurpose, or retain any client-specific code or data after engagement completion.' },
      { q: 'Are your development practices compliant with GDPR, HIPAA, and PCI-DSS?', a: 'Yes. We have established compliance playbooks for GDPR (EU data protection), HIPAA (US healthcare data), and PCI-DSS (payment card data). These playbooks are integrated into our SDLC — from architecture design through testing and deployment. For healthcare clients, we implement end-to-end PHI encryption, access logging, and Business Associate Agreement (BAA) compliance. For fintech clients, we follow PCI-DSS Level 1 secure coding standards and maintain detailed audit trails. Our compliance expertise has been validated through multiple client audits.' },
      { q: 'What security testing do you perform during development?', a: "Security is embedded throughout our development lifecycle, not bolted on at the end. We conduct automated Static Application Security Testing (SAST) on every pull request, Dynamic Application Security Testing (DAST) in staging environments, and Software Composition Analysis (SCA) to identify vulnerabilities in open-source dependencies. For high-security projects, we perform manual penetration testing and threat modeling at key milestones. We also run quarterly security reviews on all active projects and maintain a responsible disclosure process for any vulnerabilities identified post-launch." },
      { q: 'How do you handle data access and employee security?', a: 'All XTEC employees undergo background verification before joining. Access to client systems follows the principle of least privilege — engineers only have access to the specific repositories, environments, and tools required for their role. We use multi-factor authentication on all internal and client-facing systems. Access is revoked immediately upon team changes. All workstations are managed with endpoint protection, disk encryption, and remote wipe capability. We maintain detailed access logs that are available to clients upon request.' },
    ],
  },
  {
    category: 'Post-Launch & Support',
    questions: [
      { q: 'What kind of support do you provide after a project goes live?', a: "We offer tiered post-launch support packages tailored to your needs. Our Standard Support includes bug fixes, security patches, and minor enhancements for 3 months post-launch at no additional cost — it's included in every project. Beyond that, we offer monthly maintenance retainers covering 24/7 monitoring, incident response, performance optimization, and feature enhancements. Our managed services team provides proactive monitoring with SLAs ranging from 99.9% to 99.99% uptime, with response times as fast as 15 minutes for critical issues." },
      { q: 'Can you handle ongoing feature development after the initial launch?', a: "Absolutely — and most of our clients continue working with us long after launch. Post-launch development typically transitions to either a time-and-materials arrangement (for periodic feature work) or a dedicated team model (for continuous product development). Our product teams maintain full context from the initial build, so there's no knowledge loss or ramp-up period. We also provide strategic input through quarterly product roadmap reviews where we help prioritize features based on user data, technical feasibility, and business impact." },
      { q: 'What is your SLA for production issues?', a: 'Our SLA tiers are structured by severity. Critical issues (system down, data loss risk) receive a 15-minute acknowledgment and 1-hour resolution target. High severity (major feature broken, significant user impact) gets a 30-minute acknowledgment and 4-hour resolution target. Medium severity (minor feature issues, workarounds available) has a 2-hour acknowledgment and 24-hour resolution target. Low severity (cosmetic issues, minor inconveniences) gets next-business-day resolution. All SLA commitments are backed by our 24/7 monitoring infrastructure with automated alerting through PagerDuty.' },
      { q: 'Do you provide training and knowledge transfer?', a: 'Yes — comprehensive knowledge transfer is a standard part of every project delivery. This includes detailed technical documentation (architecture guides, API documentation, deployment runbooks), recorded training sessions for your development and operations teams, and a structured handover period where our engineers pair with your team to transfer operational knowledge. For larger projects, we provide a dedicated 2–4 week knowledge transfer sprint with hands-on workshops, code walkthroughs, and shadowed incident responses.' },
      { q: 'What if we want to bring development in-house after working with XTEC?', a: "We fully support this transition and have helped several clients build and scale their internal engineering teams. Our transition support includes: documenting all architecture decisions and operational procedures, conducting knowledge transfer workshops with your new hires, providing pair programming sessions where your engineers work alongside ours, gradually reducing our involvement over a planned transition period (typically 2–3 months), and remaining available on a consultative basis for architecture reviews and technical guidance. We believe a great technology partner should make themselves less necessary over time, not more." },
    ],
  },
]

export default function FAQs() {
  const [activeTab, setActiveTab] = useState('All Questions')
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const filteredSections = useMemo(() => {
    let sections = activeTab === 'All Questions' ? faqSections : faqSections.filter(s => s.category === activeTab)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      sections = sections.map(s => ({
        ...s,
        questions: s.questions.filter(faq => faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q))
      })).filter(s => s.questions.length > 0)
    }
    return sections
  }, [activeTab, searchQuery])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden mesh-gradient pt-28 pb-16">
        <div className="blob w-72 h-72 bg-purple-400 top-5 right-20" />
        <div className="blob w-56 h-56 bg-pink-300 bottom-10 -left-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-purple-600 font-medium mb-4">Home &gt; FAQs</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Everything you need to know about working with XTEC Global — from engagement models and pricing to security practices and post-launch support. Can't find your answer? Reach out directly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-lg mx-auto relative"
          >
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for answers... (e.g., 'pricing', 'NDA', 'cloud migration')"
              className="w-full pl-11 pr-4 py-3.5 rounded-full border border-purple-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Tabs */}
      <section className="py-4 px-6 bg-white sticky top-20 z-30">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => { setActiveTab(t); setOpenFaq(null) }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === t
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
                    : 'bg-purple-50 text-gray-600 hover:bg-purple-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {filteredSections.map((section, si) => (
            <div key={section.category}>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6">{section.category}</h2>
              <div className="space-y-3">
                {section.questions.map((faq, qi) => {
                  const key = `${si}-${qi}`
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: qi * 0.03 }}
                      className="bg-white rounded-2xl shadow-sm border border-purple-100/50 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === key ? null : key)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                      >
                        <span className="font-heading font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                        <motion.span animate={{ rotate: openFaq === key ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown size={18} className="text-purple-500 flex-shrink-0" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openFaq === key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
          {filteredSections.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No results found for "{searchQuery}". Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Still Have Questions?</h2>
          <p className="text-lg text-purple-100 mb-4">Our team is happy to answer any questions not covered here. Whether you need technical clarification, want to discuss a specific use case, or just want to learn more about how we work — we're one message away.</p>
          <p className="text-sm text-purple-200 mb-8">Email: hello@xtecglobal.com | Phone: +91 98XXX XXXXX</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 bg-white text-purple-700 px-7 py-3.5 rounded-full font-semibold shadow-xl">
                <MessageSquare size={18} /> Contact Our Team
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors">
                <Calendar size={18} /> Schedule a Call
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
