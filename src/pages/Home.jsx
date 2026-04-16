import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, Cloud, ShieldCheck, Users, BrainCircuit, Headphones,
  Building2, CalendarCheck, CheckCircle, Heart, Globe,
  MessageSquare, PenTool, Code, Rocket, Star, Calendar, Download
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDivider from '../components/WaveDivider'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

const whyCards = [
  { icon: Code2, title: 'Full-Stack Engineering Excellence', desc: 'Our team of 150+ certified engineers builds robust, scalable applications using modern stacks — React, Node.js, Python, .NET, and cloud-native architectures. From MVPs to enterprise-grade platforms, we write clean, maintainable code that stands the test of time.' },
  { icon: Cloud, title: 'Cloud & Infrastructure Mastery', desc: 'AWS Advanced Partner, Azure Gold Certified, and Google Cloud experts. We architect multi-cloud environments, handle seamless migrations, and optimize infrastructure costs — saving our clients an average of 34% on cloud spend annually.' },
  { icon: ShieldCheck, title: 'Enterprise-Grade Security', desc: 'ISO 27001 certified with SOC 2 Type II compliance. Every solution we deliver undergoes rigorous penetration testing, code audits, and vulnerability assessments. Your data and operations are protected by industry-leading security protocols.' },
  { icon: Users, title: 'Dedicated Offshore & Hybrid Teams', desc: 'Scale your engineering capacity with our dedicated team model. Whether you need 3 developers or 30, we provide pre-vetted, culturally aligned professionals who integrate seamlessly with your existing workflows and tools.' },
  { icon: BrainCircuit, title: 'AI & Data Intelligence', desc: "Unlock the value hidden in your data with our machine learning pipelines, predictive analytics dashboards, and natural language processing solutions. We've deployed AI systems processing over 2 million data points daily for Fortune 500 clients." },
  { icon: Headphones, title: '24/7 Managed Support', desc: 'Our global support operations center provides round-the-clock monitoring, incident response, and proactive maintenance. With a 99.95% uptime SLA and average response time under 12 minutes, your systems are always in safe hands.' },
]

const services = [
  { title: 'Custom Software Development', desc: 'We design and build bespoke software solutions — web applications, mobile platforms, SaaS products, and enterprise systems — engineered for performance, scalability, and user adoption. Our Agile delivery process ensures you see working software every two weeks, with full transparency through sprint demos and burndown tracking.', cta: 'Discuss Your Project', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { title: 'Digital Transformation Consulting', desc: 'Legacy systems holding you back? We assess your current technology landscape, identify modernization opportunities, and execute phased transformation roadmaps. From monolith-to-microservices migration to process automation and API-first strategies, we help enterprises evolve without disrupting operations.', cta: 'Get Your Free Assessment', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
  { title: 'Cloud Migration & DevOps', desc: 'Migrate to AWS, Azure, or Google Cloud with zero downtime using our battle-tested migration framework. We implement CI/CD pipelines, Infrastructure as Code (Terraform, Pulumi), container orchestration (Kubernetes, Docker), and automated monitoring — reducing deployment cycles from weeks to hours.', cta: 'Plan Your Migration', img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80' },
]

const stats = [
  { icon: Building2, num: '300+', label: 'Enterprise Clients Served' },
  { icon: CalendarCheck, num: '12+', label: 'Years of Industry Experience' },
  { icon: CheckCircle, num: '1,200+', label: 'Projects Delivered Successfully' },
  { icon: Heart, num: '98.7%', label: 'Client Retention Rate' },
  { icon: Globe, num: '25', label: 'Countries with Active Deployments' },
]

const steps = [
  { icon: MessageSquare, num: '01', title: 'Discovery & Strategy', desc: 'We start with a deep-dive workshop to understand your business objectives, technical constraints, user personas, and competitive landscape. The output is a comprehensive project blueprint with architecture recommendations, timeline, and investment breakdown.' },
  { icon: PenTool, num: '02', title: 'Design & Prototyping', desc: "Our UX/UI team creates wireframes, interactive prototypes, and high-fidelity mockups validated through user testing. You'll see and interact with your product before a single line of production code is written." },
  { icon: Code, num: '03', title: 'Agile Development & QA', desc: 'Development proceeds in two-week sprints with daily standups, sprint reviews, and continuous integration. Our QA engineers run automated and manual tests in parallel, ensuring every release meets our 99.5% bug-free deployment standard.' },
  { icon: Rocket, num: '04', title: 'Launch & Continuous Improvement', desc: 'We handle production deployment, performance optimization, and post-launch monitoring. After go-live, our team provides ongoing maintenance, feature enhancements, and quarterly performance reviews to keep your platform evolving.' },
]

const testimonials = [
  { quote: "XTEC Global rebuilt our entire logistics platform in under 6 months. The new system handles 40,000 daily transactions with zero downtime. Their engineering team felt like an extension of our own — always responsive, always pushing for better solutions.", name: 'Marcus Reinhardt', role: 'VP of Technology', company: 'FreightLink Europe GmbH', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { quote: "We evaluated seven vendors before choosing XTEC. Their cloud migration approach was the most methodical — they moved 14 legacy applications to AWS without a single hour of unplanned downtime. Our infrastructure costs dropped 41% in the first year.", name: 'Priya Venkatesh', role: 'Chief Information Officer', company: 'Meridian Health Systems', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80' },
  { quote: "The AI-powered demand forecasting tool XTEC built for us reduced our inventory waste by 28% and improved order fulfillment accuracy to 99.2%. Their data science team truly understood our supply chain challenges and delivered a solution that paid for itself within three months.", name: 'David Okonkwo', role: 'Director of Supply Chain Operations', company: 'Atlas Retail Group', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
  { quote: "XTEC's dedicated team model saved us from a critical staffing crisis. Within three weeks, they onboarded a team of 8 senior developers who ramped up faster than any contractors we've ever worked with. They shipped our mobile banking app two weeks ahead of schedule.", name: 'Sarah Lindqvist', role: 'Head of Digital Products', company: 'NordicPay Financial', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' },
]

const blogPosts = [
  { title: 'Why 73% of Cloud Migrations Fail — and How to Be in the Other 27%', date: 'April 8, 2026', category: 'Cloud & Infrastructure', excerpt: "Most cloud migration failures aren't technical — they're strategic. After leading 180+ successful migrations, we've identified the five critical planning gaps that derail enterprise cloud initiatives and the framework we use to avoid them.", img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' },
  { title: 'Building AI-Ready Data Pipelines: A Practical Guide for Enterprise Teams', date: 'March 22, 2026', category: 'AI & Data', excerpt: 'Your AI models are only as good as the data feeding them. This guide walks through the architecture decisions, tooling choices, and governance practices that separate production-grade ML pipelines from experimental prototypes.', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80' },
  { title: 'The True Cost of Technical Debt: How One Client Saved $2.4M by Modernizing Early', date: 'March 5, 2026', category: 'Digital Transformation', excerpt: 'A mid-market insurance company was spending 68% of its IT budget on maintaining legacy COBOL systems. Here\'s how we helped them modernize incrementally, reduce maintenance costs by 71%, and free their engineering team to innovate.', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-24 pb-16">
        <div className="blob w-96 h-96 bg-purple-400 top-10 -left-20" />
        <div className="blob w-80 h-80 bg-pink-300 bottom-20 right-10" />
        <div className="blob w-64 h-64 bg-orange-200 top-1/2 left-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-5 py-2 mb-8 text-sm font-medium text-purple-700 shadow-sm border border-purple-100"
          >
            Trusted by 300+ enterprises across 25 countries since 2014
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-gray-900 leading-tight mb-6"
          >
            Engineering Tomorrow's{' '}
            <span className="gradient-text">Technology Solutions</span> — Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            XTEC Global delivers end-to-end IT consulting, custom software development, and digital transformation services that help enterprises scale faster, operate smarter, and stay ahead of disruption.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-purple-300/30 hover:shadow-2xl hover:shadow-purple-400/40 transition-shadow"
              >
                Schedule a Free Consultation
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-purple-700 px-8 py-4 rounded-full font-semibold text-lg border border-purple-200 hover:border-purple-300 transition-colors"
              >
                Explore Our Solutions <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
              alt="Modern tech command center"
              className="rounded-3xl shadow-2xl shadow-purple-300/20 w-full max-w-4xl mx-auto animate-float"
            />
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Why Choose XTEC */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading
          title="Why Leading Enterprises Choose XTEC Global"
          subtitle="We combine deep technical expertise with strategic business thinking to deliver solutions that don't just work — they transform."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyCards.map((c, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="card-gradient-border h-full">
                <div className="p-7 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-5">
                    <c.icon size={26} className="text-purple-600" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <WaveDivider color="#faf5ff" />

      {/* Services Overview */}
      <section className="py-20 px-6 bg-purple-50">
        <SectionHeading
          title="Solutions That Drive Real Business Impact"
          subtitle="From strategy to execution, we deliver technology solutions tailored to your industry and growth stage."
        />
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10`}
            >
              <div className="lg:w-1/2">
                <img src={s.img} alt={s.title} className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-pink-500 transition-colors">
                  {s.cta} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <SectionHeading title="The Numbers Behind Our Impact" light />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <s.icon size={28} className="text-purple-400 mx-auto mb-3" />
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-1">{s.num}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading
          title="From Vision to Launch in 4 Steps"
          subtitle="Our proven delivery methodology ensures clarity at every stage — no surprises, no scope creep, no wasted budget."
        />
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:block relative h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-200 rounded-full mb-16 mx-16" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <motion.div
                  whileInView={{ scale: [1, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-purple-300/30"
                >
                  <s.icon size={24} className="text-white" />
                </motion.div>
                <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">Step {s.num}</span>
                <h3 className="font-heading font-bold text-lg text-gray-900 mt-2 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#faf5ff" />

      {/* Testimonials */}
      <section className="py-20 px-6 bg-purple-50">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't take our word for it — hear from the enterprises we've helped transform."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-gradient-border h-full">
                <div className="p-7 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-heading font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%), linear-gradient(150deg, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%)', backgroundSize: '40px 40px' }} />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Accelerate Your Digital Future?</h2>
          <p className="text-lg text-purple-100 mb-8">Join 300+ enterprises who trust XTEC Global to deliver mission-critical technology solutions. Let's discuss how we can help you build, scale, and transform.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 bg-white text-purple-700 px-7 py-3.5 rounded-full font-semibold shadow-xl">
                <Calendar size={18} /> Book a Strategy Call
              </motion.button>
            </Link>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors">
              <Download size={18} /> Download Our Capabilities Deck
            </motion.button>
          </div>
        </motion.div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Blog Teaser */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading
          title="Insights & Perspectives"
          subtitle="Expert analysis on technology trends, digital strategy, and engineering best practices from our leadership team."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100/50 group"
            >
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">{p.category}</span>
                <h3 className="font-heading font-bold text-lg text-gray-900 mt-2 mb-3 line-clamp-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{p.date}</span>
                  <Link to="/blog" className="text-sm text-purple-600 font-semibold hover:text-pink-500 flex items-center gap-1 transition-colors">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
