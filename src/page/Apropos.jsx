// src/page/Apropos.jsx
import React from 'react';
import image10 from '../assets/images/image10.jpeg'; // Importation de l'image

const Apropos = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Section de l'image héro */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src={image10} // Utilisation de la balise <img>
          alt="Chocolats artisanaux"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Section de contenu */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="relative">
          {/* Texte décoratif */}
          <h2 className="absolute -top-10 left-0 text-8xl font-serif text-gray-200/20 select-none">
            Délices
          </h2>

          {/* Contenu principal */}
          <div className="relative space-y-8">
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
              À PROPOS DE MOI
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il existe une légende qui raconte l'histoire d'une jeune âme qui visitait la cuisine de sa grand-mère chaque dimanche. L'air était chargé de l'odeur de la vanille, du beurre et de l'amour. C'est là que la passion pour les pâtisseries a commencé, où des ingrédients simples se transformaient en rêves comestibles. Ce petit garçon est devenu, des années plus tard, un maître des arts pâtissiers français, après une décennie de dévouement et d'apprentissage auprès des meilleurs chefs pâtissiers de Paris.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Chaque pâtisserie qui sort de notre cuisine est un témoignage de ce parcours - un mélange de techniques traditionnelles et d'innovation moderne. Nous croyons que chaque dessert raconte une histoire, et nous sommes ici pour partager la nôtre avec vous. Notre engagement envers des ingrédients de qualité et un savoir-faire artisanal se reflète dans chaque création.
            </p>

            <div className="text-right mt-12">
              <img
                src={image10} // Utilisation de la balise <img> pour la signature
                alt="Signature"
                width={200}
                height={100}
                className="inline-block"
              />
              <p className="text-gray-600 mt-2 italic">Chef Pâtissier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos; // Assurez-vous que l'exportation par défaut est présente
