import React from 'react';
import { tires } from '../data/tires';

const Tires: React.FC = () => {
  return (
    <section id="tires" className="bg-slate-800 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Our Products</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Explore Our Tire Selection
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Find the perfect set of tires for your vehicle from our wide range of high-quality options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tires.map((tire) => (
            <div key={tire.id} className="group bg-slate-900 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="p-8 bg-black/20 flex-shrink-0 h-60 flex items-center justify-center">
                <img 
                  src={tire.imageUrl} 
                  alt={tire.name}
                  className="max-h-full w-auto mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{tire.name}</h3>
                <p className="mt-2 text-sm text-red-400 uppercase tracking-wider flex-grow">{tire.type}</p>
                <a href="#" className="mt-6 inline-block bg-slate-800 text-gray-300 font-bold py-3 px-6 rounded-md text-center hover:bg-red-500 hover:text-white transition-all duration-300">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tires;
