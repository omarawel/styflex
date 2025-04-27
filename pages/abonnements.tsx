import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Abonnements() {
  return (
    <div className="min-h-screen bg-neutral">
      <Head>
        <title>Abonnements - Styflex</title>
        <meta name="description" content="Wähle dein Beauty-Abo: Basic, Premium oder Pro." />
        <meta name="keywords" content="Beauty-Abo, Friseur Düsseldorf, flexible Haarschnitte" />
      </Head>

      <Header />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Finde dein perfektes Beauty-Abo</h1>
          <p className="text-xl mb-12 animate-fade-in">
            Von gelegentlichen Haarschnitten bis hin zu Premium-Services: Wähle, was zu dir passt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition">
              <h2 className="text-3xl font-semibold mb-4">Basic</h2>
              <p className="text-2xl text-primary mb-6">19,99 €/Monat</p>
              <ul className="text-left mb-6">
                <li className="mb-2">1 Basisleistung/Monat (z. B. Haarschnitt)</li>
                <li className="mb-2">Buchung in Nebenzeiten (9:00-14:00)</li>
                <li className="mb-2">5% Rabatt auf Zusatzleistungen</li>
                <li className="mb-2">Green-Zuschlag optional (+2 €)</li>
              </ul>
              <Link
                href="/signup"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
              >
                Basic wählen
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition">
              <h2 className="text-3xl font-semibold mb-4">Premium</h2>
              <p className="text-2xl text-primary mb-6">39,99 €/Monat</p>
              <ul className="text-left mb-6">
                <li className="mb-2">2 Basisleistungen/Monat</li>
                <li className="mb-2">Bevorzugte Buchungszeiten (9:00-20:00)</li>
                <li className="mb-2">10% Rabatt auf Zusatzleistungen</li>
                <li className="mb-2">Green-Zuschlag optional (+2 €)</li>
              </ul>
              <Link
                href="/signup"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
              >
                Premium wählen
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition">
              <h2 className="text-3xl font-semibold mb-4">Pro</h2>
              <p className="text-2xl text-primary mb-6">59,99 €/Monat</p>
              <ul className="text-left mb-6">
                <li className="mb-2">3 Basisleistungen/Monat</li>
                <li className="mb-2">Prioritätsbuchung (alle Zeiten)</li>
                <li className="mb-2">20% Rabatt auf Zusatzleistungen</li>
                <li className="mb-2">Green-Zuschlag optional (+2 €)</li>
              </ul>
              <Link
                href="/signup"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
              >
                Pro wählen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
