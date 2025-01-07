import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'envoi du formulaire, par exemple en utilisant une API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl text-[#2C2C2C] font-serif text-center mb-12">
        Votre idée, notre gâteau
      </h1>

      <div className="bg-[#FCF8ED] p-8 rounded-lg shadow-md mb-12 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-serif text-[#2C2C2C] mb-8 text-center">Nos coordonnées</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-serif text-[#2C2C2C] font-bold mb-2">Téléphone</h3>
            <p className="text-gray-600">+33 1 23 45 67 89</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-serif text-[#2C2C2C] font-bold mb-2">Email</h3>
            <p className="text-gray-600">contact@example.com</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-serif text-[#2C2C2C] font-bold mb-2">Adresse postale</h3>
            <p className="text-gray-600 text-center">123 Rue de Exemple, 75000 Paris, France</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FCF8ED] p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-serif text-[#2C2C2C] mb-8 text-center">
          Formulaire de contact
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-[#2C2C2C] font-serif mb-2">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-[#2C2C2C] font-serif mb-2">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-all duration-300"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-[#2C2C2C] font-serif mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#2C2C2C] font-serif mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#2C2C2C] text-white font-serif py-3 px-8 rounded-lg hover:bg-[#8B4513] transition-colors duration-300"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
