// src/page/Apropos.jsx
import React from 'react';
import image10 from '../assets/images/image10.jpeg'; // Importation de l'image

const Apropos = () => {
  return (
    <div className="min-h-screen bg-[#FCF8ED]"> {/* Changement de couleur de fond */}
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
            <h1 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Satisfy, cursive' }}>
              <i>À propos de moi</i>
            </h1>

            {/* Texte d'arrière-plan */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-brown-600 opacity-10" style={{ fontFamily: 'Satisfy, cursive' }}>
              éveiller vos papilles
            </div>

            <div className="container mx-auto px-4 py-2 max-w-4xl"> {/* Réduit le padding vertical */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Augmente l'espace entre les colonnes */}
                {/* Colonne gauche */}
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-xs"> {/* Réduit la taille de la police */}
                    Il existe une légende qui raconte l'histoire d'une jeune âme qui visitait la cuisine de sa grand-mère chaque dimanche. L'air était chargé de l'odeur de la vanille, du beurre et de l'amour. C'est là que la passion pour les pâtisseries a commencé, où des ingrédients simples se transformaient en rêves comestibles. Ce petit garçon est devenu, des années plus tard, un maître des arts pâtissiers français, après une décennie de dévouement et d'apprentissage auprès des meilleurs chefs pâtissiers de Paris.
                  </p>
                </div>

                {/* Colonne droite */}
                <div>
                  <p className="text-gray-700 leading-relaxed mb-1 text-xs"> {/* Réduit la taille de la police */}
                    Chaque pâtisserie qui sort de notre cuisine est un témoignage de ce parcours - un mélange de techniques traditionnelles et d'innovation moderne. Nous croyons que chaque dessert raconte une histoire, et nous sommes ici pour partager la nôtre avec vous. Notre engagement envers des ingrédients de qualité et un savoir-faire artisanal se reflète dans chaque création.
                  </p>
                </div>
              </div>
            </div>

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
