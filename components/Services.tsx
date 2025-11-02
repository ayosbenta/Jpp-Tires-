import React from 'react';
import { TireIcon, WrenchIcon, CarIcon, ShieldCheckIcon } from './icons/Icons';

const services = [
  {
    icon: <TireIcon />,
    title: 'Tire Installation',
    description: 'Professional and swift tire mounting and balancing for all vehicle types.',
  },
  {
    icon: <WrenchIcon />,
    title: 'Wheel Alignment',
    description: 'State-of-the-art alignment to ensure smooth driving and extend tire life.',
  },
  {
    icon: <CarIcon />,
    title: 'Tire Rotation',
    description: 'Regular rotation to promote even wear and maximize the lifespan of your tires.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Flat Tire Repair',
    description: 'Quick and reliable puncture repairs to get you back on the road safely.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Everything Your Vehicle Needs
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            From purchase to maintenance, we provide a full range of services to keep you safe on the road.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-red-500/20 transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-base text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;