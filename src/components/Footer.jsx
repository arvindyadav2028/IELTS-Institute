import React from "react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-800 text-gray-300 px-6 md:px-16 py-8 mt-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 IELTS Academy. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Courses</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
