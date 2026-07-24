import { Trophy, Calendar, MapPin } from 'lucide-react';

const hackathons = [
  {
    title: 'BraInWave 2.0',
    position: '1st Position',
    prize: '50k',
    date: '16 - 17 January 2026',
    location: 'DTU',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'InnoVault',
    position: '1st Position',
    prize: '10k',
    date: '4 - 5 February 2026',
    location: 'DTU',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'HackTU 7.0',
    position: '1st Position',
    prize: '70k',
    date: '7 - 8 February 2026',
    location: 'TIET',
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hackathon Wins</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Celebrating our community's remarkable achievements in competitive hackathons
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${hackathon.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                <Trophy size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-2">{hackathon.title}</h3>
              <p className="text-xl font-semibold mb-4 text-blue-100">{hackathon.position}</p>

              <div className="space-y-3 mb-4">
                <p className="text-lg font-bold text-yellow-300">Prize: ₹{hackathon.prize}</p>
                <div className="flex items-center gap-2 text-blue-100">
                  <Calendar size={16} />
                  <span>{hackathon.date}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin size={16} />
                  <span>{hackathon.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
