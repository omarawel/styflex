import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-neutral">
      <Head>
        <title>Impressum - Styflex</title>
        <meta name="description" content="Impressum von Styflex" />
      </Head>
      <Header />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Impressum</h1>
          <p className="text-lg mb-4">
            Angaben gemäß § 5 TMG
          </p>
          <h2 className="text-2xl font-semibold mb-4">Styflex GmbH</h2>
          <p className="text-lg mb-4">
            Musterstraße 1<br />
            10115 Berlin<br />
            Deutschland
          </p>
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <p className="text-lg mb-4">
            E-Mail: support@styflex.de<br />
            Telefon: +49 123 456789
          </p>
          <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
          <p className="text-lg mb-4">
            Max Mustermann (Geschäftsführer)
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
