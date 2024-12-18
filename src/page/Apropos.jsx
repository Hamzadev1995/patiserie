import React from 'react';
import image10 from '../assets/images/image10.jpeg';
import { Heart, Gift, Wine } from 'lucide-react'
import image100 from '../assets/images/image100.png';

const features = [
    {
      icon: Heart,
      title: "Spécialités",
      description: "Un biscuit de pistache audacieux avec une couche de framboise fraîche, recouvert de chocolat blanc sans sucre, qui va certainement faire saliver."
    },
    {
      icon: Wine,
      title: "Célébrations",
      description: "Lait d'avoine, chocolat et cerise créent mon délicieux gâteau au chocolat vegan, sans gluten et sans sucre. Une preuve pure que les gâteaux vegan peuvent être magnifiques et délicieux."
    },
    {
      icon: Gift,
      title: "Cadeaux Spéciaux",
      description: "Sain, sans gluten et sans sucre. Le seul inconvénient, si on peut appeler ça un inconvénient, est que vous voudrez definitivement une seconde part !"
    }
  ]

const Apropos = () => {
  return (
    <>
      <div className="bg-[#FCF8ED]">
        <section className="relative w-full h-[300px] md:h-[400px]">
          <img
            src={image10} 
            alt="Chocolats artisanaux"
            className="w-full h-full object-cover"
          />
        </section>

        <main 
  className="relative w-full -mx-[50vw] left-[50%] right-[50%]"
  style={{ 
    backgroundImage: `
      linear-gradient(to right, rgba(25, 248, 237, 0.9), rgba(25, 248, 237, 0.9)),
      url(${image100})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'luminosity', // Désature l'image
    filter: 'sepia(100%) hue-rotate(10deg) saturate(0%)', // Effet beige et désaturation
    backgroundColor: '#FCF8ED', // Couleur beige de base
    padding: '4rem 0' // Espacement vertical
  }}
>
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="relative">
      <div className="relative space-y-8">
        <h1 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Satisfy, cursive' }}>
          <i>À propos de moi</i>
        </h1>
        {/* Texte d'arrière-plan */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-brown-600 opacity-10"
          style={{ fontFamily: 'Satisfy, cursive' }}
        >
          éveiller vos papilles
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-gray-700 leading-relaxed mb-4 text-sm">
            Il existe une légende qui raconte l'histoire d'une jeune âme qui visitait la cuisine de sa grand-mère chaque dimanche. L'air était chargé de l'odeur de la vanille, du beurre et de l'amour. C'est là que la passion pour les pâtisseries a commencé, où des ingrédients simples se transformaient en rêves comestibles. Ce petit garçon est devenu, des années plus tard, un maître des arts pâtissiers français, après une décennie de dévouement et d'apprentissage auprès des meilleurs chefs pâtissiers de Paris.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm">
            Chaque pâtisserie qui sort de notre cuisine est un témoignage de ce parcours - un mélange de techniques traditionnelles et d'innovation moderne. Nous croyons que chaque dessert raconte une histoire, et nous sommes ici pour partager la nôtre avec vous. Notre engagement envers des ingrédients de qualité et un savoir-faire artisanal se reflète dans chaque création.
          </p>
        </div>
        <div className="text-right mt-12">
          <div
            className="inline-block font-satisfy text-3xl italic text-brown-800"
            style={{ fontFamily: 'Satisfy, cursive' }}
          >
            Chef Pâtissier
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-[300px] md:h-[500px]">
                <img
                  src={image10} 
                  alt="Atelier de pâtisserie"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 
                  className="text-4xl md:text-5xl text-center mb-12" 
                  style={{ fontFamily: 'Satisfy, cursive' }}
                >
                  <i>Mon Parcours Gourmand</i>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Depuis mon plus jeune âge, la pâtisserie a été bien plus qu'un métier. C'est une passion qui m'anime, un art que je cultive avec dedication. Chaque gâteau, chaque macaron est une histoire personnelle, un souvenir sucré qui prend forme entre mes mains. Mon voyage m'a conduit à explorer les techniques traditionnelles françaises, tout en y apportant ma touche d'innovation et de créativité.
                </p>
                <div 
                  className="absolute text-6xl text-brown-600 opacity-10" 
                  style={{ 
                    fontFamily: 'Satisfy, cursive',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  éveiller vos papilles
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 
                  className="text-4xl md:text-5xl text-center mb-12" 
                  style={{ fontFamily: 'Satisfy, cursive' }}
                >
                  <i>Ma Philosophie</i>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour moi, la pâtisserie est un art qui va au-delà du goût. C'est une expression de l'amour, de la tradition et de la créativité. Chaque création est une toile où je peins avec des saveurs, des textures et des émotions. Je m'engage à utiliser uniquement les meilleurs ingrédients, à respecter les techniques ancestrales et à surprendre vos papilles à chaque bouchée.
                </p>
                <div 
                  className="absolute text-6xl text-brown-600 opacity-10" 
                  style={{ 
                    fontFamily: 'Satisfy, cursive',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  éveiller vos papilles
                </div>
              </div>
              <div className="relative w-full h-[300px] md:h-[500px]">
                <img
                  src={image10} 
                  alt="Création pâtissière"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Apropos;