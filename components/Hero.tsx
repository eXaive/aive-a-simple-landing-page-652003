'use client'

import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-up">
            Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Amazing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Create beautiful, modern web applications with our cutting-edge platform. 
            Fast, reliable, and designed for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 hover:gap-3">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center gap-2">
              <Play size={20} />
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-500 mb-6">Trusted by 10,000+ companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Company logos placeholder */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-12 bg-gray-300 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero