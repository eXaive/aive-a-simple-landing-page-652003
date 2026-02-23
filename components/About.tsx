import { CheckCircle } from 'lucide-react'

const About = () => {
  const benefits = [
    'Scalable architecture for growing businesses',
    'Advanced analytics and reporting tools',
    'Seamless third-party integrations',
    'Automated workflows and processes',
    'Real-time collaboration features',
    'Custom branding and white-label options'
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;ve built a comprehensive solution that grows with your business. 
              From startups to enterprises, our platform provides the tools and 
              scalability you need to succeed.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Learn More
            </button>
          </div>

          <div className="relative">
            {/* Placeholder for image/graphic */}
            <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="font-semibold">System Status</span>
                  </div>
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-white/80">Uptime</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="font-semibold">Performance</span>
                  </div>
                  <div className="text-3xl font-bold">&lt;100ms</div>
                  <div className="text-white/80">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About