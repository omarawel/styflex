import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Styflex</h3>
            <p className="text-gray-400">
              Flexible Beauty-Lösungen für jeden – einfach, planbar, fair.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-white">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-white">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-white">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              E-Mail: support@styflex.de<br />
              Telefon: +49 123 456789<br />
              Adresse: Musterstraße 1, 10115 Berlin
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2025 Styflex. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
