import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import About from './sections/About';
import Skill from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer'; // ✅ Importing Footer

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Sidebar />
      <main className="pl-20 w-full space-y-0 overflow-hidden">
        {/* Home Section */}
        <section className="px-4 sm:px-8 md:px-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
          <Home />
        </section>

        {/* About Section */}
        <section className="px-4 sm:px-8 md:px-12 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a]">
          <About />
        </section>

        {/* Skills Section */}
        <section className="px-4 sm:px-8 md:px-12 bg-gradient-to-br from-[#0f766e] via-[#0ea5e9] to-[#0f766e]">
          <Skill />
        </section>

        {/* Projects Section */}
        <section className="px-4 sm:px-8 md:px-12 bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#4f46e5]">
          <Projects />
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-8 md:px-12 bg-gradient-to-br from-[#9333ea] via-[#db2777] to-[#9333ea]">
          <Contact />
        </section>

        {/* ✅ Footer Section */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
