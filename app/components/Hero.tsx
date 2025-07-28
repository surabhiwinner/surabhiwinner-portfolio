'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Python Full Stack Developer', 'UI/UX Enthusiast', 'Creative Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden dark:text-white"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20clean%20desk%2C%20laptop%2C%20and%20soft%20natural%20lighting%2C%20professional%20atmosphere%2C%20geometric%20patterns%2C%20subtle%20blue%20and%20white%20color%20scheme%2C%20contemporary%20office%20design%20with%20plants%20and%20modern%20furniture&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent dark:from-gray-900 dark:via-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-200 dark:text-blue-300 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Surabhi S
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-200 dark:text-gray-300 mb-8 h-12">
            <span className="font-medium">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed">
            I’m a Python Django Full Stack Developer from Attingal, Kerala. Passionate about building efficient backends and beautiful UIs that solve real-world problems with elegant code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-900 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-down-line text-2xl text-white"></i>
        </button>
      </div>
    </section>
  );
}
