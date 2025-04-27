import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center">© 2025 Styflex. Alle Rechte vorbehalten.</p>
        <ul className="flex justify-center gap-6 mt-4">
          <li><Link href="/datenschutz" className="hover:text-primary">Datenschutz</Link></li>
          <li><Link href="/agb" className="hover:text-primary">AGB</Link></li>
          <li><Link href="/impressum" className="hover:text-primary">Impressum</Link></li>
        </ul>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://tiktok.com" className="hover:text-primary">TikTok</a>
          <a href="https://instagram.com" className="hover:text-primary">Instagram</a>
          <a href="https://youtube.com" className="hover:text-primary">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
