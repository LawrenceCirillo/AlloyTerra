import PageBackground from '../../components/PageBackground'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Bot, HeadsetIcon, Workflow, Lightbulb, BarChart } from 'lucide-react'

const items = [
  {
    title: "AI Sales Automation",
    description: "Automate your entire sales process with AI-powered virtual agents that engage prospects, qualify leads, and close deals 24/7.",
    className: "row-span-2",
    icon: <Bot className="w-4 h-4 text-blue-500" />
  },
  {
    title: "Customer Service AI",
    description: "Provide instant, intelligent support to your customers with AI-powered chatbots and virtual assistants.",
    className: "col-span-2",
    icon: <HeadsetIcon className="w-4 h-4 text-blue-500" />
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent workflow automation.",
    icon: <Workflow className="w-4 h-4 text-blue-500" />
  },
  {
    title: "AI Strategy Consulting",
    description: "Expert guidance on implementing AI solutions that drive growth.",
    className: "col-span-2",
    icon: <Lightbulb className="w-4 h-4 text-blue-500" />
  },
  {
    title: "AI Analytics",
    description: "Turn data into actionable insights with our advanced analytics platform.",
    icon: <BarChart className="w-4 h-4 text-blue-500" />
  },
]

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PageBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative bg-[#EDF2FE] pt-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/field2.png"
              alt="Solar field"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-8 text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                Our Services
              </h1>
              <p className="text-xl font-roboto text-white text-center mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                Comprehensive AI solutions for renewable energy businesses
              </p>
            </div>
            {/* Horizontal Divider */}
            <div className="absolute bottom-0 w-full space-y-2">
              <div className="h-px bg-black/10 w-full"></div>
              <div className="h-px bg-black/10 w-full"></div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <BentoGrid items={items} className="mx-auto" />
          </div>
        </section>
      </div>
    </main>
  )
}
