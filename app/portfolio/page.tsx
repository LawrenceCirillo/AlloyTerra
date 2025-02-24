import PageBackground from '../../components/PageBackground'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <PageBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative bg-[#EDF2FE] pt-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/field3.png"
              alt="Solar field"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <h1 className="text-4xl md:text-5xl font-clash-grotesk-bold font-bold text-white mb-8 text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                Our Portfolio
              </h1>
              <p className="text-xl font-clash-grotesk font-bold text-white text-center mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                See how we've helped renewable energy companies transform their operations
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Principle Labs */}
              <div className="bg-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="text-[#0588F0] w-14 h-14 relative mr-4">
                    <Image
                      src="/plabs.svg"
                      alt="Principle Labs Logo"
                      width={56}
                      height={56}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold font-bold text-black font-rockwell">
                    Principle Labs
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Exploring human knowledge through emotional indexing
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0588F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Measures human intelligence
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0588F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Uses RLHF techniques
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0588F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tracks emotional wellbeing
                  </li>
                </ul>
              </div>

              {/* SalesProAI */}
              <div className="bg-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 relative">
                    <Image
                      src="/spai.png"
                      alt="SalesProAI Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold font-bold text-black font-figtree">
                    SalesProAI
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Helping Sales Professionals earn more with an AI assistant
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0588F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pitch feedback and analysis
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0588F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sales resistance detection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0588F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Performance tracking & management
                  </li>
                </ul>
              </div>

              {/* Future Projects */}
              <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-gray-900">
                    Future Innovations
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're constantly working on new AI solutions to improve business efficiencies. Stay tuned for more products we develop and research initiatives. If you are interested in joining the team, please reach out.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
