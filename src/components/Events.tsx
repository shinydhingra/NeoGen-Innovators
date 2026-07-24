import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    date: 'March 2024',
    title: 'Club Foundation',
    description: 'Catalyst GenAI was founded with a mission to democratize AI education',
  },
  {
    date: 'April 2024',
    title: 'First Workshop',
    description: 'Introduction to Machine Learning workshop with 100+ attendees',
  },
  {
    date: 'June 2024',
    title: 'Summer AI Bootcamp',
    description: 'Intensive 4-week program covering deep learning fundamentals',
  },
  {
    date: 'September 2024',
    title: 'AI Hackathon',
    description: 'First annual hackathon with 200+ participants and industry judges',
  },
  {
    date: 'November 2024',
    title: 'Industry Partnership',
    description: 'Partnered with leading tech companies for mentorship programs',
  },
  {
    date: 'January 2026',
    title: 'GenCodeX 2026',
    description: 'Major coding competition featuring AI challenges and prizes',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Events Timeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Milestones and memorable moments in our journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500"></div>

            {events.map((event, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-5 w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Calendar size={18} />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-2xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Upcoming Event: AI Summit 2026</h3>
              <div className="flex flex-wrap gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>June 15-17, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Virtual & In-Person</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>3-Day Event</span>
                </div>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow whitespace-nowrap">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
