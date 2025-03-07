"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="bg-teal-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book an appointment today and experience the Caring Touch difference.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-teal-50" asChild>
            <Link href="/book">Schedule a Visit</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}