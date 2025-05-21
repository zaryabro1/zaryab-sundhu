export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-cyan-300 font-serif">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-violet-500/30"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="relative animate__animated animate__fadeInLeft">
              <div className="md:flex items-center justify-between">
                <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 bg-fuchsia-500 rounded-full glow"></div>
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-8 text-right">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Senior Software Engineer
                  </h3>
                  <p className="text-cyan-200">TheHexaTown</p>
                  <p className="text-sm text-violet-300">2023 - Present</p>
                </div>
                <div className="md:w-5/12 md:pl-8 bg-indigo-900/40 backdrop-blur-sm p-6 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-violet-500/20">
                  <ul className="list-disc list-inside space-y-2 text-cyan-100">
                    <li>
                      Led development of microservices architecture serving 1M+
                      users
                    </li>
                    <li>
                      Implemented CI/CD pipeline reducing deployment time by 70%
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      React
                    </span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      AWS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative animate__animated animate__fadeInRight">
              <div className="md:flex items-center justify-between">
                <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 bg-fuchsia-500 rounded-full glow"></div>
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-8 text-right">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Full Stack Developer
                  </h3>
                  <p className="text-cyan-200">Allied Consultants</p>
                  <p className="text-sm text-violet-300">2020 - 2023</p>
                </div>
                <div className="md:w-5/12 md:pl-8 bg-indigo-900/40 backdrop-blur-sm p-6 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-violet-500/20">
                  <ul className="list-disc list-inside space-y-2 text-cyan-100">
                    <li>
                      Developed scalable web applications using MERN stack
                    </li>
                    <li>
                      Optimized database queries improving performance by 40%
                    </li>
                    <li>Integrated third-party APIs and payment gateways</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      Express
                    </span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      Docker
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative animate__animated animate__fadeInLeft">
              <div className="md:flex items-center justify-between">
                <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 bg-fuchsia-500 rounded-full glow"></div>
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-8 text-right">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Software Developer
                  </h3>
                  <p className="text-cyan-200">StartUp Solutions</p>
                  <p className="text-sm text-violet-300">2016 - 2018</p>
                </div>
                <div className="md:w-5/12 md:pl-8 bg-indigo-900/40 backdrop-blur-sm p-6 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-violet-500/20">
                  <ul className="list-disc list-inside space-y-2 text-cyan-100">
                    <li>
                      Built responsive web applications using modern JavaScript
                    </li>
                    <li>Implemented user authentication and authorization</li>
                    <li>
                      Collaborated with UX team for optimal user experience
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-cyan-300 rounded-full text-sm border border-fuchsia-500/30">
                      SQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
