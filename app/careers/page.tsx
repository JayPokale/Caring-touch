"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { toast } from "sonner"
import { Briefcase, GraduationCap, Heart, Shield, Users } from "lucide-react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    qualifications: "",
    about: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Application Submitted!", {
      description: "We'll review your application and get back to you soon.",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      qualifications: "",
      about: ""
    })
  }

  const positions = [
    "Registered Nurse",
    "Licensed Practical Nurse",
    "Certified Nursing Assistant",
    "Home Health Aide",
    "Care Coordinator",
    "Physical Therapist"
  ]

  const experienceLevels = [
    "0-1 years",
    "1-3 years",
    "3-5 years",
    "5-10 years",
    "10+ years"
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Healthcare Benefits",
      description: "Comprehensive medical, dental, and vision coverage for you and your family"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement programs"
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Work with experienced professionals in a collaborative environment"
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable employment with a growing healthcare provider"
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
                <Briefcase className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Join Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Careers at Caring Touchh</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make a difference in people&#39;s lives. Join our team of dedicated healthcare professionals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-100 rounded-full opacity-20"></div>
                      <benefit.icon className="h-8 w-8 text-teal-600 relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Select
                      value={formData.position}
                      onValueChange={(value) => setFormData({ ...formData, position: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="qualifications">Qualifications</Label>
                    <Textarea
                      id="qualifications"
                      value={formData.qualifications}
                      onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                      placeholder="List your relevant qualifications, certifications, and licenses"
                      className="h-32"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="about">About You</Label>
                    <Textarea
                      id="about"
                      value={formData.about}
                      onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                      placeholder="Tell us about yourself and why you'd like to join our team"
                      className="h-32"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Submit Application
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}