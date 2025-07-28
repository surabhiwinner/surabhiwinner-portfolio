'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart Voyager',
      description: 'An AI-powered travel planning app recommending places based on user interests and behavior.',
      image: 'https://readdy.ai/api/search-image?query=travel%20planner%20AI%20app%20smart%20trip%20planning%20UX%20design&width=800&height=600&seq=voyager&orientation=landscape',
      category: 'web',
      technologies: ['React', 'Flask', 'Machine Learning', 'OpenAI API'],
      video: "https://drive.google.com/file/d/15Q6l2QwNA0jizkqTdnAKALB9FDt9uDOi/view",
      liveUrl: '#',
      githubUrl: 'https://github.com/surabhiwinner/travelbloom',
    },
    {
      id: 2,
      title: 'Crime Register',
      description: 'Secure web app for college students to register Chrome books with admin approval flow.',
      image: 'https://readdy.ai/api/search-image?query=registration%20form%20UI%20chrome%20device%20admin%20dashboard%20clean%20UX&width=800&height=600&seq=chrome&orientation=landscape',
      category: 'web',
      technologies: ['Django', 'HTML/CSS', 'PostgreSQL'],
      video: "https://drive.google.com/file/d/1Q0eE7dwnpVq9wtqQ0IbcDuVVm0OpAMWd/view",
      liveUrl: '#',
      githubUrl: 'https://github.com/surabhiwinner/Online-Crime-Registration',
    },
    {
      id: 3,
      title: 'Movie Review System',
      description: 'A sentiment-based movie review app where users can write, analyze, and visualize movie ratings.',
      image: 'https://readdy.ai/api/search-image?query=movie%20review%20platform%20rating%20system%20user%20feedback%20AI%20analysis&width=800&height=600&seq=movie-review&orientation=landscape',
      category: 'web',
      technologies: ['Flask', 'NLTK', 'Bootstrap', 'Python'],
      video: "https://drive.google.com/file/d/1Q0eE7dwnpVq9wtqQ0IbcDuVVm0OpAMWd/view",
      liveUrl: '#',
      githubUrl: 'https://github.com/surabhiwinner/CineDataProject',
    },
    {
      id: 4,
      title: 'Smart Attendance System',
      description: 'Automated attendance marking system using facial recognition and real-time database updates.',
      image: 'https://readdy.ai/api/search-image?query=AI%20attendance%20system%20face%20recognition%20college%20project%20dashboard&width=800&height=600&seq=attendance&orientation=landscape',
      category: 'mobile',
      technologies: ['OpenCV', 'Firebase', 'React Native', 'Bitbucket'],
      video: "https://drive.google.com/file/d/1QBfzxb1HtNLSOqoSx1F93i7MDCKCDAXk/view",
      liveUrl: '#',
      githubUrl: 'https://bitbucket.org/surabhiwinner/students-attendance-management-system/',
    },
    {
      id: 5,
      title: 'Language Converter',
      description: 'Web tool to convert input text between multiple languages using translation APIs.',
      image: 'https://readdy.ai/api/search-image?query=language%20translator%20tool%20AI%20multilingual%20UX%20app&width=800&height=600&seq=language-converter&orientation=landscape',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google Translate API'],
      video: "https://drive.google.com/file/d/1qT8_Xa5q-J7RkQOChMLsfLbIPJ2WTuAv/view",
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/language-converter',
    },
    {
      id: 6,
      title: 'Temperature Converter',
      description: 'Simple utility to convert temperature units (Celsius, Fahrenheit, Kelvin) with clean interface.',
      image: 'https://readdy.ai/api/search-image?query=temperature%20converter%20unit%20conversion%20tool%20minimal%20design&width=800&height=600&seq=temp-converter&orientation=landscape',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      video: "https://drive.google.com/file/d/1TnB6jG0HF5Bx2lMqGsXwXZFlwfU2ukfS/view",
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/temperature-converter',
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of academic and personal projects demonstrating my skills in web and mobile development, AI integration, and user-focused solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <span
                    className="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-center font-medium cursor-not-allowed"
                    title="Live demo not available"
                  >
                    <i className="ri-time-line mr-2"></i>
                    Coming Soon
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg text-center font-medium hover:border-gray-400 dark:hover:border-gray-400 transition-colors duration-300"
                  >
                    <i className="ri-github-line mr-2"></i>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
