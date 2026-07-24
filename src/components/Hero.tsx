import { Sparkles, Zap, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="animate-bounce delay-100">
              <Sparkles className="text-blue-600" size={40} />
            </div>
            <div className="animate-bounce delay-200">
              <Zap className="text-cyan-500" size={40} />
            </div>
            <div className="animate-bounce delay-300">
              <Code className="text-blue-600" size={40} />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Born to Innovate.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Built to lead.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
           Welcome to NeoGen Innovators — where innovation drives intelligence and technology shapes tomorrow. Join us in creating smart solutions that make a meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow">
              Achivements
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
