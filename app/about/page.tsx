import PageBackground from '../../components/PageBackground'
import Image from 'next/image'

export default function About() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <PageBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative bg-[#EDF2FE] pt-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/field1.png"
              alt="Solar field"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-8 text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                About AlloyTerra
              </h1>
              <p className="text-xl font-roboto text-white text-center mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                Transforming renewable energy businesses through AI innovation
              </p>
            </div>
          </div>
          {/* Horizontal Divider */}
          <div className="absolute bottom-0 w-full space-y-2">
            <div className="h-px bg-black/10 w-full"></div>
            <div className="h-px bg-black/10 w-full"></div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-poppins font-bold text-[#001C96] mb-6">
                    Our Mission
                  </h2>
                  <p className="font-roboto text-gray-700 leading-relaxed">
                    AlloyTerra Group transforms renewable energy businesses through strategic AI implementation and automation. We partner with energy companies to revolutionize their operations using cutting-edge AI platforms and automation tools that create seamless, high-performing business systems.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-poppins font-bold text-[#001C96] mb-6">
                    Our Expertise
                  </h2>
                  <p className="font-roboto text-gray-700 leading-relaxed">
                    Our core expertise lies in developing sophisticated, automated customer acquisition funnels that operate 24/7, utilizing AI-powered agents that serve as virtual sales representatives. These systems handle everything from initial prospect engagement to final conversion, creating a frictionless experience for both businesses and their clients.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-poppins font-bold text-[#001C96] mb-6">
                    Our Impact
                  </h2>
                  <p className="font-roboto text-gray-700 leading-relaxed">
                    At AlloyTerra, we measure our success through the operational efficiency and growth we bring to our clients' businesses, building the future of renewable energy sales one automated workflow at a time.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 group">
                    <div className="text-4xl font-poppins font-bold text-[#27ACEF] mb-2 group-hover:text-[#00D451] transition-colors duration-300">
                      24/7
                    </div>
                    <p className="font-roboto text-gray-700">
                      Automated Operations
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 group">
                    <div className="text-4xl font-poppins font-bold text-[#27ACEF] mb-2 group-hover:text-[#00D451] transition-colors duration-300">
                      100%
                    </div>
                    <p className="font-roboto text-gray-700">
                      Renewable Focus
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 group">
                    <div className="text-4xl font-poppins font-bold text-[#27ACEF] mb-2 group-hover:text-[#00D451] transition-colors duration-300">
                      AI-First
                    </div>
                    <p className="font-roboto text-gray-700">
                      Approach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
