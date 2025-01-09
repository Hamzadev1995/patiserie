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
  const gateaux = [
    {
      titre: "L'IRRÉSISTIBLE CARAMEL",
      image: image1,
      categorie: "Sans Sucre"
    },
    {
      titre: "DÉLICE CHOCOLAT-CACAHUÈTE",
      image: image2,
      categorie: "Sans Gluten"
    },
    {
      titre: "TENTATION CHOCOLAT-CERISE",
      image: image3,
      categorie: "Végan"
    },
    {
      titre: "SYMPHONIE DE FRUITS ROUGES",
      image: image4,
      categorie: "Paléo"
    }
  ];

  const galerieGateaux = [cake1, cake2, cake3, cake4, cake5, cake6];

  return (
    <div className="bg-[#FCF8ED]">
      {/* Hero Section - Reduced top padding */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-[#8B4513] text-sm mb-2 uppercase tracking-wider">
              L'art de la pâtisserie
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2C2C2C] font-serif">
              Des Créations
              <br />
              Qui Enchantent
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gateaux.map((gateau, index) => (
              <div 
                key={index} 
                className="group bg-[#FCF8ED] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={gateau.image}
                    alt={gateau.titre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-[#8B4513] bg-white/80 px-2 py-1 rounded-full">
                    {gateau.categorie}
                  </span>
                  <h3 className="font-serif text-lg text-[#2C2C2C] mt-2">
                    {gateau.titre}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Reduced spacing */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#FCF8ED] rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-serif text-3xl text-[#2C2C2C] mb-4">Notre Passion</h2>
                <p className="text-[#2C2C2C] leading-relaxed">
                  La pâtisserie est devenue bien plus qu'un métier pour moi, c'est une véritable passion. Mon défi quotidien est de créer des gâteaux sains sans jamais compromettre le goût. Je recherche l'excellence dans chaque création, tout en continuant d'explorer de nouvelles techniques pour parfaire mon art.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="font-serif text-2xl text-[#2C2C2C] mb-4">Témoignage</h3>
                <blockquote className="text-[#2C2C2C] leading-relaxed italic">
                  "Un véritable enchantement ! Le gâteau était non seulement délicieux mais n'a pas affecté ma glycémie. Le goût était exceptionnel. Je ne saurais exprimer ma joie d'avoir pu savourer un gâteau sans sucre pour mon anniversaire."
                  <footer className="mt-4 text-right text-[#8B4513] not-italic">
                    <p className="font-medium">Daren Smith</p>
                    <p className="text-sm">Client diabétique, Paris</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Reduced spacing */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-[#8B4513] text-sm uppercase tracking-wider">
                Saveurs uniques
              </p>
              <h2 className="text-4xl font-serif text-[#2C2C2C]">
                Les pralines les plus raffinées
              </h2>
              <p className="text-[#2C2C2C] leading-relaxed">
                Pour une santé optimale, notre corps a besoin d'un apport équilibré en vitamines et minéraux. Face au rythme intense de la vie moderne, il est parfois difficile d'intégrer suffisamment de fruits frais dans notre alimentation. Découvrez notre création vitaminée, un véritable concentré d'énergie qui allie le meilleur de l'été aux bienfaits nutritionnels dont vous avez besoin.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={image1}
                alt="Notre chef en création"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src={image2}
                alt="Assortiment de pralines"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Reduced spacing */}
      <section className="py-12 bg-[#FCF8ED]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-[#8B4513] text-sm mb-2 uppercase tracking-wider">
              Choco Love
            </p>
            <h2 className="text-4xl md:text-5xl text-[#2C2C2C] font-serif">
              DOUCEUR POUR LES
              <br />
              JOURS SPÉCIAUX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-serif text-xl mb-3 text-[#2C2C2C]">Confiseries</h3>
              <p className="text-[#2C2C2C]">
                Qui pourrait résister au goût d'un gâteau chocolat-cacahuète ? Sans prétendre être aussi célèbre qu'une barre de Snickers, il a toutes les chances de surpasser sa popularité !
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-serif text-xl mb-3 text-[#2C2C2C]">Célébrations</h3>
              <p className="text-[#2C2C2C]">
                Tout le monde mérite de profiter des desserts, et nos gâteaux peuvent être appréciés que vous soyez diabétique, cœliaque ou que vous comptiez simplement les calories.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-serif text-xl mb-3 text-[#2C2C2C]">100% Chocolat</h3>
              <p className="text-[#2C2C2C]">
                La Pâtisserie Sans Culpabilité possède aussi la magie du 137. C'est le nombre de calories pour 100g d'un Gâteau Fruits des Bois.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos3;