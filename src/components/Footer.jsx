function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
  <div className="container mx-auto px-4 py-6 flex flex-col justify-between">
    <div className="flex justify-center space-x-4 mb-4">
      <a href="/conditions-generales" className="text-gray-600 hover:text-blue-600">
        Conditions générales de vente
      </a>
      <span className="text-gray-600">|</span>
      <a href="/mentions-legales" className="text-gray-600 hover:text-blue-600">
        Mentions légales
      </a>
      <span className="text-gray-600">|</span>
      <a href="/informations-cookies" className="text-gray-600 hover:text-blue-600">
        Informations sur les cookies
      </a>
      <span className="text-gray-600">|</span>
      <a href="/politique-confidentialite" className="text-gray-600 hover:text-blue-600">
        Politique de confidentialité
      </a>
    </div>
    <p className="text-center text-gray-600">
      © {new Date().getFullYear()} Hamz. Tous droits réservés.
    </p>
  </div>
</footer>

      
    )
  }
  
  export default Footer