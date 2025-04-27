import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral">
      <Head>
        <title>Styflex - Deine Beauty-Abo-Plattform</title>
        <meta
          name="description"
          content="Flexible Beauty-Abos für Haarschnitte, Bartpflege & mehr. Planbar, fair, modern."
        />
        <meta name="keywords" content="Beauty-Abo, Friseur Düsseldorf, flexible Haarschnitte, nachhaltige Beauty" />
      </Head>

      <Header />

      <section
        className="pt-24 pb-16 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605497788044-5a32c7078406)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Beauty, wie du willst – wann du willst
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Flexible Abos für Haarschnitte, Bartpflege & mehr – einfach, planbar, fair.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in">
            <Link
              href="/abonnements"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-green-600 transition transform hover:scale-105"
            >
              Dein Abo wählen
            </Link>
            <Link
              href="/salons"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition transform hover:scale-105"
            >
              Salonpartner werden
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Warum Styflex?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition">
              <Image
                src="https://www.flaticon.com/svg/vstatic/icons/svg/149/149852.svg?token=exp=1617049725~hmac=7e3e8b7d2c9b3e5d6e7b8c9d2e7b8c9d"
                alt="Planbar"
                width={50}
                height={50}
                className="mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">Planbare Beauty</h3>
              <p className="text-gray-600">Transparente Preise, volle Kostenkontrolle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition">
              <Image
                src="https://www.flaticon.com/svg/vstatic/icons/svg/149/149852.svg?token=exp=1617049725~hmac=7e3e8b7d2c9b3e5d6e7b8c9d2e7b8c9d"
                alt="Flexibel"
                width={50}
                height={50}
                className="mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">Flexible Buchung</h3>
              <p className="text-gray-600">Buche per App – jederzeit, überall.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition">
              <Image
                src="https://www.flaticon.com/svg/vstatic/icons/svg/149/149852.svg?token=exp=1617049725~hmac=7e3e8b7d2c9b3e5d6e7b8c9d2e7b8c9d"
                alt="Green"
                width={50}
                height={50}
                className="mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">Nachhaltigkeit</h3>
              <p className="text-gray-600">Mit jedem Abo die Umwelt unterstützen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Unsere Abonnements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Basic</h3>
              <p className="text-xl text-primary mb-6">19,99 €/Monat</p>
              <Link href="/abonnements" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-600">
                Mehr erfahren
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-xl text-primary mb-6">39,99 €/Monat</p>
              <Link href="/abonnements" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-600">
                Mehr erfahren
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-xl text-primary mb-6">59,99 €/Monat</p>
              <Link href="/abonnements" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-600">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
