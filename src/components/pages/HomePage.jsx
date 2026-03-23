
export default function HomePage() {
  return (
    <>
    {/* Home page */}
    
      <section className="hero-bg bg-black bg-cover p-15 bg-linear-to-r to-violet-950">
        <div className="flex justify-center md:flex-row items-center gap-4 p-8">
          <div className="p-4">
            <img src="public/img/Profile image.jpeg" alt="" className="rounded-full w-170 p-2 bg-blue-600 bg-cover bg-linear-to-r to-violet-950"/>
          </div>
          <div className=" text-white space-y-12 p-8 max-w-4xl mx-auto">
            <h2 className="font-bold text-5xl text-white ">
              Hi, I'm Fathima Inshafa
            </h2>
            <h1 className="text-6xl italic bg-linear-to-r from-sky-300 to-blue-800 bg-clip-text font-extrabold text-transparent ...  ">
              And I'm a <br />
              Full Stack Web Developer
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
              {/* <div className="text-5xl flex justify-center items-center space-x-8"> */}
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
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
