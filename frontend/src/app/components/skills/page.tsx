export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-cyan-300 font-serif">Technical Skills</h2>
          <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-500/20 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-bold text-cyan-300 mb-6">Programming Languages</h3>
            <div className="space-y-4">
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">JavaScript/TypeScript</span>
                  <span className="text-fuchsia-400">95%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">Python</span>
                  <span className="text-fuchsia-400">85%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">Java</span>
                  <span className="text-fuchsia-400">80%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-500/20 animate__animated animate__fadeInUp animate__delay-1s">
            <h3 className="text-xl font-bold text-cyan-300 mb-6">Frameworks & Libraries</h3>
            <div className="space-y-4">
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">React/Next.js</span>
                  <span className="text-fuchsia-400">90%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">Node.js/Express</span>
                  <span className="text-fuchsia-400">88%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">Django</span>
                  <span className="text-fuchsia-400">75%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-500/20 animate__animated animate__fadeInUp animate__delay-2s">
            <h3 className="text-xl font-bold text-cyan-300 mb-6">Tools & Technologies</h3>
            <div className="space-y-4">
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">AWS</span>
                  <span className="text-fuchsia-400">85%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">Docker/Kubernetes</span>
                  <span className="text-fuchsia-400">80%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-100">CI/CD</span>
                  <span className="text-fuchsia-400">85%</span>
                </div>
                <div className="w-full bg-indigo-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
