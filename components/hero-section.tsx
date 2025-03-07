"use client"

import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Qualified Nurses", value: "50+" },
    { label: "Satisfied Patients", value: "1000+" },
    { label: "Available Cities", value: "10+" }
  ]

  return (
    <section className="relative bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 mb-8"
            >
              <Heart className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Trusted Healthcare Provider</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
            >
              Professional
              <span className="block text-teal-600">Home Care</span>
              <span className="block">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8 text-gray-600 leading-relaxed"
            >
              Bringing professional medical care to your doorstep. Available 24/7 for all your healthcare needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-teal-600 hover:bg-teal-700 text-white" 
                asChild
              >
                <Link href="/book" className="flex items-center">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-teal-200 text-teal-700 hover:bg-teal-50" 
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-teal-100"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-teal-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}