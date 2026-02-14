import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">

      {/* HERO SECTION */}
      <div className="text-center py-20 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white relative overflow-hidden">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Experience The Best Stays
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-100">
          Explore a wide range of hotel experiences designed for comfort, adventure, and luxury.
        </p>

        {/* blur shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>

      </div>

      {/* EXPERIENCE CARDS */}
      <div className="px-6 md:px-16 lg:px-24 py-16">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-pink-500">
            <h2 className="text-xl font-semibold mb-2 text-pink-500">
              Luxury Rooms
            </h2>
            <p className="text-gray-600">
              Enjoy premium hotels with world-class amenities and comfort.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-purple-500">
            <h2 className="text-xl font-semibold mb-2 text-purple-500">
              Budget Stays
            </h2>
            <p className="text-gray-600">
              Affordable hotels for every traveler without compromise.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-indigo-500">
            <h2 className="text-xl font-semibold mb-2 text-indigo-500">
              Family Packages
            </h2>
            <p className="text-gray-600">
              Special packages for a memorable family vacation.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-green-500">
            <h2 className="text-xl font-semibold mb-2 text-green-500">
              Adventure Trips
            </h2>
            <p className="text-gray-600">
              Book thrilling and adventurous travel experiences.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-yellow-500">
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">
              Easy Booking
            </h2>
            <p className="text-gray-600">
              Book your hotel in just a few clicks with ease.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-red-500">
            <h2 className="text-xl font-semibold mb-2 text-red-500">
              Secure Payments
            </h2>
            <p className="text-gray-600">
              Safe and secure payment system for your bookings.
            </p>
          </div>

        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">

        <h2 className="text-3xl font-bold mb-4">
          Ready for Your Next Trip?
        </h2>

        <p className="max-w-xl mx-auto mb-6 text-gray-200">
          Book your perfect stay today and enjoy an unforgettable experience.
        </p>

        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105">
          Explore Rooms
        </button>

      </div>

    </div>
  );
};

export default Experience;
