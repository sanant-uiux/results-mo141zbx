import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  'Company': [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
    { label: 'FAQs', to: '/faqs' },
  ],
  'Services': [
    { label: 'Custom Software', to: '/services' },
    { label: 'Cloud & DevOps', to: '/services' },
    { label: 'AI & Data Analytics', to: '/services' },
    { label: 'Dedicated Teams', to: '/services' },
    { label: 'Cybersecurity', to: '/services' },
  ],
  'Resources': [
    { label: 'Case Studies', to: '/blog' },
    { label: 'Engineering Blog', to: '/blog' },
    { label: 'FAQs', to: '/faqs' },
    { label: 'Privacy Policy', to: '/faqs' },
    { label: 'Terms of Service', to: '/faqs' },
  ],
}

const socials = [
  { label: 'LinkedIn', url: '#' },
  { label: 'Twitter/X', url: '#' },
  { label: 'GitHub', url: '#' },
  { label: 'YouTube', url: '#' },
  { label: 'Instagram', url: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading font-extrabold text-2xl">
              <span className="text-purple-400">XTEC</span>
              <span className="text-white"> Global</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-sm">
              End-to-end IT consulting, custom software development, and digital transformation services that help enterprises scale faster, operate smarter, and stay ahead of disruption.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-purple-400" />
                <span>hello@xtecglobal.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-purple-400" />
                <span>+91 98XXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-purple-400" />
                <span>Sector 62, Noida, UP, India</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} XTEC Global Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map(s => (
              <a key={s.label} href={s.url} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
