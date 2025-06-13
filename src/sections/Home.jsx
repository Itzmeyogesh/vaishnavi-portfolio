import { motion } from 'framer-motion';
import { ArrowDownToLine, Send, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../assets/Profile.jpg';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 py-16 text-center text-white overflow-hidden bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🌈 Floating Blobs & Mesh Background (no black base) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-indigo-500 opacity-80 blur-2xl"></div>
      <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,#0ea5e9,#9333ea,#f472b6,#0ea5e9)] mix-blend-overlay opacity-60 blur-3xl animate-spin-slow"></div>

      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-xl p-10 sm:p-14 rounded-2xl shadow-2xl flex flex-col items-center space-y-6 border border-white/20">
        <img
          src={profileImg}
          alt="Vaishnavi Pote"
          className="w-32 h-32 rounded-full border-4 border-white/40 object-cover shadow-lg"
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow">Hi, I'm Vaishnavi Pote</h1>

        <TypeAnimation
          sequence={[
            'Java Full Stack Developer',
            1500,
            'UI/UX Enthusiast',
            1500,
            'Frontend Designer',
            1500,
            'Backend Problem Solver',
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg sm:text-xl text-white/80"
        />

        <p className="text-gray-200 max-w-2xl text-sm mt-2">
          Passionate software developer with strong fundamentals in Java, frontend design, and backend systems.
          Always eager to collaborate and craft clean, scalable web applications that provide real user value.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            <ArrowDownToLine className="mr-2" size={20} /> Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center border border-white/30 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            <Send className="mr-2" size={20} /> Contact Me
          </a>
        </div>

        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/Vaishnavi-Pote935644"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi-pote-244646350"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
