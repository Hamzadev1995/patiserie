import React from 'react';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import logo from '../assets/images/image4.jpeg';
import cake1 from '../assets/images/image1.jpeg';
import cake2 from '../assets/images/image1.jpeg';
import cake3 from '../assets/images/image1.jpeg';
import cake4 from '../assets/images/image1.jpeg';
import cake5 from '../assets/images/image1.jpeg';
import cake6 from '../assets/images/image1.jpeg';
import signature1 from '../assets/images/image1.jpeg';
import signature2 from '../assets/images/image1.jpeg';

const Apropos3 = () => {
  const cakes = [
    {
      title: "LAYERED CARAMEL CAKE",
      image: image1,
    },
    {
      title: "CHOCOLATE-PEANUT CAKE",
      image: image2,
    },
    {
      title: "CHOCOLATE-CHERRY CAKE",
      image: image3,
    },
    {
      title: "WILD BERRY CAKE",
      image: image4,
    }
  ];

  const galleryCakes = [cake1, cake2, cake3, cake4, cake5, cake6];

  return (
    <div className="bg-[#FCF8ED]">
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-[#8B4513] text-sm mb-4 uppercase tracking-wider">PASSION POUR LE CHOCOLAT</p>
            <h2 className="text-4xl md:text-5xl text-[#2C2C2C] font-serif">
              NOUS CRÉONS DES
              <br />
              SOUVENIRS DÉLICIEUX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cakes.map((cake, index) => (
              <div key={index} className="bg-[#FCF8ED] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-center font-serif text-lg text-[#2C2C2C] py-4">
                  {cake.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8ED] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center mb-12">
            <img 
              src={logo}
              alt="Guilt-Free Patisserie" 
              className="w-48"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-[#2C2C2C] text-sm leading-relaxed">
                Baking cakes has quickly become an obsession for me, baking healthy but keeping the taste is the true test which I pride myself on. I strive to reach perfection with each cake but like all bakers, I'm also still eager to learn more techniques and fine-tune my skills. Like every business owner I have an enormous amount of pride in my company, every review means so much to me. In this business, I only have one opportunity (which is your first taste) to show and express my work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-[#2C2C2C] text-sm leading-relaxed">
                Here is what Daren Smith, London (Diabetic patient) said after he tried my cake: "Thanks, Svetlana. The cake was really nice freshly baked and didn't raise my blood glucose level. Totally impressed with the taste. I really can't express how much it means to me to have been able to have a sugar-free cake on my birthday."
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-12 mb-16">
            <div className="text-center">
              <img 
                src={signature1}
                alt="Brian Forrest signature" 
                className="h-16 mb-2"
              />
              <p className="text-[#2C2C2C] font-serif">Brian Forrest</p>
            </div>
            <div className="text-center">
              <img 
                src={signature2}
                alt="Daren Smith signature" 
                className="h-16 mb-2"
              />
              <p className="text-[#2C2C2C] font-serif">Daren Smith</p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-8">
              {galleryCakes.map((cake, index) => (
                <div key={index} className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={cake}
                    alt={`Cake ${index + 1}`}
                    className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-[#8B4513] text-sm uppercase tracking-wider">SWEET TASTE</p>
              <h2 className="text-4xl font-serif text-[#2C2C2C] mb-6">
                THE BEST PRALINES IN TOWN!
              </h2>
              <p className="text-[#2C2C2C] text-sm leading-relaxed">
                We all know that in order to sustain good health our body needs plenty of vitamins and minerals, but... do we get them with food? Quite often the answer is no, as most people just underestimate the importance of fruits in their diet, or simply can't 'squeeze them' in their 'dietary slot' or busy lifestyle. Let us introduce you to this vitamin blast which will prepare you for the winter but still has the taste of summer, made of 70% fruits! The combination of banana, strawberries and kiwi gives you everything you need for keeping your immune system strong and energy level high.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full">
                <img
                  src={image1}
                  alt="Chef at work"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full mt-12">
                <img
                  src={image2}
                  alt="Pralines presentation"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos3;