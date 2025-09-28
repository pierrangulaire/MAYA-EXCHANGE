import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Maya Exchange
          </Link>
          <div className="space-x-4">
            <Link to="/exchange" className="text-gray-600 hover:text-blue-600">
              Échanger
            </Link>
            <Link to="/history" className="text-gray-600 hover:text-blue-600">
              Historique
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}