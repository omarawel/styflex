import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Salons() {
  return (
    <div className="min-h-screen bg-neutral">
      <Head>
        <title>Für Salons - Styflex</title>
        <meta name="description" content="Werde Styflex-Partner und steigere deine Auslastung." />
        <meta name="keywords" content="Friseur Düsseldorf, Salonpartner, Beauty-Plattform" />
      </Head>

      <Header />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Dein Salon, unser Netzwerk</h1>
          <p className="text-xl mb-12 animate-fade-in">
            Steigere deine Auslastung und gewinne neue Kunden mit Styflex.
          </p>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Vorteile für deinen Salon</h2>
            <ul className="text-left text-lg mb-8">
              <li className="mb-4">Stabile Grundauslastung durch Abo-Kunden</li>
              <li className="mb-4">Zusätzliche Umsätze mit VIP-Services</li>
              <li className="mb-4">Kostenloses Marketing durch Styflex</li>
              <li className="mb-4">Digitale Tools für Terminmanagement und Analysen</li>
            </ul>
            <Link
              href="/salon-signup"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
            >
              Jetzt Partner werden
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
