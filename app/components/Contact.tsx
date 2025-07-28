'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'surabhiwinner3@gmail.com',
      href: 'mailto:surabhiwinner3@gmail.com',
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '+91 6238 483 490',
      href: 'tel:+916238483490',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Trivandrum, Kerala, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/surabhiwinner', label: 'LinkedIn' },
    { icon: 'ri-github-fill', href: 'https://github.com/surabhiwinner/', label: 'GitHub' },
    { icon: 'ri-twitter-fill', href: 'https://x.com/winnersurabhi', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a line and
            let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <i className={`${item.icon} text-xl text-blue-600 dark:text-blue-400`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label={link.label}
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm bg-white dark:bg-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm bg-white dark:bg-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm bg-white dark:bg-gray-900 dark:text-white"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm bg-white dark:bg-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
                <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="ri-send-plane-line mr-2"></i>
                    Send Message
                  </span>
                )}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 border border-green-400 dark:border-green-500 text-green-700 dark:text-green-100 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-500 dark:text-green-300 mr-2"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
