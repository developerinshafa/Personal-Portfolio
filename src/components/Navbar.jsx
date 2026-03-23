import { Bars3Icon } from "@heroicons/react/16/solid";

function Navbar() {

  return (
    <>
      <div>
        <header className=" bg-blue-950 text-white px-25 ">
          <nav className="flex justify-between items-center px-5 text-2xl font-semibold p-5">
            <h2 className="bg-linear-to-r from-sky-300 to-blue-500 bg-clip-text italic font-extrabold text-transparent ...  ">
              M. Inshafa
            </h2>
            <ul className="flex space-x-6 justify-center items-center border-none">
              <li>
                <a href="/" className="hover:text-sky-200 p-2">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-sky-200 p-2">
                  About
                </a>
              </li>

              <li>
                <a href="/skills" className="hover:text-sky-200 p-2">
                  Skills
                </a>
              </li>

              <li>
                <a href="/projects" className="hover:text-sky-200 p-2">
                  {" "}
                  Projects
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-sky-200 p-2">
                  Contact
                </a>
              </li>
            </ul>
            <div className="">
              <ul className="flex justify-between items-center space-x-5">
                <li>
                  <a href="https://github.com/developerinshafa" target="_blank">
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
                      alt="Github Image"
                      width="25"
                      className="cursor-pointer"
                    />
                  </a>
                </li>
                <li>
                  <button>☀</button>
                </li>
                </ul>
              </div>
          </nav>
        </header>

        {/* <header className="flex text-white max-w-8xl mx-auto p-4 border-gray-300">
          <div className="container mx-auto px-4">
            <div className="flex justify-between ">
              <nav className="flex justify-between font-bold text-2xl p-2 ">
                <h2>M.Fathima Inshafa</h2>

                <div className="space-x-8 hidden md:block">
                  <NavLink to="/">Home</NavLink>

                  <NavLink to="/about">About</NavLink>

                  <NavLink to="/skills">Skills</NavLink>

                  <NavLink to="/projects">Projects</NavLink>

                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </nav>
            </div>
          </div>
        </header> */}
      </div>
    </>
  );
}

export default Navbar;
