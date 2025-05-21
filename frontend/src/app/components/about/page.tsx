"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-cyan-300 font-serif">
            About Me
          </h2>
          <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold text-violet-300">
              Hello! I'm Zaryab Sundhu
            </h3>
            <p className="text-cyan-100 leading-relaxed">
              With over 8 years of experience in software development, I
              specialize in building scalable web applications and
              microservices. My journey in tech started with a deep curiosity
              for problem-solving, which has evolved into a passion for creating
              efficient, user-centric solutions.
            </p>
            <p className="text-cyan-100 leading-relaxed">
              Currently, I'm focused on full-stack development using modern
              technologies like React, Node.js, and AWS. I'm particularly
              interested in cloud architecture and have successfully led
              multiple projects from conception to deployment.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border border-fuchsia-500/30 rounded-lg p-4 bg-indigo-900/50 backdrop-blur-sm shadow-lg shadow-purple-500/20">
                <h4 className="font-bold text-fuchsia-400">50+</h4>
                <p className="text-cyan-200">Projects Completed</p>
              </div>
              <div className="border border-fuchsia-500/30 rounded-lg p-4 bg-indigo-900/50 backdrop-blur-sm shadow-lg shadow-purple-500/20">
                <h4 className="font-bold text-fuchsia-400">8+</h4>
                <p className="text-cyan-200">Years Experience</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-lg transition-all duration-300 shadow-lg shadow-fuchsia-500/30"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-indigo-900/50 backdrop-blur-sm rounded-lg border border-fuchsia-500/30 shadow-lg shadow-purple-500/20">
                <h4 className="font-bold text-fuchsia-400 mb-2">Frontend</h4>
                <p className="text-cyan-200">React, Vue, Angular, Next.js</p>
              </div>
              <div className="p-6 bg-indigo-900/50 backdrop-blur-sm rounded-lg border border-fuchsia-500/30 shadow-lg shadow-purple-500/20">
                <h4 className="font-bold text-fuchsia-400 mb-2">Backend</h4>
                <p className="text-cyan-200">Node.js, Python, Java, Go</p>
              </div>
              <div className="p-6 bg-indigo-900/50 backdrop-blur-sm rounded-lg border border-fuchsia-500/30 shadow-lg shadow-purple-500/20">
                <h4 className="font-bold text-fuchsia-400 mb-2">Database</h4>
                <p className="text-cyan-200">MongoDB, PostgreSQL, Redis</p>
              </div>
              <div className="p-6 bg-indigo-900/50 backdrop-blur-sm rounded-lg border border-fuchsia-500/30 shadow-lg shadow-purple-500/20">
                <h4 className="font-bold text-fuchsia-400 mb-2">Cloud</h4>
                <p className="text-cyan-200">AWS, GCP, Azure, Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
