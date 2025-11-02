import React from 'react';
import { StarIcon } from './icons/Icons';

const testimonials = [
  {
    name: 'Michael R.',
    role: 'Satisfied Customer',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    quote: 'Absolutely top-notch service. The team at JPP Tires Trading was knowledgeable, fast, and gave me a great price on a full set of new tires. Highly recommend!',
  },
  {
    name: 'Jessica L.',
    role: 'Regular Client',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'I\'ve been coming here for years for all my tire needs. They are honest, reliable, and always do an amazing job. The only place I trust with my car.',
  },
  {
    name: 'David Chen',
    role: 'First-time Visitor',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Got a flat tire on my way to a meeting. JPP Tires Trading had me back on the road in under 30 minutes. Lifesavers! The staff was incredibly friendly and professional.',
  },
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ name, role, avatar, quote }) => (
    <div className="flex flex-col bg-slate-800 rounded-lg shadow-lg overflow-hidden h-full p-8">
        <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <blockquote className="flex-grow">
            <p className="text-gray-300 text-lg">"{quote}"</p>
        </blockquote>
        <footer className="mt-6">
            <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={avatar} alt={name} />
                <div className="ml-4">
                    <p className="text-base font-medium text-white">{name}</p>
                    <p className="text-base text-red-500">{role}</p>
                </div>
            </div>
        </footer>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">What Our Customers Say</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;