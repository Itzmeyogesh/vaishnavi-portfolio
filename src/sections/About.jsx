import { motion } from 'framer-motion';
import { Code, MonitorCheck, Layers } from 'lucide-react';

const skills = [
  {
    icon: <Code size={28} />,
    title: 'Frontend',
    tools: 'HTML, CSS, JavaScript, Responsive Design',
  },
  {
    icon: <Layers size={28} />,
    title: 'Backend',
    tools: 'Core Java, JDBC, Oracle, SQL',
  },
  {
    icon: <MonitorCheck size={28} />,
    title: 'Web Development',
    tools: 'Full Stack Projects, Clean UI, Scalable Code',
  },
];

const About = () => (
  <section
    id="about"
    className="relative min-h-[90vh] py-6 sm:py-10 px-4 sm:px-8 lg:px-14 text-white flex items-center justify-center overflow-hidden"
  >
    {/* Background gradients */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f2937] via-[#0f172a] to-[#111827] opacity-90"></div>
    <div className="absolute inset-0 -z-10 bg-[conic-gradient(at_top_left,_#0ea5e9,_#9333ea,_#f472b6,_#0ea5e9)] mix-blend-overlay opacity-30 blur-3xl animate-spin-slow"></div>

    <div className="max-w-6xl w-full text-center space-y-10 sm:space-y-12">
      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-xl px-6 sm:px-10 py-8 sm:py-12 rounded-2xl shadow-2xl space-y-4 sm:space-y-6 border border-white/10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">About Me</h2>

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
          I'm <span className="text-cyan-300 font-semibold">Vaishnavi Pote</span>, a passionate and driven
          <span className="text-cyan-300 font-semibold"> Java Full Stack Developer</span> with a strong grasp of software development principles and a love for building clean, intuitive user interfaces.
        </p>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          My technical skills include building responsive frontends with
          <span className="text-cyan-300 font-medium"> HTML, CSS, JavaScript</span> and powerful backends using
          <span className="text-cyan-300 font-medium"> Core Java, JDBC, Oracle, and SQL</span>. I bring creativity, clarity, and collaboration into every project I work on.
        </p>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          I thrive in fast-paced environments and love transforming ideas into functional, user-friendly digital products. Whether it's crafting beautiful UIs or solving backend challenges, I aim to deliver quality and value.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-2 sm:px-4">
        {skills.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg text-left space-y-3 border border-white/10 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="text-cyan-400">{item.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-300">{item.tools}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
