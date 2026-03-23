export default function AboutPage() {
  return (
    <>
      <div className="project-bg about-bg bg-black overflow-hidden ..">
        <div className="px-20 py-15  text-white text-center font-blod space-y-15 max-w-7xl mx-auto">
          <h1 className="text-white text-7xl font-bold p-5 border-b-5 border-double border-b-indigo-500">About Me</h1>
          <div className="flex ">
            {/* <img
              src="https://inshafa-portfolio.netlify.app/assets/image%20-Cvhn2fIh.jpeg"
              alt="Profile Image"
              className="w-60 object-cover fill-white drop-shadow-xl/50 ...border-b-5 border-double border-b-indigo-500 rounded-full "
            /> */}
            <p className="text-2xl text-justify pb-20 px-10 font-semibold">
            I am a passionate web developer who enjoys creating responsive and
            user-friendly websites. I like learning new technologies and
            improving my skills by building real-world projects. I am always
            eager to grow and explore new opportunities in web development.
          </p>
          </div>
          
        </div>
      </div>
    </>
  );
}
