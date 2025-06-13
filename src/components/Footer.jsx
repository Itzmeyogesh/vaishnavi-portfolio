import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import logo from '../assets/Technical-one-logo.jpg'; // ✅ Replace with your logo file path

const Footer = () => {
  return (
    <footer className="relative bg-black/90 text-gray-300 py-8 px-6 sm:px-12 border-t border-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
      >
        {/* Left: Logo + Made By */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Technical One Logo"
            className="w-10 h-10 object-contain rounded-full border border-cyan-400 shadow-md"
          />
          <p className="text-sm sm:text-base">
            Made with 💙 by <span className="text-cyan-400 font-semibold">Technical One</span>
          </p>
        </div>

        {/* Right: Back to Top */}
        <a
          href="#home"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition group"
        >
          <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
          <span className="text-sm">Back to Top</span>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
