import { Zap, MessageSquare } from 'lucide-react';

const projects = [
  {
    icon: Zap,
    title: 'AI-Powered Smart Vehicle System',
    description: 'An AI-powered smart vehicle system enhances safety and efficiency through intelligent monitoring and automation.',
    tech: ['ESP32', 'Sensors', 'RaspberryPi'],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: MessageSquare,
    title: 'AI and IoT Based Off-Grid Treking System',
    description: 'An AI & IoT-based off-grid treking system enables tracking and SOS alerts without internet in remote areas.',
    tech: ['Control Pannel', 'Poles', 'LoRa', 'n8n', 'User Watch'],
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our innovative AI projects built by passionate members of our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${project.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
