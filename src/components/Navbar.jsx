import { useState } from "react";
import { Menu, X } from "lucide-react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <h2 className="text-3xl font-extrabold italic bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
          MF. Inshafa
        </h2>

        {/* Desktop Menu */}
        <ul className="flex md:hidden items-center gap-8 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="hover:text-orange-300 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Contact Button */}
          <li>
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-2 rounded-full hover:scale-105 duration-300 shadow-lg"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-[#0a0a0a] text-lg font-medium">
          
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-300 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-2 rounded-full"
            >
              Contact
            </a>
          </li>
        </ul>
         
      </div>

    
    </header>
  );
}

export default Navbar;