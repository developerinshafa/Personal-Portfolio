export default function Projects() {
  return (
    <>
      <div className="project-bg space-y-15 bg-black pb-20 pt-15">
        <div className="text-white p-5 text-center max-w-7xl mx-auto space-y-4">
          <h1 className=" text-7xl font-bold">Projects</h1>
          <p className="text-xl pt-4">
            These are some of my Projects. I have built these with Tailwind CSS,
            JavaScript & React. Check them out.
          </p>
        </div>
        {/* My Project Lists */}
        <div className="w-full max-w-7xl mx-auto ">
          <div className="flex flex-wrap md:flex-row px-6 gap-4 text-white text-center ">
            
            {/* Random Quote Generator */}
            <div className="relative">
              <img
                className="h-[300px] w-[400px]"
                src="public/img/Random Quote Generator.jpeg"
                alt="Random Quote Generator"
              />
              <div className="pt-8 absolute left-0 right-0 bottom-0 top-0 bg-gray-700 font-bold text-xl duration-500 opacity-0 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  Random Quote Generator. Built with HTML & Tailwind CSS.
                </p>
                <a
                  href="https://random-quote-generator-js-in.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-xl font-bold rounded px-4 py-1 text-center cursor-pointer inline-block"
                >
                  Click
                </a>
              </div>
            </div>

            {/* Coffee Shop Website */}
            <div className="relative">
              <img
                className="h-[300px] w-[400px]"
                src="public/img/CoffeeShop.jpeg"
                alt="coffee shop"
              />
              <div className="pt-8 absolute left-0 right-0 bottom-0 top-0 bg-gray-700 font-bold text-xl duration-500 opacity-0 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  Coffee Shop Website. Built with HTML & Tailwind CSS.
                </p>
                <a
                  href="https://my-great-coffee.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-xl font-bold rounded px-4 py-1 text-center cursor-pointer inline-block"
                >
                  Click
                </a>
              </div>
            </div>

            {/* GitHub Profile Finder */}
            <div className="relative">
              <img
                className="h-[300px] w-[400px]"
                src="public/img/GitHub Profile Finder.jpeg"
                alt="GitHub Profile Finder"
              />
              <div className="pt-8 absolute left-0 right-0 bottom-0 top-0 bg-gray-700 font-bold text-xl duration-500 opacity-0 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  GitHub Profile Finder. Built with JavaScript.
                </p>
                <a
                  href="public/img/GitHub Profile Finder.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-xl font-bold rounded px-4 py-1 text-center cursor-pointer inline-block"
                >
                  Click
                </a>
              </div>
            </div>

            {/* Multi Timer Dashboard */}
            <div className="relative">
              <img
                className="h-[300px] w-[400px]"
                src="public/img/Multi Timer Dashboard.jpeg"
                alt="Multi Timer Dashboard"
              />
              <div className="pt-8 absolute left-0 right-0 bottom-0 top-0 bg-gray-700 font-bold text-xl duration-500 opacity-0 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  Multi Timer Dashboard. Built with JavaScript.
                </p>
                <a
                  href="https://multi-timer-dashboard-js.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-xl font-bold rounded px-4 py-1 text-center cursor-pointer inline-block"
                >
                  Click
                </a>
              </div>
            </div>

            {/*Website  */}
            <div className="relative">
              <img
                className="h-[300px] w-[400px]"
                src="public/img/Website.jpeg"
                alt="Website"
              />
              <div className="pt-8 absolute left-0 right-0 bottom-0 top-0 bg-gray-700 font-bold text-xl duration-500 opacity-0 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  Website. Built with React.
                </p>
                <a
                  href="https://api-fatching-data.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-xl font-bold rounded px-4 py-1 text-center cursor-pointer inline-block"
                >
                  Click
                </a>
              </div>
            </div>

            {/*  Fetch API */}
            <div className="relative">
              <img
                className="h-[300px] w-[400px]"
                src="public/img/Fetch API .jpeg"
                alt="Fetch API"
              />
              <div className="pt-8 absolute left-0 right-0 bottom-0 top-0 bg-gray-700 font-bold text-xl duration-500 opacity-0 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  Fetch API. Built with React & Fetch API
                </p>
                <a
                  href="hhttps://form-create-with-fetch-api.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-xl font-bold rounded px-4 py-1 text-center cursor-pointer inline-block"
                >
                  Click
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
