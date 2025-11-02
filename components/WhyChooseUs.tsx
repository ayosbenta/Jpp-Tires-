import React from 'react';
import { ChartBarIcon, UsersIcon, CheckBadgeIcon, ClockIcon } from './icons/Icons';

const features = [
  {
    icon: <UsersIcon />,
    name: 'Expert Technicians',
    description: 'Our certified professionals have years of experience and are dedicated to quality service.',
  },
  {
    icon: <ChartBarIcon />,
    name: 'Wide Selection',
    description: 'We offer a vast inventory of tires from leading brands to fit any vehicle and budget.',
  },
  {
    icon: <CheckBadgeIcon />,
    name: 'Competitive Pricing',
    description: 'Get the best value for your money with our transparent and fair pricing. No hidden fees.',
  },
  {
    icon: <ClockIcon />,
    name: 'Fast & Reliable Service',
    description: 'We respect your time. Our efficient process ensures you\'re back on the road quickly.',
  },
]

const WhyChooseUs: React.FC = () => {
  return (
    <div id="why-us" className="relative bg-slate-800 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why <span className="text-red-500">JPP Tires Trading</span> is the Right Choice
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We're not just a tire shop; we're your partners in automotive safety and performance.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs;