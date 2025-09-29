import React from "react";

const testimonials = [
  {
    name: "Priya S.",
    review: "I scored Band 7.5 with their structured practice sessions. Highly recommend!",
  },
  {
    name: "Arjun M.",
    review: "The AI feedback was spot on! It helped me improve my writing drastically.",
  },
  {
    name: "Sara K.",
    review: "Great mentors and supportive community. I felt confident on test day.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 md:px-16 py-12 bg-indigo-50">
      <h2 className="text-3xl font-bold text-center mb-10">What Students Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-gray-600 italic">"{t.review}"</p>
            <h4 className="mt-4 font-semibold text-indigo-600">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
