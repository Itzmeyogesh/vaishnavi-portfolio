import { motion } from 'framer-motion';
import { Code2, Database, Settings, Monitor } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={32} />,
    title: 'Frontend Development',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: <Database size={32} />,
    title: 'Database & SQL',
    items: ['Oracle', 'SQL', 'PL/SQL', 'JDBC'],
  },
  {
    icon: <Monitor size={32} />,
    title: 'Java Technologies',
    items: ['Core Java', 'Java 8', 'JDBC', 'Servlet', 'JSP'],
  },
  {
    icon: <Settings size={32} />,
    title: 'Tools & Deployment',
    items: ['Git', 'GitHub', 'Netlify', 'FontAwesome'],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-[45vh] py-8 px-4 sm:px-8 lg:px-14 text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f2937] via-[#0f172a] to-[#111827] opacity-90"></div>
      <div className="absolute inset-0 -z-10 bg-[conic-gradient(at_top_left,_#0ea5e9,_#9333ea,_#f472b6,_#0ea5e9)] mix-blend-overlay opacity-30 blur-3xl animate-spin-slow"></div>

      <div className="max-w-6xl w-full text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-2 sm:px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4 text-cyan-400">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 ml-2 space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
