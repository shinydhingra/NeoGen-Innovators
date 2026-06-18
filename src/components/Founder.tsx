import { Github, Linkedin, Mail } from 'lucide-react';

const founders = [
  {
    name: 'Er. Raushan Kumar',
    title: 'Founder',
    department: 'Electronics and Communication',
    description: 'A visionary leader driving NeoGen Innovators with a passion for IoT, AI, and embedded systems. Focused on transforming bold ideas into impactful, real-world technological solutions.',
    image: 'https://i.postimg.cc/s23vZhJw/Whats-App-Image-2026-01-28-at-8-53-04-PM.jpg',
    github: 'https://github.com/raushankrofficial2025-commits',
    linkedin: 'https://www.linkedin.com/in/er-raushan-kumar-b23b00372/',
    mail: 'raushan.kr.official2025@gmail.com'
  },
  {
    name: 'Mr. Karan Singh',
    title: 'Co-Founder',
    department: 'Electronics and Communnication',
    description: 'A strategic thinker and technology enthusiast driving innovation forward. Dedicated to building scalable solutions and fostering a culture of creativity and excellence.',
    image: 'https://i.postimg.cc/v8fW361M/Whats-App-Image-2026-06-18-at-2-55-44-PM.jpg',
    github: '',
    linkedin: '',
    mail: 'karan.ece@piet.co.in'
  }
];

export default function Founders() {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Founding Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries leading our mission to innovate and inspire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-blue-600 shadow-lg"
                />

                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  {founder.name}
                </h3>

                <p className="text-xl text-blue-600 font-semibold mb-2 text-center">
                  {founder.title}
                </p>

                <p className="text-gray-500 text-sm mb-4 text-center">
                  {founder.department}
                </p>

                <p className="text-gray-600 text-center mb-10 max-w-sm leading-relaxed">
                  {founder.description}
                </p>

                <div className="flex justify-center space-x-6">
                  {founder.github && (
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110"
                    >
                      <Github size={28} />
                    </a>
                  )}
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin.startsWith('http') ? founder.linkedin : `https://${founder.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110"
                    >
                      <Linkedin size={28} />
                    </a>
                  )}
                  {founder.mail && (
                    <a
                      href={`mailto:${founder.mail}`}
                      className="text-gray-600 hover:text-red-600 transition-colors hover:scale-110"
                    >
                      <Mail size={28} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
