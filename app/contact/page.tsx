"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast.success("Message Sent!", {
      description: "We'll get back to you as soon as possible.",
    })
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "care@caringtouchh.com",
        "support@caringtouchh.com"
      ]
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "1234 Care Street",
        "Nursingtown, NT 12345"
      ]
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "24/7 Emergency Care",
        "Office: 9:00 AM - 6:00 PM"
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our services? We&#39;re here to help. Contact us through any of the channels below or fill out the form.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-100 rounded-full opacity-20"></div>
                      <info.icon className="h-8 w-8 text-teal-600 relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
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
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
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
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="h-32"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}