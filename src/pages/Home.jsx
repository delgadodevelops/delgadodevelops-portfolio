// src/pages/Home.jsx
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <section className="relative min-h-screen px-6 py-32 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-ping -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse -z-10"></div>

      <div className="max-w-6xl mx-auto text-left md:text-center">
        <motion.h1
          variants={slideIn}
          initial="hidden"
          animate="visible"
          className="text-[3.5rem] md:text-[5rem] font-black tracking-tight text-gray-900 leading-tight"
        >
          Hey, I’m <span className="text-blue-600">David Delgado</span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto"
        >
          A front-end developer crafting sleek, high-performance websites with style, structure, and motion.
        </motion.p>

        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Explore My Work
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 transition font-semibold px-6 py-3 rounded-lg"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Tech Stack</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              'html',
              'css',
              'js',
              'react',
              'tailwind',
              'vite',
              'nodejs',
              'figma',
              'github',
              'git',
            ].map((icon) => (
              <motion.img
                key={icon}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={`${icon} icon`}
                className="w-12 h-12"
              />
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center text-blue-500 text-xl font-semibold">
                  Project {project} Image
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">Project Title {project}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <a
                    href="/projects"
                    className="inline-block text-blue-600 hover:underline text-sm font-medium pt-2"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="mt-24 text-center"
        >
          <p className="text-lg text-gray-600 font-medium">
            Let’s collaborate on your next project — freelance or full-time.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 text-white bg-blue-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg"
          >
            Let’s Build Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;