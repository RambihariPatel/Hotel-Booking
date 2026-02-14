import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">

      {/* HERO */}
      <div className="relative py-20 px-6 text-center bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white overflow-hidden">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
          About Our Platform
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-100">
          Discover, book, and enjoy the best hotel experiences with ease and comfort.
        </p>

        {/* blur circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* FEATURES */}
      <div className="px-6 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Card */}
          <div className="bg-white/60 backdrop-blur-lg border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Best Price Guarantee
            </h3>
            <p className="text-gray-600">
              We provide unbeatable prices so you always get the best deals.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/60 backdrop-blur-lg border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Easy Booking
            </h3>
            <p className="text-gray-600">
              Book your stay in seconds with our simple interface.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/60 backdrop-blur-lg border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Your payments are safe with our trusted system.
            </p>
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="px-6 md:px-16 lg:px-24 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <h2 className="text-4xl font-bold text-indigo-600">1000+</h2>
            <p className="text-gray-500 mt-2">Hotels</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <h2 className="text-4xl font-bold text-indigo-600">5000+</h2>
            <p className="text-gray-500 mt-2">Users</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <h2 className="text-4xl font-bold text-indigo-600">24/7</h2>
            <p className="text-gray-500 mt-2">Support</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <h2 className="text-4xl font-bold text-indigo-600">100%</h2>
            <p className="text-gray-500 mt-2">Secure</p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Explore?
        </h2>

        <p className="max-w-xl mx-auto mb-6 text-gray-200">
          Start booking your dream hotel today and enjoy a seamless experience.
        </p>

        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105">
          Explore Rooms
        </button>
      </div>

    </div>
  );
};

export default About;
