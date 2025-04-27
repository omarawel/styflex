import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AGB() {
  return (
    <div className="min-h-screen bg-neutral">
      <Head>
        <title>AGB - Styflex</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen von Styflex" />
      </Head>
      <Header />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-lg mb-4">
            Willkommen bei Styflex! Die folgenden AGB regeln die Nutzung unserer Plattform.
          </p>
          <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
          <p className="text-lg mb-4">
            Diese AGB gelten für alle Nutzer der Styflex-Plattform, einschließlich Kunden und Salonpartner.
          </p>
          <h2 className="text-2xl font-semibold mb-4">2. Abonnement</h2>
          <p className="text-lg mb-4">
            Abonnements können jederzeit gekündigt werden, mit einer Kündigungsfrist von 30 Tagen zum Ende des Abrechnungszeitraums.
          </p>
          <h2 className="text-2xl font-semibold mb-4">3. Haftung</h2>
          <p className="text-lg mb-4">
            Styflex haftet nicht für Schäden, die durch unsachgemäße Nutzung der Plattform entstehen.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
