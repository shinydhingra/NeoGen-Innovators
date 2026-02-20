import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Shiny Dhingra',
    department: 'Computer Science',
    github: 'https://github.com/shinydhingra',
    linkedin: 'linkedin.com/in/shiny-dhingra-62097b324',
    mail: 'dhingrashiny01@gmail.com',
    image: 'https://i.postimg.cc/Z93PwSTt/b82eed34.jpg'
  },
  {
    name: 'Mukul',
    department: 'Aritificial Intelligence & Data Science',
    github: 'https://github.com/Mukul289303',
    linkedin: 'https://www.linkedin.com/in/mukul-mukul-19a426362/',
    mail: 'mukulq4@gmail.com',
    image: 'https://i.postimg.cc/HWhm5VXQ/image.jpg'
  },
  {
    name: 'Deepanshu',
    department: 'Artificial Intelligence & Data Science',
    github: 'https://github.com/rrdeepanshu09-ship-it',
    linkedin: 'https://www.linkedin.com/in/deepanshu-pawar-55056238b/',
    mail: 'rrdeepanshu98@gmail.com',
    image: 'https://i.postimg.cc/Jn83hKYr/Whats-App-Image-2026-01-28-at-3-19-30-PM.jpg'
  },
  {
    name: 'Anuj Saini',
    department: 'Electronics & Communication',
    github: 'https://github.com/sainiking-sa',
    linkedin: 'https://www.linkedin.com/in/anuj-saini-46516b317/',
    mail: 'anujsaini00110@gmail.com',
    image: 'https://i.postimg.cc/fynqN4kv/dksjfkj.png'
  },
  {
    name: 'Sumaira',
    department: 'Artificial Intelligence & Machine Learning',
    github: 'https://github.com/sumairasumaira648-svg',
    linkedin: 'linkedin.com/in/sumaira-5783ab372',
    mail: 'sumairasumaira@gmail.com',
    image: 'https://i.postimg.cc/K4n5vnp1/501f256d.jpg'
  },
  {
    name: 'Sahil',
    department: 'Computer Science',
    github: 'https://github.com/sahil-mittan',
    linkedin: 'https://www.linkedin.com/in/sahil-mittan-13ba49394/',
    mail: 'ssahilji270@gmail.com',
    image: 'https://i.postimg.cc/3NnFVpBN/Whats-App-Image-2026-01-28-at-3-19-15-PM.jpg'
  },
  {
    name: 'Nevid Alam',
    department: 'Artificial Intelligence & Machine Learning',
    github: 'https://github.com/Nevid-786',
    linkedin: 'https://www.linkedin.com/in/nevid-alam-293b04328/',
    mail: 'mdnabid786@gmail.com',
    image: 'https://i.postimg.cc/qvX7ckD3/Screenshot-2025-10-17-125456.png'
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building intelligent connections through human innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-600"
                />
              ) : (
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                {member.name}
              </h3>

              <p className="text-blue-600 font-semibold text-center mb-1">
                {member.role}
              </p>

              <p className="text-gray-500 text-sm text-center mb-4">
                {member.department}
              </p>

              <p className="text-gray-600 text-center mb-6">
                {member.description}
              </p>

              <div className="flex justify-center space-x-4">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.mail && (
                  <a href={`mailto:${member.mail}`} className="text-gray-600 hover:text-red-600 transition-colors">
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
