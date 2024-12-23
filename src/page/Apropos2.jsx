import React from 'react';
// Import des images
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
      title: "Layered Caramel Cake",
      image: image1,
    },
    {
      title: "Chocolate-Peanut Cake(Snickers)",
      image: image2,
    },
    {
      title: "Chocolate-Cherry Cake",
      image: image3,
    },
    {
      title: "Wild Berry Cake",
      image: image4,
    }
  ];

  const galleryCakes = [cake1, cake2, cake3, cake4, cake5, cake6];

  return (
    <>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#C5B097] text-sm mb-4">CHOCOLATE GANACHE</p>
            <h2 className="text-4xl md:text-5xl text-[#2C2C2C] font-serif">
              WE CREATE LOVELY
              <br />
              MEMORIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cakes.map((cake, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center font-serif text-xl text-[#2C2C2C]">
                  {cake.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1E8] py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img 
              src={logo}
              alt="Guilt-Free Patisserie" 
              className="w-48"
            />
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-[#6B5B4D] text-sm leading-relaxed">
              Baking cakes has quickly become an obsession for me, baking healthy but keeping the taste is the true test which I pride myself on. I strive to reach perfection with each cake but like all bakers, I'm also still eager to learn more techniques and fine-tune my skills. Like every business owner I have an enormous amount of pride in my company, every review means so much to me. In this business, I only have one opportunity (which is your first taste) to show and express my work. The results of hours of work will ultimately be gleaned successful or unsuccessful in that 10 seconds taste test. This is why I have poured my heart into this career because I honestly believe my passion can be seen in the appearance and tasted within. It's always great to read good reviews and would like to share two with you
            </div>
            <div className="text-[#6B5B4D] text-sm leading-relaxed">
              Here is what Daren Smith, London (Diabetic patient) said after he tried my cake: "Thanks, Svetlana. The cake was really nice freshly baked and didn't raise my blood glucose level. Totally impressed with the taste. I really can't express how much it means to me to have been able to have a sugar-free cake on my birthday This is what Brian from Sunderland (Celiac patient)said: "Thanks for a lovely piece of delicious gluten-free cake. Everything about the cake was perfect. Really enjoyed it." Being able to help people who can't normally enjoy these treats gives me great pleasure and makes me move forward.
            </div>
          </div>

          {/* Signatures */}
          <div className="flex justify-center gap-12 mb-16">
            <div className="text-center">
              <img 
                src={signature1}
                alt="Brian Forrest signature" 
                className="h-16 mb-2"
              />
              <p className="text-[#6B5B4D] font-serif">Brian Forrest</p>
            </div>
            <div className="text-center">
              <img 
                src={signature2}
                alt="Daren Smith signature" 
                className="h-16 mb-2"
              />
              <p className="text-[#6B5B4D] font-serif">Daren Smith</p>
            </div>
          </div>

          {/* Gallery */}
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pb-4">
              {galleryCakes.map((cake, index) => (
                <div key={index} className="w-72 h-72">
                  <img
                    src={cake}
                    alt={`Cake ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apropos3;