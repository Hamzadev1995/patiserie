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
    
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-center text-pink-800 mb-8">Contactez-nous</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-8">
      <h2 className="text-2xl font-bold text-pink-800 mb-4">Nos coordonnées</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" p-4 rounded-lg ">
            <h3 className="font-bold text-gray-800">Téléphone</h3>
            <p className="text-gray-600 text-sm">+33 1 23 45 67 89</p>
          </div>
          <div className=" p-4 rounded-lg ">
            <h3 className="font-bold text-gray-800">Email</h3>
            <p className="text-gray-600 text-sm">contact@example.com</p>
          </div>
          <div className="p-4 rounded-lg ">
            <h3 className="font-bold text-gray-800">Adresse postale</h3>
            <p className="text-gray-600 text-sm">123 Rue de Exemple, 75000 Paris, France</p>
          </div>
        </div>
        </div>
        
      </div>
    
      

      
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-pink-800 mb-6 text-center">Formulaire de contact</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Demande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pink-800 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;
