import { Heart } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold">Caring Touchh</span>
            </div>
            <p className="text-sm text-gray-600">
              Professional and compassionate home nursing care services.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">Elderly Care</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">Post-Surgery Care</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">Medication Management</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">Daily Assistance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">1234 Care Street</li>
              <li className="text-sm text-gray-600">Nursingtown, NT 12345</li>
              <li className="text-sm text-gray-600">Phone: (555) 123-4567</li>
              <li className="text-sm text-gray-600">Email: care@caringtouch.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Caring Touchh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer