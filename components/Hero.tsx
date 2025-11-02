import React from 'react';

const Hero: React.FC = () => {
  const heroStyle = {
    backgroundImage: `url('https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="home" className="h-screen relative flex items-center justify-center text-center" style={heroStyle}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          The Ultimate Destination for <span className="text-red-500">Premium Tires</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Driving your safety forward with top-quality tires and expert services. Explore our wide selection for every vehicle and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tires" className="bg-red-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
              Browse Tires
            </a>
            <a href="#services" className="bg-transparent border-2 border-red-500 text-red-500 font-bold py-3 px-8 rounded-md text-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Our Services
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;