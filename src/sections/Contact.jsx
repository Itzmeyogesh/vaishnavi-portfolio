import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',       // 🔁 Replace with your actual EmailJS service ID
        'your_template_id',      // 🔁 Replace with your actual template ID
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
      className="min-h-screen flex items-center justify-center px-6 py-20 text-white"
    >
      <motion.div
        className="max-w-xl w-full bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Contact Me</h2>

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
            className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
