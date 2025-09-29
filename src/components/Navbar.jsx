import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-indigo-600">IELTS Academy</div>
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
        <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
        <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>
      <button className="md:hidden p-2 border rounded">☰</button>
    </nav>
  );
}

export default Navbar;
