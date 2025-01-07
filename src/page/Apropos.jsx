import React from 'react';
import { Heart, Gift, Wine } from 'lucide-react';
import image10 from '../assets/images/image10.jpeg';
import image100 from '../assets/images/image100.png';

const features = [
    {
      icon: Heart,
      title: "SPÉCIALITÉS",
      description: "Un biscuit de pistache audacieux avec une couche de framboise fraîche, recouvert de chocolat blanc sans sucre, qui va certainement faire saliver. Nous utilisons uniquement des ingrédients biologiques sélectionnés avec soin, en privilégiant les producteurs locaux. Chaque création est minutieusement élaborée pour offrir une expérience gustative unique et mémorable."
    },
    {
      icon: Wine,
      title: "CÉLÉBRATIONS",
      description: "Lait d'avoine, chocolat et cerise créent mon délicieux gâteau au chocolat vegan, sans gluten et sans sucre. Une preuve pure que les gâteaux vegan peuvent être magnifiques et délicieux. Pour vos événements spéciaux, nous créons des pièces uniques qui reflètent votre personnalité tout en respectant vos préférences alimentaires. Mariages, anniversaires, ou toute autre occasion spéciale méritent une attention particulière."
    },
    {
      icon: Gift,
      title: "CADEAUX SPÉCIAUX",
      description: "Sain, sans gluten et sans sucre. Le seul inconvénient, si on peut appeler ça un inconvénient, est que vous voudrez définitivement une seconde part ! Nos coffrets cadeaux sont composés avec soin, associant nos meilleures créations à des packagings élégants et écologiques. Offrez un moment de pure gourmandise à vos proches avec nos assortiments personnalisables."
    }
];

const Apropos = () => {
  return (
    <>
      <div className="bg-[#FCF8ED]">
        <section className="relative w-full h-[400px] md:h-[500px]">
          <img
            src={image10} 
            alt="Chocolats artisanaux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl text-white font-serif text-center px-4 uppercase">
              NOTRE PASSION, VOTRE DÉLICE
            </h1>
          </div>
        </section>

        <main className="relative w-full">
          <div 
            className="py-16"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(252, 248, 237, 0.95), rgba(252, 248, 237, 0.95)), url(${image100})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="relative space-y-12">
                <h2 className="text-4xl md:text-5xl text-[#2C2C2C] text-center font-serif mb-16 uppercase">
                  À PROPOS DE MOI
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="text-[#2C2C2C] leading-relaxed text-sm">
                    Il existe une légende qui raconte l'histoire d'une jeune âme qui visitait la cuisine de sa grand-mère chaque dimanche. L'air était chargé de l'odeur de la vanille, du beurre et de l'amour. C'est là que la passion pour les pâtisseries a commencé, où des ingrédients simples se transformaient en rêves comestibles. Les recettes transmises de génération en génération sont devenues la base de mon inspiration, enrichies par des années d'expérience et d'innovation. Cette histoire familiale continue d'influencer chaque création qui sort de nos fours.
                  </p>
                  <p className="text-[#2C2C2C] leading-relaxed text-sm">
                    Chaque pâtisserie qui sort de notre cuisine est un témoignage de ce parcours - un mélange de techniques traditionnelles et d'innovation moderne. Nous croyons que chaque dessert raconte une histoire, et nous sommes ici pour partager la nôtre avec vous. Notre engagement envers l'excellence se reflète dans chaque détail, de la sélection méticuleuse des ingrédients à la présentation finale. Nous collaborons avec des producteurs locaux passionnés qui partagent notre vision de la qualité et du respect des traditions.
                  </p>
                </div>
                
                <div className="text-right mt-12">
                  <div className="inline-block font-serif text-[#8B4513] text-3xl italic">
                    Chef Pâtissier
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
                <img
                  src={image10} 
                  alt="Atelier de pâtisserie"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl text-[#2C2C2C] font-serif uppercase">
                  MON PARCOURS GOURMAND
                </h2>
                <p className="text-[#2C2C2C] leading-relaxed text-sm">
                  Depuis mon plus jeune âge, la pâtisserie a été bien plus qu'un métier. C'est une passion qui m'anime, un art que je cultive avec dedication. Chaque gâteau, chaque macaron est une histoire personnelle, un souvenir sucré qui prend forme entre mes mains. Mon apprentissage auprès des plus grands maîtres pâtissiers de France m'a permis d'acquérir une expertise technique solide, tout en développant ma propre signature créative. La recherche constante de nouvelles saveurs et de nouvelles techniques fait partie intégrante de mon quotidien.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FCF8ED] py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl text-[#2C2C2C] font-serif uppercase">
                  MA PHILOSOPHIE
                </h2>
                <p className="text-[#2C2C2C] leading-relaxed text-sm">
                  Pour moi, la pâtisserie est un art qui va au-delà du goût. C'est une expression de l'amour, de la tradition et de la créativité. Chaque création est une toile où je peins avec des saveurs, des textures et des émotions. Notre philosophie repose sur l'équilibre parfait entre tradition et innovation, entre technicité et émotion. Nous nous efforçons de créer des desserts qui non seulement ravissent les papilles, mais qui racontent aussi une histoire et créent des souvenirs impérissables.
                </p>
              </div>
              <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
                <img
                  src={image10} 
                  alt="Création pâtissière"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl text-[#2C2C2C] font-serif text-center mb-16 uppercase">
              NOS CRÉATIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#FCF8ED] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-auto">
                  <feature.icon 
                    className="w-12 h-12 text-[#8B4513] mx-auto mb-6" 
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-serif text-[#2C2C2C] text-center mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#2C2C2C] leading-relaxed text-center text-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Apropos;