import Typewriter from "typewriter-effect";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./ContactPage";

export default function HomePage() {
  return (
    <>
      {/* Home page */}

      <section className="hero-bg bg-black bg-cover p-15 bg-linear-to-r to-violet-950 ">
        <div className="flex justify-center md:flex-row items-center gap-4 p-8">
          <div className="p-4">
            <img
              src="public/img/Profile image.jpeg"
              alt="profile image"
              className="rounded-full w-170 p-2 bg-blue-600 bg-cover bg-linear-to-r to-violet-950"
            />
          </div>
          <div className="text-center text-white space-y-12 p-8 max-w-4xl mx-auto">
            <h2 className="font-bold text-5xl text-white ">
              Hi, I'm Fathima Inshafa
            </h2>
            <h1 className="text-6xl italic bg-linear-to-r from-sky-300 to-blue-600 bg-clip-text font-extrabold text-transparent ...  ">
              And I'm a{/* 🔥 ANIMATED TEXT HERE */}
              <span className="from-sky-100 to-blue-700 not-italic">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "MERN Stack Developer",
                      "UI/UX Designer",
                      "Web Application Builder",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </h1>
            <p className="text-xl ">
              I am a motivated developer focused on building complex web and
              mobile applications and delivering efficient, client-oriented
              solutions using modern technologies.
            </p>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="aos-init aos-animate "
            >
              {/* <div className="text-5xl flex justify-center items-center space-x-8">  */}
              {/* linkedin link */}
              {/* <a
                  href="https://www.linkedin.com/in/fathima-inshafa-01b976290/"
                  target="_blank"
                >
                  <img
                    src="https://img.freepik.com/premium-vector/linkedin-logo_578229-227.jpg"
                    alt="linkedin image"
                    width="50"
                  />
                </a> */}

              {/* github link */}
              {/* <a href="https://github.com/developerinshafa" target="_blank">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
                    alt="Github Image"
                    width="50"
                  />
                </a>
              </div> */}

              <div className="flex gap-10 text-center justify-center pt-5">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition">
                  View Projects
                </button>

                <a
                  href="/resume.pdf"
                  download="Fathima-Inshafa-Resume.pdf"
                  className="px-7 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black duration-300 font-semibold"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <div className="bg-black text-white px-10 py-16">
        {/* HEADER */}
        <div className="mb-10 max-w-6xl mx-auto space-y-6 ">
          <p className="text-sky-400 uppercase tracking-[5px] text-lg">
            About Me
            ----------------------------------------------------------------------------------
          </p>

          <h1 className="text-4xl font-bold mt-3">Who I Am & What I Do</h1>

          <p className="text-gray-400 mt-4 max-w-5xl leading-7 text-xl">
            I am currently working as a Full Stack Developer focused on building
            scalable, maintainable and high-performance web applications using
            modern MERN stack technologies.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* CARD 1 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              Production Frontend Delivery
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Experienced in React, Next.js, Tailwind CSS and building scalable
              UI systems.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              Current Industry Experience
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Working in real project environments with team collaboration and
              delivery workflows.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              Full Stack Upgrade Path
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Expanding backend skills with Node.js, Express, MongoDB and
              scalable APIs.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              Admin System Thinking
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Building dashboards, CRUD systems and structured admin panels.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              Modern Integrations
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Working with APIs, Firebase, Supabase and deployment tools.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              Team Collaboration
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Strong focus on Git workflow, modular code and teamwork.
            </p>
          </div>

          {/* CARD 7 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              UI Quality Focus
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Clean UI, responsive design and smooth user experience.
            </p>
          </div>

          {/* CARD 8 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-lg font-semibold text-blue-300">
              Continuous Learning
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Always improving skills with real projects and modern tools.
            </p>
          </div>
        </div>
      </div>

      <Skills />

      <Projects />

      <Contact />
    </>
  );
}
