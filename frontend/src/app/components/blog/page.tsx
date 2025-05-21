"use client";
import { useState, useEffect } from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: "Mobile Development",
      date: "June 15, 2023",
      title: "Building Cross-Platform Apps with React Native",
      description: "Explore the benefits and challenges of developing mobile applications using React Native framework...",
      icon: "📱",
      tagColor: "bg-fuchsia-500/20 text-fuchsia-300"
    },
    {
      id: 2,
      category: "Cloud Computing",
      date: "June 1, 2023",
      title: "Serverless Architecture Best Practices",
      description: "Deep dive into serverless computing and how to architect scalable applications...",
      icon: "☁️",
      tagColor: "bg-fuchsia-500/20 text-fuchsia-300"
    },
    {
      id: 3,
      category: "Security",
      date: "May 20, 2023",
      title: "Web Security Fundamentals",
      description: "Essential security practices every web developer should know and implement...",
      icon: "🔒",
      tagColor: "bg-fuchsia-500/20 text-fuchsia-300"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const posts = document.querySelectorAll('article');
    posts.forEach((post) => observer.observe(post));

    return () => {
      posts.forEach((post) => observer.unobserve(post));
    };
  }, []);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-cyan-300 font-serif">Latest Blog Posts</h2>
          <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-cyan-500/20 ${
                isVisible ? 'animate__animated animate__fadeInUp' : ''
              } ${post.id === 2 ? 'animate__delay-1s' : post.id === 3 ? 'animate__delay-2s' : ''}`}
            >
              <div className="h-48 bg-gradient-to-br from-purple-700/50 to-blue-700/50 flex items-center justify-center">
                <span className="text-4xl">{post.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className={`text-sm px-3 py-1 rounded-full ${post.tagColor}`}>{post.category}</span>
                  <span className="ml-auto text-sm text-cyan-300">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-100 mb-2">{post.title}</h3>
                <p className="text-cyan-200 mb-4">{post.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            View All Posts
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
