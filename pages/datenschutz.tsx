import Head from 'next/head';
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
          <p className="text-lg">Hier sind unsere Datenschutzrichtlinien...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
