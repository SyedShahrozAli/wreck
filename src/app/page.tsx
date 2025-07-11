 

//
import React from 'react';

// Main App component for the homepage
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-900">
      {/* Navigation Bar */}
      <header className="bg-white shadow-sm p-4 md:p-6 rounded-b-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-indigo-50 transition-colors">
            Shahroz Ali<span className="text-gray-800">.dev</span>
            <img className="w-20 ml-5 border-r" src="./me.png" alt="" />
          </a>
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <a href="#blog" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-gray-50">
                Blog
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-gray-50">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-gray-50">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 md:py-24 text-center shadow-lg rounded-lg mx-4 mt-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I am <span className="text-yellow-300">Shahroz Ali</span>!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            A passionate developer, cybersecurity enthusiast, and tech blogger. I love creating innovative solutions and sharing knowledge with the community.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#blog"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold text-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Read My Blog
            </a>
            <a
              href="#portfolio"
              className="bg-indigo-700 text-white hover:bg-indigo-800 px-6 py-3 rounded-full font-semibold text-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="container mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog Post Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Understanding React Hooks</h3>
            <p className="text-gray-600 text-sm mb-4">Published on July 10, 2025</p>
            <p className="text-gray-700 mb-4">
              A deep dive into the most essential React Hooks and how they simplify state management and side effects.
            </p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More &rarr;</a>
          </div>

          {/* Example Blog Post Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Mastering Tailwind CSS</h3>
            <p className="text-gray-600 text-sm mb-4">Published on June 25, 2025</p>
            <p className="text-gray-700 mb-4">
              Tips and tricks to efficiently use Tailwind CSS for rapid UI development without writing custom CSS.
            </p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More &rarr;</a>
          </div>

          {/* Example Blog Post Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">The Future of Web Development</h3>
            <p className="text-gray-600 text-sm mb-4">Published on June 1, 2025</p>
            <p className="text-gray-700 mb-4">
              Exploring emerging trends and technologies that will shape the web development landscape.
            </p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More &rarr;</a>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Blog Posts
          </a>
        </div>
      </section>

      {/* Portfolio Projects Section */}
      <section id="portfolio" className="container mx-auto py-12 px-4 bg-white rounded-lg shadow-md mt-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="https://placehold.co/400x250/E0E7FF/4338CA?text=Project+1"
              alt="Project 1 Thumbnail"
              className="w-full h-40 object-cover rounded-md mb-4"
             />
            <h3 className="text-xl font-semibold mb-2 text-purple-700">E-commerce Platform</h3>
            <p className="text-gray-700 mb-4">
              A full-stack e-commerce application built with Next.js, Node.js, and MongoDB.
            </p>
            <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">View Project &rarr;</a>
          </div>

          {/* Example Project Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="https://placehold.co/400x250/E0E7FF/4338CA?text=Project+2"
              alt="Project 2 Thumbnail"
              className="w-full h-40 object-cover rounded-md mb-4"
             />
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Task Management App</h3>
            <p className="text-gray-700 mb-4">
              A responsive task management application with real-time updates using React and Firebase.
            </p>
            <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">View Project &rarr;</a>
          </div>

          {/* Example Project Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="https://placehold.co/400x250/E0E7FF/4338CA?text=Project+3"
              alt="Project 3 Thumbnail"
              className="w-full h-40 object-cover rounded-md mb-4"
             />
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Personal Blog Engine</h3>
            <p className="text-gray-700 mb-4">
              A custom blog engine built from scratch to manage and publish articles efficiently.
            </p>
            <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">View Project &rarr;</a>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-12 md:py-16 text-center rounded-t-lg mx-4 mb-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Email Me
          </a>
          <div className="mt-8 flex justify-center space-x-6 text-2xl">
            {/* Replace with actual social media links */}
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fab fa-github"></i> {/* GitHub icon */}
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fab fa-twitter"></i> {/* Twitter icon */}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center rounded-b-lg mx-4 mb-4">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
