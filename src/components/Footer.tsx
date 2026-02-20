import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NI</span>
              </div>
              <span className="text-xl font-bold">Neogen Innovators</span>
            </div>
            <p className="text-gray-400 text-sm">
              Innovation distinguishes between a leader and follower
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="hover:text-white transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('events')} className="hover:text-white transition-colors">
                  Achievments
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                    Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Learning Roadmaps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub Repos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/neogen.innovators/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/neogen-innovators-03bb8537b" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/NeogenInnovators" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="neogen.innovators@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              neogen.innovators@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© Neogen Innovators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
