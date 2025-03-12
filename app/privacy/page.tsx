"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, UserCheck, Bell, Database, Scale } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:
        • Personal identification information
        • Contact information
        • Medical history and health information
        • Insurance information
        • Payment information`
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: `Your information is used for:
        • Providing healthcare services
        • Processing payments
        • Communicating about your care
        • Improving our services
        • Legal compliance`
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: `We may share your information with:
        • Healthcare providers involved in your care
        • Insurance companies for billing
        • Legal authorities when required by law
        • Business partners with appropriate safeguards`
    },
    {
      icon: Database,
      title: "Data Storage and Security",
      content: `We implement appropriate security measures to protect your information:
        • Encryption of sensitive data
        • Secure servers and networks
        • Regular security audits
        • Staff training on data protection`
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: `You have the right to:
        • Access your personal information
        • Request corrections to your data
        • Request deletion of your data
        • Opt-out of certain data sharing
        • File a complaint about data handling`
    },
    {
      icon: Bell,
      title: "Updates to Privacy Policy",
      content: "We may update this privacy policy periodically. We will notify you of any material changes by posting the new policy on this page."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      content: "We comply with all applicable laws and regulations regarding healthcare privacy and data protection, including HIPAA requirements."
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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