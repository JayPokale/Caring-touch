"use client"

import { Card } from "@/components/ui/card"
import { Medal, Shield, Clock, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  const features = [
    {
      icon: Medal,
      title: "Experienced Nurses",
      description: "Our nurses are highly qualified with years of experience"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock care when you need it most"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Treating patients with dignity and respect"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Caring Touch?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide exceptional care with a personal touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}