import React from 'react';
import { Mail, Phone, MapPin, Users, Target, Award, Code, Palette, Database, Smartphone, Globe, BarChart3, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

function App() {
  const teamMembers = [
    {
      name: "Shiny Dhingra",
      email: "dhingrashiny01@gmail.com",
      linkedin: "linkedin.com/in/shiny-dhingra-62097b324",
      location: "Rohtak , India",
      image: "https://i.postimg.cc/Z93PwSTt/b82eed34.jpg"

    },
    {
      name: "Nevid Alam",
      email: "mdnabid786@gmail.com",
      linkedin: "linkedin.com/in/nevid-alam-293b04328",
      location: "Panipat , India",
      image: "https://i.postimg.cc/qvX7ckD3/Screenshot-2025-10-17-125456.png"
    },
    {
     name: "Mohammad Zaid Ansari",
      email: "zaidansariacces@gmail.com",
      linkedin: "https://linkedin.com/in/mohammad-zaid-ansari-75b30737b",
      location: "Delhi, India",
      image: "https://i.postimg.cc/CzVbWWmX/3cd51a63.jpg"

    },
    {
      name: "Sumaira",
      email: "sumairasumaira@gmail.com",
      linkedin: "linkedin.com/in/sumaira-5783ab372",
      location: "Delhi , India",
      image: "https://i.postimg.cc/K4n5vnp1/501f256d.jpg"
    },
    {
      name: "Anuj Saini",
      email: "anujsaini00110@gmail.com",
      linkedin: "https://www.linkedin.com/in/anuj-saini-46516b317/",
      location: "Panipat , India",
      image: "https://i.postimg.cc/fynqN4kv/dksjfkj.png"
    },
     {
      name: "Utsav Kumar",
      email: "utsavmuz1212@gmail.com",
      linkedin: "linkedin.com/in/utsav-kumar-6a2129336",
      location: "Chhpra , Bihar",
      image: "https://i.postimg.cc/ZCF4ss8j/dab94179.jpg"
    },
    {
      name: "Mukul",
      email: "mukulq4@gmail.com",
      Linkedin:"https://www.linkedin.com/in/mukul-mukul-19a426362",
      location: "Panipat , India",
      image: "https://i.postimg.cc/HWhm5VXQ/image.jpg"
    }
  ];

  const skillIcons = {
    "React": Code,
    "TypeScript": Code,
    "UI/UX": Palette,
    "Node.js": Database,
    "Python": Database,
    "AWS": Globe,
    "Figma": Palette,
    "Prototyping": Target,
    "Research": BarChart3,
    "Docker": Database,
    "Kubernetes": Database,
    "CI/CD": Target,
    "React Native": Smartphone,
    "Swift": Smartphone,
    "Flutter": Smartphone,
    "Analytics": BarChart3,
    "Machine Learning": BarChart3
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-4 text-white">
              <img 
                src="https://i.postimg.cc/8Jch7G7S/da8cadf8.jpg" 
                alt="NeoGen Innovators Logo"
                className="w-24 h-24 object-contain rounded-full"
              />
              <div>
                <h1 className="text-4xl font-bold tracking-tight">NeoGen Innovators</h1>
                <p className="text-blue-100 text-lg">Innovation distinguishes between a leader and follower</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col lg:flex-row gap-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Email</p>
                  <p className="font-medium">neogen.innovators@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Phone</p>
                  <p className="font-medium">+91 9334092310</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Location</p>
                  <p className="font-medium">Panipat, Haryana</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/neogen-innovators-03bb8537b" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-200 transition-colors">
                    NeoGen Innovators
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Instagram</p>
                  <a href="https://www.instagram.com/neogen.innovators/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-200 transition-colors">
                    @neogen.innovators
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">YouTube</p>
                  <a href="https://www.youtube.com/@NeogenInnovators" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-200 transition-colors">
                    @NeogenInnovators
                  </a>
                </div>
              </div>
            </div>
          </div>
          
{/* Team Group Photo */} <div className="flex justify-center"> <div className="relative group"> <div className="w-80 h-60 lg:w-96 lg:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"> <img src="https://i.postimg.cc/wB1PjWNR/Whats-App-Image-2025-08-23-at-8-40-31-PM.jpg" alt="NeoGen Innovators Team" className="w-full h-full object-cover" /> </div> <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-30 transition duration-300 "></div>  </div> </div> </div> </header>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About NeoGen Innovators</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
       We are a passionate team of innovators specializing in IoT, AI/ML, Embedded systems, and rapid prototyping. Our focus is on developing intelligent, connected, and scalable solutions that combine cutting-edge technology with real-world applications.

With expertise spanning microcontrollers, single-board computers, wireless communication technologies, and advanced sensor integration, we design and deliver solutions that empower businesses, institutions, and individuals through automation, smart decision-making, and advanced innovation.

As mentors and trainers, we also guide students and professionals in exploring IoT, AI, and embedded systems, encouraging creativity and innovation in the tech ecosystem
          </p>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-12"> Founder</h2>
            <div className="flex flex-col items-center">
              <div className="relative group mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-6 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://i.postimg.cc/5jJcjt0t/95e8a0cc.jpg" 
                    alt="Er Raushan Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Er Raushan Kumar</h3>
              <p className="text-xl text-blue-100 mb-6">Founder & Mentor</p>
              
              {/* Mentor Contact Details */}
              <div className="flex flex-col lg:flex-row gap-6 justify-center mb-8">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
      <Mail className="w-5 h-5" />
    </div>
    <div className="text-left">
      <p className="text-sm text-blue-100">Email</p>
      <a
        href="mailto:raushan.kr.official2025@gmail.com"
        className="font-medium hover:text-blue-200 transition-colors"
      >
        raushan.kr.official2025@gmail.com
      </a>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
      <Linkedin className="w-5 h-5" />
    </div>
    <div className="text-left">
      <p className="text-sm text-blue-100">LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/raushan-kumar-b23b00372/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium hover:text-blue-200 transition-colors"
      >
        Raushan Kumar
      </a>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
      <Github className="w-5 h-5" />
    </div>
    <div className="text-left">
      <p className="text-sm text-blue-100">GitHub</p>
      <a
        href="https://github.com/raushankrofficial2025-commits"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium hover:text-blue-200 transition-colors"
      >
        raushankrofficial2025
      </a>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
      <MapPin className="w-5 h-5" />
    </div>
    <div className="text-left">
      <p className="text-sm text-blue-100">Location</p>
      <p className="font-medium">Panipat,Haryana (India)</p>
    </div>
  </div>
</div>

<p className="text-lg leading-relaxed max-w-3xl">
I am Raushan, a passionate mentor who guides students and young innovators in IoT, AI/ML, and embedded systems, helping them turn their creative ideas into meaningful technological solutions.

My focus as a mentor is to inspire, support, and empower learners so they can think innovatively, solve real-world problems, and build a strong foundation in cutting-edge technologies. I believe that with the right guidance, every student has the potential to become a changemaker in the field of technology.
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6"> Team</h2>
          <p className="text-xl text-gray-600">Building intelligent connections through human innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="relative mx-auto mb-6 w-32 h-32">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                
                {/* Display role for all team members */}
                <p className="text-lg text-blue-600 font-medium mb-4">{member.role}</p>
                
       {/* Contact details for Mohd Zaid Ansari*/}
{member.name === "Mohammad Zaid Ansari" && (
  <div className="space-y-3">
    <div className="flex items-center justify-center gap-2">
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href={`mailto:${member.email}`}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        {member.email}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Linkedin className="w-4 h-4 text-blue-600" />
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Mohammad Zaid Ansari
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Github className="w-4 h-4 text-blue-600" />
      <a
        href="https://github.com/muhammadzaidansari313"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        muhammadzaidansari313
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-gray-600">{member.location}</span>
    </div>
  </div>
)}

 


             {/* Contact details for Nevid Alam */}
{member.name === "Nevid Alam" && (
  <div className="space-y-3">
    <div className="flex items-center justify-center gap-2">
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href={`mailto:${member.email}`}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        {member.email}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Linkedin className="w-4 h-4 text-blue-600" />
      <a
        href="https://www.linkedin.com/in/nevid-alam-293b04328"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Nevid Alam
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Github className="w-4 h-4 text-blue-600" />
      <a
        href="https://github.com/Nevid-786/Python-Codes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Nevid-786
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-gray-600">{member.location}</span>
    </div>
  </div>
)}

              {/* Contact details for Shiny Dhingra */}
{member.name === "Shiny Dhingra" && (
  <div className="space-y-3">
    <div className="flex items-center justify-center gap-2">
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href={`mailto:${member.email}`}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        {member.email}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Linkedin className="w-4 h-4 text-blue-600" />
      <a
        href="https://www.linkedin.com/in/shiny-dhingra-62097b324"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Shiny Dhingra
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Github className="w-4 h-4 text-blue-600" />
      <a
        href="https://github.com/shinydhingra"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        shinydhingra
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-gray-600">{member.location}</span>
    </div>
  </div>
)}

           {/* Contact details for Sumaira */}
{member.name === "Sumaira" && (
  <div className="space-y-3">
    <div className="flex items-center justify-center gap-2">
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href={`mailto:${member.email}`}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        {member.email}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Linkedin className="w-4 h-4 text-blue-600" />
      <a
        href="https://www.linkedin.com/in/sumaira-5783ab372"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Sumaira
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Github className="w-4 h-4 text-blue-600" />
      <a
        href="https://github.com/sumairasumaira648-svg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        sumairasumaira648-svg 
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-gray-600">{member.location}</span>
    </div>
  </div>
)}

               {/* Contact details for Utsav Kumar */}
{member.name === "Utsav Kumar" && (
  <div className="space-y-3">
    <div className="flex items-center justify-center gap-2">
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href={`mailto:${member.email}`}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        {member.email}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Linkedin className="w-4 h-4 text-blue-600" />
      <a
        href="https://www.linkedin.com/in/utsav-kumar-6a2129336"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Utsav Kumar
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Github className="w-4 h-4 text-blue-600" />
      <a
        href="https://github.com/utsavkr12"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
       utsavkr12
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-gray-600">{member.location}</span>
    </div>
  </div>
)}

                 {/* Contact details for Anuj Saini*/}
{member.name === "Anuj Saini" && (
  <div className="space-y-3">
    <div className="flex items-center justify-center gap-2">
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href={`mailto:${member.email}`}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        {member.email}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Linkedin className="w-4 h-4 text-blue-600" />
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Anuj Saini
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Github className="w-4 h-4 text-blue-600" />
      <a
        href="https://github.com/sainiking-sa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        sainiking-sa
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-gray-600">{member.location}</span>
    </div>
  </div>
)}
                {/* Contact details for Mukul */}
{member.name === "Mukul" && (
  <div className="space-y-3">
    <div className="flex items-center justify-center gap-2">
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href={`mailto:${member.email}`}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        {member.email}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Linkedin className="w-4 h-4 text-blue-600" />
      <a
        href="https://www.linkedin.com/in/mukul-mukul-19a426362/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Mukul Mukul
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Github className="w-4 h-4 text-blue-600" />
      <a
        href="https://github.com/Mukul289303"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Mukul289303
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-gray-600">{member.location}</span>
    </div>
  </div>
)}

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://i.postimg.cc/8Jch7G7S/da8cadf8.jpg" 
                alt="NeoGen Innovators Logo"
                className="w-20 h-20 object-contain rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">NeoGen Innovators</h3>
                <p className="text-gray-400">Innovation distinguishes between a leader and follower</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-lg">© 2025 NeoGen Innovators</p>
              <p className="text-gray-500 text-sm mt-1">All rights reserved. Built with passion and innovation.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

