import { motion } from 'framer-motion';
import spotifyImg from '../assets/spotify-clone.png';
import portfolioImg from '../assets/portfolio-site.jpg';
import ecommerceImg from '../assets/ecommerce-ui.png';

const projects = [
  {
    title: 'Spotify Clone',
    description:
      'A music streaming web app inspired by Spotify. Built using HTML, CSS, JavaScript. Features include a song list, play/pause controls, progress bar, and duration display.',
    tools: ['HTML', 'CSS', 'JavaScript', 'FontAwesome', 'Netlify'],
    link: 'https://your-spotify-demo.netlify.app',
    github: 'https://github.com/Vaishnavi-Pote935644/spotify-clone',
    image: spotifyImg,
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio site built with React and Tailwind CSS to showcase projects, skills, and contact details with modern animations.',
    tools: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://your-portfolio-site.netlify.app',
    github: 'https://github.com/Vaishnavi-Pote935644/portfolio',
    image: portfolioImg,
  },
  {
    title: 'E-commerce UI',
    description:
      'A responsive frontend UI for an e-commerce website with product cards, filters, and shopping cart features using HTML, CSS, and JavaScript.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://your-ecommerce-ui.netlify.app',
    github: 'https://github.com/Vaishnavi-Pote935644/ecommerce-ui',
    image: ecommerceImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-7 flex flex-col items-center text-white bg-transparent"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4 border border-cyan-300 shadow"
              />
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-cyan-600/80 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 hover:bg-cyan-500 hover:text-white text-cyan-300 py-2 px-4 rounded-lg text-sm font-semibold transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
