"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FileText, Scale, Shield, Clock, AlertCircle, Handshake, FileCheck } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      icon: Scale,
      title: "Agreement to Terms",
      content: `By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.`
    },
    {
      icon: Shield,
      title: "Service Provision",
      content: `We provide healthcare services as described on our website. Services are subject to:
        • Professional medical assessment
        • Availability of healthcare providers
        • Compliance with local regulations
        • Insurance coverage requirements`
    },
    {
      icon: Clock,
      title: "Appointments and Cancellations",
      content: `• Appointments must be scheduled in advance
        • 24-hour notice required for cancellations
        • Late cancellations may incur fees
        • Repeated no-shows may result in service termination`
    },
    {
      icon: FileCheck,
      title: "Payment Terms",
      content: `• Payment is required at time of service
        • We accept major insurance plans
        • Co-payments are due at time of service
        • Uninsured patients must arrange payment before service`
    },
    {
      icon: AlertCircle,
      title: "Liability and Disclaimers",
      content: `• We strive to provide the highest quality care
        • Results cannot be guaranteed
        • We are not liable for indirect damages
        • Force majeure events may affect service delivery`
    },
    {
      icon: Handshake,
      title: "Patient Responsibilities",
      content: `Patients agree to:
        • Provide accurate medical information
        • Follow treatment plans
        • Maintain respectful behavior
        • Meet financial obligations
        • Comply with safety protocols`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 mb-8">
                <FileText className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Last Updated: April 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. These terms establish the rules and regulations for the use of our healthcare services.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-teal-100 rounded-full opacity-20"></div>
                        <section.icon className="h-8 w-8 text-teal-600 relative z-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                      <div className="text-gray-600 whitespace-pre-line">{section.content}</div>
                    </div>
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