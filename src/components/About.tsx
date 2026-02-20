import { Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Neogen Innovators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At NeoGen Innovators, we turn innovation into intelligent, connected solutions — shaping the future of technology and inspiring the minds behind it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
             To empower innovators to learn, build, and deploy cutting-edge intelligent systems that shape the future of technology and society.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading force in next-generation innovation, empowering creators to design intelligent, connected, and ethical technologies that transform industries and positively impact society.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Community</h3>
            <p className="text-gray-700 leading-relaxed">
              A vibrant community of innovators, engineers, and tech enthusiasts — from beginners to experts — collaborating, building, and sharing knowledge to push the boundaries of IoT, AI, and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
