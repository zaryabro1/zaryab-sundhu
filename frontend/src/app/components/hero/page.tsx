export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-20 min-h-[70vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-16">
          <div className="md:w-1/2 space-y-6 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold font-serif">
              Zaryab Sundhu
              <span className="block text-2xl md:text-3xl font-sans text-cyan-400 mt-2">
                Senior Software Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-violet-200 font-light leading-relaxed">
              Building scalable web applications with Next.js and Node.js
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-300 animate__animated animate__fadeInUp backdrop-blur-sm"
              >
                Hire Me
              </a>
              <a
                href="#portfolio"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s backdrop-blur-sm"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-cyan-500/20 absolute -top-4 -left-4 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-cyan-400 p-2 backdrop-blur-sm">
                <div className="w-full h-full rounded-full bg-purple-900/50 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            className="text-violet-300 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.05"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
