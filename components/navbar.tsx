"use client"

import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import MobileNav from "./mobile-nav"
import { motion } from "framer-motion"

const Navbar = () => {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Book Appointment', href: '/book' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Heart className="h-8 w-8 text-teal-600 group-hover:text-teal-700 transition-colors" />
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                Caring Touchh
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button 
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={cn(
                    "text-sm font-medium px-4",
                    pathname === item.href && "bg-teal-600 text-white hover:bg-teal-700",
                    pathname !== item.href && "text-gray-600 hover:text-teal-600"
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          <MobileNav />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar