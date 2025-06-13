import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',       // 🔁 Replace with actual EmailJS service ID
        'your_template_id',      // 🔁 Replace with actual template ID
        form.current,
        'your_public_key'        // 🔁 Replace with your public API key
      )
      .then(() => {
        alert('✅ Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('❌ Error:', error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-[45vh] flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-12 lg:py-20 text-white overflow-hidden"
    >
      {/* 🌈 Animated Background Layers */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f2937] via-[#0f172a] to-[#111827] opacity-90"></div>
      <div className="absolute inset-0 -z-10 bg-[conic-gradient(at_top_left,_#0ea5e9,_#9333ea,_#f472b6,_#0ea5e9)] mix-blend-overlay blur-3xl opacity-30 animate-spin-slow"></div>

      <motion.div
        className="w-full max-w-xl bg-white/10 backdrop-blur-lg px-6 py-8 sm:px-8 sm:py-10 rounded-3xl shadow-2xl border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8 text-center">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
