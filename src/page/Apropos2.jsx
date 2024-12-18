import React from 'react';

const Apropos = () => {
    return (
<div className="bg-[#FCF8ED] py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center space-y-4">
          <feature.icon 
            className="w-12 h-12 text-brown-600 stroke-[1.5]" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <h3 className="text-2xl font-satisfy text-brown-800">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-sm mx-auto text-sm">
            {feature.description}
          </p>
        </div>
      ))}
  
export default Apropos;