"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Heart, Award, Users, Globe, Target, Sparkles } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with dignity, respect, and genuine concern for their well-being."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of healthcare service and professional conduct."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Our approach focuses on individual needs and preferences for personalized care."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality healthcare accessible to all communities we serve."
    }
  ]

  const milestones = [
    {
      year: "2010",
      title: "Founded",
      description: "Started with a small team of dedicated nurses"
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Expanded services to cover multiple cities"
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Received Healthcare Excellence Award"
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Introduced advanced home care technologies"
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Caring Touchh</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated to providing exceptional healthcare services with compassion and professionalism since 2010.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide our service and care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-100 rounded-full opacity-20"></div>
                      <value.icon className="h-8 w-8 text-teal-600 relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  To provide exceptional healthcare services that enhance the quality of life for our patients, delivered with compassion, expertise, and dedication to excellence.
                </p>
                <div className="flex items-center mb-4">
                  <Sparkles className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600">
                  To be the leading provider of comprehensive healthcare services, recognized for our commitment to quality care, innovation, and positive patient outcomes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 font-bold">
                      {milestone.year}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}