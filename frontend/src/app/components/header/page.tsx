"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0B0B2E] text-[#E6F0FF] ${isScrolled ? 'shadow-lg backdrop-blur-sm bg-opacity-90' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className={"text-xl font-bold text-[#7B61FF]"}>
              Zaryab
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className={"hidden md:block"}>
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#hero"
                className={"hover:bg-[#1E1E4B] hover:text-[#7B61FF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#blog"
                className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contact
              </a>
              <button
                id="themeToggle"
                className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#1E1E4B] hover:text-[#7B61FF] focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("hero")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
              className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
              className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("skills");
                if (target) {
                  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                  const startPosition = window.scrollY;
                  const distance = targetPosition - startPosition;
                  const duration = 1000; // 1 second
                  
                  let startTime = null;
                  
                  const animation = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const r = easeInOutQuad(progress, startPosition, distance, duration);
                    window.scrollTo(0, r);
                    
                    if (progress < duration) {
                      requestAnimationFrame(animation);
                    }
                  };
                  
                  requestAnimationFrame(animation);
                }
              }}
              className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("portfolio");
                if (target) {
                  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                  const startPosition = window.scrollY;
                  const distance = targetPosition - startPosition;
                  const duration = 1000; // 1 second
                  
                  let startTime = null;
                  
                  const animation = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const r = easeInOutQuad(progress, startPosition, distance, duration);
                    window.scrollTo(0, r);
                    
                    if (progress < duration) {
                      requestAnimationFrame(animation);
                    }
                  };
                  
                  requestAnimationFrame(animation);
                }
              }}
              className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("blog");
                if (target) {
                  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                  const startPosition = window.scrollY;
                  const distance = targetPosition - startPosition;
                  const duration = 1000; // 1 second
                  
                  let startTime = null;
                  
                  const animation = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const r = easeInOutQuad(progress, startPosition, distance, duration);
                    window.scrollTo(0, r);
                    
                    if (progress < duration) {
                      requestAnimationFrame(animation);
                    }
                  };
                  
                  requestAnimationFrame(animation);
                }
              }}
              className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("contact");
                if (target) {
                  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                  const startPosition = window.scrollY;
                  const distance = targetPosition - startPosition;
                  const duration = 1000; // 1 second
                  
                  let startTime = null;
                  
                  const animation = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const r = easeInOutQuad(progress, startPosition, distance, duration);
                    window.scrollTo(0, r);
                    
                    if (progress < duration) {
                      requestAnimationFrame(animation);
                    }
                  };
                  
                  requestAnimationFrame(animation);
                }
              }}
              className="hover:bg-[#1E1E4B] hover:text-[#7B61FF] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
