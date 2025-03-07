"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Stethoscope, Baby, Hospital, Activity, UserCog, Bed, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      title: "Elder Care",
      icon: UserCog,
      description: "Specialized care and support for elderly patients with compassion and dignity."
    },
    {
      title: "Post Operative Care",
      icon: Stethoscope,
      description: "Professional care and monitoring during post-surgery recovery period."
    },
    {
      title: "Mother and Baby Care",
      icon: Baby,
      description: "Specialized care for new mothers and infants during the postnatal period."
    },
    {
      title: "Palliative Care",
      icon: Heart,
      description: "Compassionate care focusing on comfort and quality of life for patients."
    },
    {
      title: "Patient Assistance",
      icon: Bed,
      description: "Daily assistance with medical and personal care needs."
    },
    {
      title: "Monitoring & Vital Checks",
      icon: Activity,
      description: "Regular monitoring of vital signs and health parameters."
    },
    {
      title: "Hospital Assistance",
      icon: Hospital,
      description: "Professional support during hospital stays and procedures."
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive care tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="group overflow-hidden h-full">
                <div className="p-6">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-teal-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <service.icon className="h-12 w-12 text-teal-600 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="text-teal-600 border-teal-200 hover:bg-teal-50 w-full" asChild>
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}