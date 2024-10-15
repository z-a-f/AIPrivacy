"use client"
import React from "react"
import "./Presentation.css"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Shield, Brain, AlertTriangle, Scale, ShieldCheck, Lightbulb } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Button } from "react-native"
import Button from "@mui/material/Button"


const slides = [
  {
    title: "Privacy Concerns in LLMs",
    subtitle: "Understanding the Risks and Mitigation Strategies",
    content: "A presentation for non-technical audiences",
    icon: Shield,
  },
  {
    title: "What is an LLM?",
    content: [
      "Large Language Model",
      "AI trained on vast amounts of text data",
      "Can generate human-like text and understand context",
      "Examples: GPT-3, BERT, LaMDA",
    ],
    icon: Brain,
  },
  {
    title: "Potential Privacy Issues",
    content: [
      "Data used for training may contain personal information",
      "Models might memorize and reproduce sensitive data",
      "Potential for unintended information disclosure",
      "Risk of re-identification from anonymized data",
    ],
    icon: AlertTriangle,
  },
  {
    title: "Implications",
    content: [
      "Breach of personal privacy",
      "Unauthorized access to sensitive information",
      "Potential misuse of personal data",
      "Legal and ethical concerns",
    ],
    icon: Scale,
  },
  {
    title: "Common Mitigation Strategies",
    content: [
      "Data anonymization and de-identification",
      "Differential privacy techniques",
      "Federated learning",
      "Regular audits and testing for data leakage",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Recommendations",
    content: [
      "Implement strong data governance policies",
      "Use privacy-preserving techniques in AI development",
      "Conduct regular privacy impact assessments",
      "Educate users about potential risks and best practices",
    ],
    icon: Lightbulb,
  },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const IconComponent = slides[currentSlide].icon

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-4xl aspect-video bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col justify-center p-8"
        >
          <div className="flex items-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="bg-primary rounded-full p-3 mr-4"
            >
              <IconComponent className="w-8 h-8" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
              {slides[currentSlide].subtitle && (
                <h3 className="text-xl text-gray-400">{slides[currentSlide].subtitle}</h3>
              )}
            </div>
          </div>
          {typeof slides[currentSlide].content === "string" ? (
            <p className="text-lg">{slides[currentSlide].content}</p>
          ) : (
            <ul className="list-disc list-inside space-y-2">
              {(slides[currentSlide].content as string[]).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-lg"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button variant="outlined" size="large" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outlined" size="large" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 text-sm text-gray-400">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  )
}
