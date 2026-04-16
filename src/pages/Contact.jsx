import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Phone, Mail, MapPin, PhoneCall, Video, FileText, MessageCircle,
  Send, ChevronDown, Check
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDivider from '../components/WaveDivider'

const contactStrip = [
  { icon: Phone, label: 'Call Us', value: '+91 98XXX XXXXX', sub: 'Mon–Fri, 9 AM – 7 PM IST' },
  { icon: Mail, label: 'Email Us', value: 'hello@xtecglobal.com', sub: 'Response within 4 business hours' },
  { icon: MapPin, label: 'Visit Us', value: 'Noida, Uttar Pradesh, India', sub: 'By appointment only' },
]

const contactMethods = [
  { icon: PhoneCall, title: 'Schedule a Call', desc: "Book a 30-minute introductory call with a solution architect. We'll discuss your challenges, explore options, and determine if there's a fit — no commitment required.", cta: 'Pick a Time Slot' },
  { icon: Video, title: 'Request a Live Demo', desc: "See our engineering process and past project demos in a personalized 45-minute video call. We'll walk you through relevant case studies and answer technical questions live.", cta: 'Request a Demo' },
  { icon: FileText, title: 'Submit an RFP', desc: "Have a formal Request for Proposal? Send it to rfp@xtecglobal.com and we'll respond with a detailed technical proposal and commercial quote within 5 business days.", cta: 'Email Your RFP' },
  { icon: MessageCircle, title: 'WhatsApp Us', desc: 'For quick questions or to share project briefs on the go, message us directly on WhatsApp. Available during business hours (9 AM – 7 PM IST, Monday–Friday).', cta: 'Open WhatsApp Chat' },
]

const faqs = [
  { q: 'How quickly can you start on a new project?', a: 'For fixed-price projects, we typically begin within 2–3 weeks of contract signing, allowing time for team assembly and onboarding. For dedicated team engagements, our average ramp-up time is 12 business days. If you have an urgent timeline, let us know during our initial call — we maintain a bench of senior engineers ready for rapid deployment.' },
  { q: 'Do you sign NDAs before discussing project details?', a: "Absolutely. We're happy to sign a mutual NDA before any technical discussions begin. We have a standard NDA template ready to go, or we can review and sign yours. Protecting your intellectual property and confidential information is a baseline expectation, not a special request." },
  { q: 'What time zones do your teams work in?', a: 'Our primary operations are in IST (UTC+5:30), but we structure team schedules to guarantee a minimum 4-hour daily overlap with US Eastern, US Pacific, UK/EU, and APAC time zones. Many of our engineers work flexible hours specifically to align with client schedules. For dedicated teams, we can customize overlap windows to match your standup and meeting cadence.' },
  { q: 'Can we visit your office or meet the team in person?', a: "Yes — we welcome client visits at our Noida office. We also travel to client locations for project kickoffs, quarterly reviews, and key milestones. For international clients, we typically conduct an in-person kickoff workshop at the start of the engagement, followed by regular video calls. Let us know your preference and we'll arrange accordingly." },
  { q: 'What happens after I submit this form?', a: "Within 4 business hours, a member of our business development team will review your submission and send you a personalized response. If your inquiry is a fit, we'll schedule a 30-minute discovery call with a solution architect to discuss your requirements in detail. There's never any obligation or pressure — the first conversation is simply about understanding your needs and exploring if we can help." },
]

const socials = [
  { label: 'LinkedIn', color: '#0077B5' },
  { label: 'Twitter/X', color: '#000000' },
  { label: 'GitHub', color: '#333333' },
  { label: 'YouTube', color: '#FF0000' },
  { label: 'Instagram', color: '#E4405F' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mesh-gradient pt-28 pb-16">
        <div className="blob w-72 h-72 bg-purple-400 -top-10 right-0" />
        <div className="blob w-56 h-56 bg-pink-300 bottom-0 left-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-purple-600 font-medium mb-4">Home &gt; Contact</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
          >
            Let's Start a{' '}
            <span className="gradient-text">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Whether you have a detailed RFP or just an idea on a napkin — we're ready to listen. Reach out through any channel below, and a real human (not a chatbot) will respond within 4 business hours.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {contactStrip.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-purple-100/50"
              >
                <c.icon size={24} className="text-purple-600 mb-2" />
                <p className="text-xs text-gray-500 font-medium">{c.label}</p>
                <p className="font-heading font-semibold text-gray-900 text-sm mt-1">{c.value}</p>
                <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading
          title="Send Us a Message"
          subtitle="Fill out the form below and one of our solution consultants will get back to you within one business day."
        />
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-600" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Message Sent Successfully!</h3>
                <p className="text-gray-600">We'll respond within 1 business day. Thank you for reaching out!</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                    { label: 'Business Email', type: 'email', placeholder: 'john@company.com', required: true },
                    { label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
                    { label: 'Company Name', type: 'text', placeholder: 'Acme Corp', required: true },
                  ].map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label} {f.required && <span className="text-pink-500">*</span>}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm transition-shadow"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Job Title</label>
                    <input type="text" placeholder="VP of Engineering" className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Interested In <span className="text-pink-500">*</span></label>
                    <select required className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm bg-white">
                      <option value="">Select a service...</option>
                      <option>Custom Software Development</option>
                      <option>Cloud Solutions & DevOps</option>
                      <option>AI & Data Analytics</option>
                      <option>Dedicated Development Teams</option>
                      <option>Cybersecurity & Compliance</option>
                      <option>Not Sure — Need Guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm bg-white">
                    <option value="">Select budget range...</option>
                    <option>Under $25K</option>
                    <option>$25K – $75K</option>
                    <option>$75K – $200K</option>
                    <option>$200K – $500K</option>
                    <option>$500K+</option>
                    <option>Prefer Not to Say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell Us About Your Project <span className="text-pink-500">*</span></label>
                  <textarea
                    placeholder="Describe your project goals, technical challenges, timeline expectations, and any specific requirements..."
                    required
                    minLength={50}
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-purple-300/30 hover:shadow-2xl transition-shadow"
                >
                  <Send size={18} /> Send Your Inquiry
                </motion.button>

                <p className="text-xs text-gray-400 text-center">We'll respond within 1 business day. Your information is protected under our Privacy Policy and will never be shared with third parties.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      <WaveDivider color="#faf5ff" />

      {/* Map & Address */}
      <section className="py-20 px-6 bg-purple-50">
        <SectionHeading title="Our Office" />
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100/50">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">XTEC Global Technologies Pvt. Ltd.</h3>
              <p className="text-gray-600 text-sm mb-4">Sector 62, Noida<br />Uttar Pradesh 201301, India</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Nearest Metro:</strong> Noida Sector 62 (Blue Line)</p>
                <p><strong>Parking:</strong> Visitor parking available at the building</p>
                <p><strong>Hours:</strong> Monday – Friday, 9:00 AM – 7:00 PM IST</p>
                <p><strong>Note:</strong> Meetings by appointment only — please schedule in advance</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] lg:h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Office location map view"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-white">
        <SectionHeading title="Other Ways to Reach Us" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100/50 border-t-4 border-t-purple-500"
            >
              <c.icon size={28} className="text-purple-600 mb-4" />
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>
              <span className="inline-flex items-center gap-1 text-purple-600 font-semibold text-sm cursor-pointer hover:text-pink-500 transition-colors">
                {c.cta} <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider color="#faf5ff" />

      {/* FAQ */}
      <section className="py-20 px-6 bg-purple-50">
        <SectionHeading title="Quick Answers" />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-sm border border-purple-100/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-heading font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={18} className="text-purple-500 flex-shrink-0" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading font-bold text-xl text-gray-900 mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-gray-600 hover:text-white transition-colors text-sm font-bold"
                style={{ '--hover-bg': s.color }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = s.color }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '' }}
              >
                {s.label.charAt(0)}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-purple-950">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">Prefer a Direct Conversation?</h2>
          <p className="text-gray-300 mb-6">Skip the form — call us directly at +91 98XXX XXXXX or email hello@xtecglobal.com. We're real people who answer real questions.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 mx-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-3.5 rounded-full font-semibold shadow-xl">
            <Phone size={18} /> Call Us Now
          </motion.button>
        </motion.div>
      </section>
    </>
  )
}
