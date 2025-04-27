import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-neutral">
      <Head>
        <title>Datenschutz - Styflex</title>
        <meta name="description" content="Datenschutzrichtlinien von Styflex" />
      </Head>
      <Header />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Datenschutz</h1>
          <p className="text-lg mb-4">
            Bei Styflex nehmen wir den Schutz deiner persönlichen Daten ernst. Diese Datenschutzrichtlinie erklärt, wie wir deine Daten sammeln, verwenden und schützen.
          </p>
          <h2 className="text-2xl font-semibold mb-4">1. Datenerfassung</h2>
          <p className="text-lg mb-4">
            Wir erfassen Daten, die du uns bereitstellst, z. B. bei der Registrierung, Buchung eines Termins oder Kontaktaufnahme.
          </p>
          <h2 className="text-2xl font-semibold mb-4">2. Datenverwendung</h2>
          <p className="text-lg mb-4">
            Deine Daten werden verwendet, um unsere Dienstleistungen bereitzustellen, zu verbessern und dich über Angebote zu informieren.
          </p>
          <h2 className="text-2xl font-semibold mb-4">3. Kontakt</h2>
          <p className="text-lg mb-4">
            Bei Fragen zum Datenschutz kontaktiere uns unter <a href="mailto:support@styflex.de" className="text-primary">support@styflex.de</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
