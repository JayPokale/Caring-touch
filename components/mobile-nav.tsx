"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Book Appointment', href: '/book' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col gap-4 py-4">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2 text-lg font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-teal-100 text-teal-900"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}