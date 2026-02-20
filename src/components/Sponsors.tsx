import { Building2 } from 'lucide-react';

const sponsors = [
  { name: 'TechCorp AI', type: 'Platinum' },
  { name: 'InnovateLabs', type: 'Platinum' },
  { name: 'DataSphere Inc', type: 'Gold' },
  { name: 'CloudAI Systems', type: 'Gold' },
  { name: 'NeuralNet Pro', type: 'Silver' },
  { name: 'CodeGenius', type: 'Silver' },
  { name: 'AI Ventures', type: 'Silver' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders to drive innovation and create opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-center font-bold text-gray-900 mb-1">
                {sponsor.name}
              </h3>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {sponsor.type}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Interested in becoming a sponsor?</p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
