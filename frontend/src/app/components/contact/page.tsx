"use client";
import ContactForm from "./form";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-serif">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a
                      href="mailto:zaryabro1@hotmail.com"
                      className="text-cyan-400 hover:text-fuchsia-400 transition-colors"
                    >
                      zaryabro1@hotmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-purple-200">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 backdrop-blur-lg bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-fuchsia-500 hover:text-white transition-all duration-300 text-purple-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 backdrop-blur-lg bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-fuchsia-500 hover:text-white transition-all duration-300 text-purple-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:zaryabro1@hotmail.com"
                  className="w-12 h-12 backdrop-blur-lg bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-fuchsia-500 hover:text-white transition-all duration-300 text-purple-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-lg border border-white/20 animate__animated animate__fadeInRight"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
