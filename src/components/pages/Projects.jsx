const projects = [
  {
    title: "Random Quote Generator",
    image: "/img/Random Quote Generator.jpeg",
    desc: "Built with HTML & Tailwind CSS",
    link: "https://random-quote-generator-js-in.netlify.app/",
  },
  {
    title: "Coffee Shop Website",
    image: "/img/CoffeeShop.jpeg",
    desc: "Modern coffee website using Tailwind CSS",
    link: "https://my-great-coffee.netlify.app/",
  },
  {
    title: "GitHub Profile Finder",
    image: "/img/GitHub Profile Finder.jpeg",
    desc: "Search GitHub profiles with JavaScript",
    link: "#",
  },
  {
    title: "Multi Timer Dashboard",
    image: "/img/Multi Timer Dashboard.jpeg",
    desc: "Multiple timers with JavaScript",
    link: "https://multi-timer-dashboard-js.netlify.app/",
  },
  {
    title: "React Website",
    image: "/img/Website.jpeg",
    desc: "Responsive website built with React",
    link: "https://api-fatching-data.netlify.app/",
  },
  {
    title: "Fetch API Project",
    image: "/img/Fetch API .jpeg",
    desc: "Form handling using Fetch API",
    link: "https://form-create-with-fetch-api.netlify.app/",
  },
   {
    title: "Sri handloom website",
    image: "/img/sri handloom.jpeg",
    desc: "E-commerce website for handloom products",
    link: "https://agent-6a2ac65c82cad013badfa80e--sri-handloom.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className="hero-bg bg-cover p-15 bg-linear-to-r to-orange-950 bg-black py-20 px-5 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-orange-500 uppercase tracking-[5px] mb-4 text-xl">
          My Work 
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Projects
        </h1>

        <p className="text-gray-400 text-lg mt-6 leading-8">
          Here are some of my creative frontend projects built using
          Tailwind CSS, JavaScript and React.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 duration-500 shadow-lg"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[260px] object-cover group-hover:scale-110 duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center items-center text-center px-6">
              
              <h2 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h2>

              <p className="text-gray-300 mb-6">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-300 to-orange-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 duration-300"
              >
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}