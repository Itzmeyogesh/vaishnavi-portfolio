import { useState } from 'react';
import {
  Home,
  User,
  Folder,
  Mail,
  Settings,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: <Home size={22} />, link: '#home' },
    { icon: <User size={22} />, link: '#about' },
    { icon: <Settings size={22} />, link: '#skills' },
    { icon: <Folder size={22} />, link: '#projects' },
    { icon: <Mail size={22} />, link: '#contact' },
  ];

  return (
    <>
      {/* ☰ Floating Toggle Button for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 sm:hidden p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* 📱 Mobile Sidebar (Slide in/out) */}
      <div
        className={`fixed top-0 left-0 h-full w-44 bg-transparent backdrop-blur-xl border-r border-white/20 p-6 z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden flex flex-col gap-6`}
      >
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* 🖥️ Desktop Sidebar */}
      <div className="hidden sm:flex fixed top-4 left-4 h-[45vh] w-14 bg-transparent border border-white/20 backdrop-blur-xl rounded-2xl flex-col justify-between items-center py-6 shadow-xl z-50">
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
