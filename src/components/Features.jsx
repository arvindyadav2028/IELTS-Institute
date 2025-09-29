import React from "react";

const features = [
  {
    title: "Speaking Practice",
    text: "Daily speaking sessions with instant AI feedback.",
    icon: "🗣️",
  },
  {
    title: "Mock Tests",
    text: "Full-length timed mock tests to track your progress.",
    icon: "📝",
  },
  {
    title: "AI Band Score",
    text: "AI-powered score predictions for Reading & Writing.",
    icon: "🤖",
  },
  {
    title: "Expert Mentors",
    text: "Guidance from certified IELTS trainers.",
    icon: "🎓",
  },
];

function Features() {
  return (
    <section id="features" className="px-6 md:px-16 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-4xl">{f.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
