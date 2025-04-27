import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Image src="https://via.placeholder.com/120x40" alt="Styflex Logo" width={120} height={40} />
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
          <Link href="/abonnements" className="text-gray-700 hover:text-primary font-medium">Abonnements</Link>
          <Link href="/salons" className="text-gray-700 hover:text-primary font-medium">Für Salons</Link>
          <Link href="/vip" className="text-gray-700 hover:text-primary font-medium">VIP-Services</Link>
          <Link href="/ueber-uns" className="text-gray-700 hover:text-primary font-medium">Über Uns</Link>
          <Link href="/blog" className="text-gray-700 hover:text-primary font-medium">Blog</Link>
          <Link href="/support" className="text-gray-700 hover:text-primary font-medium">Support</Link>
        </nav>
        <Link href="/abonnements" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
          Jetzt Abo starten
        </Link>
      </div>
    </header>
  );
}
