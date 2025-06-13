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
    <section id="skills" className="min-h-screen py-16 px-4 flex flex-col items-center text-white">
      <h2 className="text-3xl font-semibold mb-12">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4 text-cyan-400">
              {skill.icon}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 ml-2 space-y-1">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
