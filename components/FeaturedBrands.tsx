
import React from 'react';

const brands = [
  'michelin',
  'goodyear',
  'bridgestone',
  'continental',
  'pirelli',
  'yokohama'
];

const BrandLogo: React.FC<{ brandName: string }> = ({ brandName }) => (
    <div className="flex justify-center items-center p-4">
        <img 
            src={`https://logo.clearbit.com/${brandName}.com`} 
            alt={`${brandName} logo`}
            className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
    </div>
);

const FeaturedBrands: React.FC = () => {
  return (
    <section id="tires" className="bg-slate-800 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-300 uppercase tracking-wider">
          We stock tires from world-class manufacturers
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:grid-cols-6">
            {brands.map(brand => (
                <BrandLogo key={brand} brandName={brand} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
