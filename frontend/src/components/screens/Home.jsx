import React from 'react'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>

      <section className="bg-gradient-to-br from-green-500 to-green-700 text-white min-h-screen flex items-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Smarter <span className="text-black">Healthcare</span>  
            For Everyone
          </h1>
          <p className="text-gray-100 text-lg max-w-lg">
            Your personalized health companion — manage appointments, track wellness, 
            access reports, and connect with doctors anytime, anywhere.  
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <button className="bg-black hover:bg-gray-900 px-6 py-3 rounded-xl font-medium transition">
              Get Started
            </button>
            <button className="border border-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-xl font-medium transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
            alt="Healthcare Illustration"
            className="rounded-2xl shadow-xl max-h-[450px] object-contain bg-white p-6"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home