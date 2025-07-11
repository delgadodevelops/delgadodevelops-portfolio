import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
const Home = () => (
  <section className="py-20 px-6 text-center">
    <h1 className="text-4xl font-bold text-gray-900">Welcome to delgadodevelops</h1>
    <p className="mt-4 text-gray-600">A modern front-end portfolio by David Delgado</p>
  </section>
);

const Projects = () => (
  <section className="py-20 px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-900">Projects</h2>
    <p className="mt-2 text-gray-600">Showcasing my latest work</p>
  </section>
);

const About = () => (
  <section className="py-20 px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-900">About Me</h2>
    <p className="mt-2 text-gray-600">Front-end developer passionate about clean code and clean design</p>
  </section>
);

const Contact = () => (
  <section className="py-20 px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-900">Contact</h2>
    <p className="mt-2 text-gray-600">Let's connect and build something great</p>
  </section>
);

// Layout
const Navbar = () => (
  <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-blue-600">delgadodevelops</h1>
    <ul className="flex gap-6 text-gray-700">
      <li><a href="/" className="hover:text-blue-600">Home</a></li>
      <li><a href="/projects" className="hover:text-blue-600">Projects</a></li>
      <li><a href="/about" className="hover:text-blue-600">About</a></li>
      <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-50 text-center text-sm text-gray-500 py-6 mt-10 border-t">
    <p>&copy; {new Date().getFullYear()} delgadodevelops. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

export default App;
