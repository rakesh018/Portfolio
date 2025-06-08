// "use client"

// import { motion } from "framer-motion"

// interface SkillBadgeProps {
//   name: string
//   level: number
// }

// export function SkillBadge({ name, level }: SkillBadgeProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50">
//         <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

//         <div className="relative">
//           <div className="text-center mb-4 font-medium text-lg">{name}</div>

//           <div className="relative h-2.5 w-full bg-zinc-700 rounded-full overflow-hidden">
//             <motion.div
//               className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: `${level}%` }}
//               transition={{ duration: 1, delay: 0.2 }}
//               viewport={{ once: true }}
//             />
//           </div>

//           <div className="mt-2 text-right text-sm text-zinc-400">{level}%</div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si"

interface SkillBadgeProps {
  name: string
  icon: ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-800 border border-purple-500/30 text-white text-sm font-medium backdrop-blur-md shadow-sm hover:shadow-purple-500/30 transition duration-300">
        {/* Glow ring on hover */}
        <div className="absolute inset-0 rounded-full bg-purple-500/10 blur opacity-0 hover:opacity-80 transition duration-500"></div>

        {/* Icon */}
        <span className="text-lg relative z-10">{icon}</span>

        {/* Skill Name */}
        <span className="relative z-10">{name}</span>
      </div>
    </motion.div>
  )
}
