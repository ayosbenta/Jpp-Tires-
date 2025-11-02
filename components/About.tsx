import React from 'react';

const teamMembers = [
  {
    name: 'John P. Peterson',
    role: 'Founder & CEO',
    imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    bio: 'With over 20 years in the automotive industry, John founded JPP Tires with a passion for safety and customer satisfaction.'
  },
  {
    name: 'Maria Garcia',
    role: 'Lead Technician',
    imageUrl: 'https://randomuser.me/api/portraits/women/75.jpg',
    bio: 'Maria is our ASE-certified expert, ensuring every vehicle receives the highest standard of care and precision.'
  },
  {
    name: 'Sam Wilson',
    role: 'Customer Service Manager',
    imageUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
    bio: 'Sam is dedicated to providing a seamless and friendly experience for every customer who walks through our doors.'
  }
]

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-900 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">About Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Driving Our Community Forward
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">
            JPP Tires Trading was founded on a simple principle: provide the best quality tires and most reliable service in the industry. We are a team of passionate automotive experts committed to ensuring your safety and satisfaction on the road.
          </p>
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-extrabold text-white text-center mb-12">Meet Our Expert Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {teamMembers.map((member) => (
                    <div key={member.name} className="text-center">
                        <img className="mx-auto h-32 w-32 rounded-full" src={member.imageUrl} alt={member.name} />
                        <h4 className="mt-6 text-xl font-bold text-white">{member.name}</h4>
                        <p className="text-red-500">{member.role}</p>
                        <p className="mt-2 text-gray-400">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;