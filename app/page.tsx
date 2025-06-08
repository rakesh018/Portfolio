import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
  SiExpress,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiMysql,
} from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">
                  Software Engineer & Data Scientist
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Rakesh Bodapatla
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I craft exceptional digital experiences with code, creativity, and
              a passion for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-700 hover:text-zinc-400 hover:border-zinc-500"
                >
                  Contact Me
                </Button>
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/rakesh018"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/rakesh-bodapatla-157549220"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://x.com/Rakesh_1640"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:rakeshbodapatla27@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/profile.jpg?height=600&width=600"
                  alt="Shine Kyaw Kyaw Aung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  {/* <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate software engineer driven by curiosity and the
                  thrill of building things that work beautifully. I specialize
                  in backend development with Node.js and Redis, and I’ve been
                  exploring the world of machine learning to bring smarter, more
                  adaptive systems to life. While I love optimizing what’s under
                  the hood, I’m equally comfortable collaborating across the
                  stack. Give me a problem, and I’ll probably obsess over it
                  until it’s solved or until it starts solving itself.
                </p>
                {/* <p className="text-lg text-zinc-300 mt-4">
                  My journey in tech started with a strong foundation in
                  software development. I've worked with various companies to
                  create intuitive, performant, and accessible digital
                  experiences.
                </p> */}
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me exploring new
                  technologies, playing cricket, or catching up with friends and
                  family.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Rakesh Bodapatla</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm sm:text-base break-words">
                      rakeshbodapatla27@gmail.com
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Mancherial, Telangana</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <a
                    href="/Rakesh_Bodapatla_s_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-700 hover:bg-zinc-600 text-white w-full sm:w-auto">
                      Download Resume
                    </Button>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1K55GcKprKLNVxHe6AtBGtYKlzT2YTbHT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-700 hover:bg-zinc-600 text-white w-full sm:w-auto">
                      View Resume
                    </Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge
              name="React"
              icon={<FaReact className="text-cyan-400" />}
            />
            <SkillBadge
              name="Redis"
              icon={<FaReact className="text-white" />}
            />
            <SkillBadge
              name="JavaScript"
              icon={<SiJavascript className="text-yellow-400" />}
            />
            <SkillBadge
              name="TypeScript"
              icon={<SiJavascript className="text-blue-400" />}
            />
            <SkillBadge
              name="Tailwind"
              icon={<SiTailwindcss className="text-sky-400" />}
            />

            <SkillBadge
              name="Node.js"
              icon={<FaNodeJs className="text-green-500" />}
            />
            <SkillBadge
              name="Express.js"
              icon={<FaNodeJs className="text-gray-300" />}
            />
            <SkillBadge
              name="MongoDB"
              icon={<SiMongodb className="text-green-600" />}
            />

            <SkillBadge
              name="Python"
              icon={<FaPython className="text-blue-400" />}
            />
            <SkillBadge
              name="Git"
              icon={<FaGitAlt className="text-orange-500" />}
            />
            <SkillBadge
              name="GitHub"
              icon={<FaGitAlt className="text-white" />}
            />
            <SkillBadge
              name="Postman"
              icon={<FaReact className="text-orange-400" />}
            />
            <SkillBadge
              name="VS Code"
              icon={<FaReact className="text-blue-500" />}
            />
            <SkillBadge
              name="TensorFlow"
              icon={<SiTensorflow className="text-orange-400" />}
            />
            <SkillBadge
              name="PyTorch"
              icon={<SiPytorch className="text-red-500" />}
            />
            <SkillBadge
              name="SQL"
              icon={<SiMysql className="text-blue-500" />}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="MeetSync (In Progress)"
              description="Bringing friends together in the city by smartly matching their vibes, budget, distance, and all, so every meetup feels just right"
              tags={["React.js", "TypeScript", "MapsAPI", "Multi Objective Optimization"]}
              image="/meetsync.png?height=400&width=600"
            />
            <ProjectCard
              title="TinyGuard"
              description="An ultra-lightweight model distilled from a larger CNN, optimized to just 0.05KB using Knowledge Distillation for detecting compromised IoT devices in resource-constrained environments"
              tags={["SHAP", "PyTorch", "Knowledge Distillation"]}
              image="/iot-project.png?height=400&width=600"
              repoUrl="https://github.com/rakesh018/TinyGuard"
            />
            <ProjectCard
              title="Epileptic Seizure Detection"
              description="Hybrid CNN-TCN Model for Epileptic Seizure Detection from EEG Signals"
              tags={["Python", "PyTorch", "Feature Fusion"]}
              image="/epileptic.png?height=400&width=600"
              repoUrl="https://github.com/rakesh018/Epileptic-Seizure-Detection"
            />
            <ProjectCard
              title="Receipt Rocket"
              description="An end-to-end image processing pipeline that segments, corrects, and extracts receipt data, clean results without the overhead of machine learning."
              tags={["Python", "OpenCV", "Matplotlib", "Pillow"]}
              image="/receipt_rocket.png?height=400&width=600"
              repoUrl="https://github.com/rakesh018/Receipt-Rocket"
            />
            <ProjectCard
              title="Pneumonia Detection + XAI "
              description="An intelligent Pneumonia detector that aids medical professionals by identifying and highlighting the most likely affected regions enhancing diagnosis speed and confidence."
              tags={["Python", "LIME", "SHAP"]}
              image="/pneumonia.png?height=400&width=600"
              repoUrl="https://github.com/rakesh018/Pneumonia-Detection"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/portf.png?height=400&width=600"
              demoUrl="#"
              repoUrl="https://github.com/rakesh018/Portfolio"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="flex justify-center items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">
                      rakeshbodapatla27@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      https://www.linkedin.com/in/rakesh-bodapatla-157549220
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">
                      https://github.com/rakesh018
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            {/* <ContactForm /> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center mt-4">
            <p className="text-sm text-zinc-500">
              Made with <span className="text-pink-500">❤️</span> by{" "}
              <span className="font-semibold text-white">Rakesh</span>
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/rakesh018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rakesh-bodapatla-157549220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/Rakesh_1640"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:rakeshbodapatla27@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
