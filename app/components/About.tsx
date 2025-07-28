'use client';

export default function About() {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '5+', label: 'Technologies Used' },
    { number: '100%', label: 'Passion & Commitment' },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Text + Image Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center ">
          {/* Left: About Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm <strong>Surabhi S</strong>, a dedicated and enthusiastic Python Django full-stack developer with a strong foundation in Mathematics and Computer Applications. I bring passion, precision, and problem-solving to every project I build.
              </p>
              <p>
                My tech journey started with curiosity and a desire to make meaningful digital solutions. Despite a career gap during early motherhood, I kept learning and refining my skills, and now I work with Django, React, SQL, and modern web tools.
              </p>
              <p>
                Outside coding, I enjoy spending time with my family, exploring new frameworks, and continuously upskilling to stay ahead in tech.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/resume-surabhi.pdf"
                download
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Image with background shape */}
          <div className="relative">
            <div className="relative z-12">
              <img
                src="/surabhi.jpg"
                alt="Surabhi"
                className="w-full max-w-sm object-contain rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-200 dark:bg-blue-700 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
