import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-indigo-50"
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Achieve Your Dream IELTS Band Score
        </h1>
        <p className="text-gray-600 text-lg">
          Join our expert-led coaching with AI-driven tools, practice sessions,
          and personalized feedback to boost your IELTS preparation.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
          alt="IELTS preparation"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
