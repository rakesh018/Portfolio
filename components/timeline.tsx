"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Data Scientist Intern",
    company: "Fibe (Formerly Early Salary)",
    period: "May 2025 - July 2025",
    description:
    "Research and development on state-of-the-art DeepFake image generation using Generative Adversarial Networks(GANs) and Stable Diffusion models, alongside simulating  attacks to evaluate system robustness. Engineered advanced detection frameworks to safeguard Fibe’s VKYC (Video KYC) pipeline against synthetic identity threats, leveraging Vision Transformers and Swin Transformers for high-accuracy deepfake detection"  },
  {
    title: "Backend Developer",
    company: "Syncore Labs (formerly Triveda)",
    period: "July 2024 - October 2024",
    description:
    "Built and optimized a real-time gaming platform supporting 10,000+ concurrent users on a t3.micro instance using Node.js, Redis, and Socket.IO. Conducted extensive load testing with Artillery to validate performance under high concurrency. Achieved 6x faster response times using BullMQ queues and reduced database load by 40% through Redis caching. Implemented WebSocket namespaces for efficient real-time updates across user groups. Deployed on AWS EC2 with S3 integration for scalable and reliable infrastructure"

  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
