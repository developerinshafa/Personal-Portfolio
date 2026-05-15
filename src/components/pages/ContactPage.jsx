import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-5 py-20">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sky-500 uppercase tracking-[5px] mb-4">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Contact Me
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          Have a project idea or want to work together? Feel free to
          contact me anytime.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div className="space-y-8">
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/10 duration-300">
            <div className="bg-gradient-to-r from-sky-300 to-blue-500 p-4 rounded-full">
              <Mail />
            </div>

            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-400">
                fathimainshafa1999@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/10 duration-300">
            <div className="bg-gradient-to-r from-sky-300 to-blue-500 p-4 rounded-full">
              <Phone />
            </div>

            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-400">
                +94 75 652 3136
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/10 duration-300">
            <div className="bg-gradient-to-r from-sky-300 to-blue-500 p-4 rounded-full">
              <MapPin />
            </div>

            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-400">
                Batticaloa, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          
          <form className="space-y-6">
            
            <div>
              <label className="block mb-2 text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-pink-500 duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-pink-500 duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-pink-500 duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-sky-300 to-blue-500 py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] duration-300"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}