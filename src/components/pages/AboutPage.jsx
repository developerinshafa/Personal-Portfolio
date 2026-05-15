export default function About() {
  return (
    <section className="min-h-screen bg-[#050816] text-white overflow-hidden px-6 py-20">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-4">
          
          {/* Small Tag */}
          <div className="inline-block bg-violet-500/10 border border-violet-500/20 px-5 py-2 rounded-full">
            <p className="text-sky-400 font-semibold tracking-wide text-sm">
              ABOUT ME
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafting{" "}
            <span className="text-violet-400">
              modern
            </span>{" "}
            web experiences with <br />

            <span className="text-violet-300">
              clean code & scalable UI
            </span>
          </h1>

          {/* Line */}
          <div className="w-24 h-1 bg-sky-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-9 max-w-2xl">
            I'm MF Inshafa, a frontend-focused web developer specializing
            in React.js, Next.js and Tailwind CSS. I build fast,
            responsive and user-friendly interfaces that solve real-world
            problems.
          </p>

          {/* Points */}
          <div className="space-y-4 text-gray-300">
            
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
              <p>20+ real-world production projects</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
              <p>Team collaboration & leadership experience</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
              <p>Clean, reusable & performance-focused code</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-5">
            
            <a
              href="/contact"
              className="bg-sky-400 hover:bg-sky-700 duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-violet-500/30"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              className="border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 duration-300 px-8 py-4 rounded-xl font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          
          {/* Glow Circle */}
          <div className="absolute w-[400px] h-[400px] rounded-full border-[18px] border-sky-500 shadow-[0_0_80px_#8b5cf6]"></div>

          {/* Decorative Symbols */}
          <div className="absolute left-10 top-20 text-sky-500 text-8xl font-thin opacity-70">
            &lt;
          </div>

          <div className="absolute right-10 bottom-20 text-sky-500 text-8xl font-thin opacity-70">
            &gt;
          </div>

          {/* Image */}
          <img
            src="public/img/Profile image.jpeg"
            alt="Profile"
            className="relative z-10 w-[380px] object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}