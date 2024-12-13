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
      <h1 className="text-3xl font-bold text-center mb-6">Contactez-nous</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Informations de contact</h2>
        <p className="text-lg"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
        <p className="text-lg"><strong>Email :</strong> contact@example.com</p>
        <p className="text-lg"><strong>Adresse postale :</strong> 123 Rue de Exemple, 75000 Paris, France</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numéro de téléphone :</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Demande :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
