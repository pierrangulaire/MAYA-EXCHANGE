export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Maya Exchange</h3>
            <p className="text-sm text-gray-400">Échange de devises simple et sécurisé</p>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Maya Exchange. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  )
}