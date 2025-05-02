import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 flex flex-col items-center mt-auto">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/Cyber-Baloch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-2xl"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/awais-baloch-405b9934b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-2xl"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://x.com/CybrBaloch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-2xl"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
      <p className="text-sm text-gray-400 mt-2">&copy; 2025 Awais Baloch. All rights reserved.</p>
    </footer>
  );
}

export default Footer;