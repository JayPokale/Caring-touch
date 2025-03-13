"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stethoscope, Baby, Hospital, Activity, UserCog, Bed, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Elder Care",
      icon: UserCog,
      description: "Specialized care and support for elderly patients with compassion and dignity.",
      features: [
        "24/7 personal care assistance",
        "Medication management",
        "Mobility assistance",
        "Companionship and emotional support",
        "Regular health monitoring"
      ]
    },
    {
      title: "Post Operative Care",
      icon: Stethoscope,
      description: "Professional care and monitoring during post-surgery recovery period.",
      features: [
        "Wound care and dressing changes",
        "Pain management",
        "Physical therapy assistance",
        "Vital signs monitoring",
        "Recovery progress tracking"
      ]
    },
    {
      title: "Mother and Baby Care",
      icon: Baby,
      description: "Specialized care for new mothers and infants during the postnatal period.",
      features: [
        "Newborn care education",
        "Breastfeeding support",
        "Post-natal recovery care",
        "Baby health monitoring",
        "Emotional support for new mothers"
      ]
    },
    {
      title: "Palliative Care",
      icon: Heart,
      description: "Compassionate care focusing on comfort and quality of life for patients.",
      features: [
        "Pain and symptom management",
        "Emotional and spiritual support",
        "Family counseling",
        "24/7 nursing care",
        "Coordinated care with physicians"
      ]
    },
    {
      title: "Patient Assistance",
      icon: Bed,
      description: "Daily assistance with medical and personal care needs.",
      features: [
        "Personal hygiene assistance",
        "Meal preparation",
        "Medication reminders",
        "Light housekeeping",
        "Transportation to appointments"
      ]
    },
    {
      title: "Monitoring & Vital Checks",
      icon: Activity,
      description: "Regular monitoring of vital signs and health parameters.",
      features: [
        "Blood pressure monitoring",
        "Temperature checks",
        "Heart rate monitoring",
        "Blood sugar testing",
        "Health status reporting"
      ]
    },
    {
      title: "Hospital Assistance",
      icon: Hospital,
      description: "Professional support during hospital stays and procedures.",
      features: [
        "Hospital stay companionship",
        "Communication with medical staff",
        "Personal care assistance",
        "Medication tracking",
        "Discharge planning support"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Healthcare Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional and compassionate care services tailored to meet your specific needs. Our experienced team is here to support you and your loved ones.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6 flex flex-col flex-1 h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <div className="absolute inset-0 bg-teal-100 rounded-full opacity-20"></div>
                        <service.icon className="h-12 w-12 text-teal-600 relative z-10" />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <ArrowRight className="h-4 w-4 text-teal-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 mt-auto" asChild>
                      <Link href="/book">Book This Service</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}