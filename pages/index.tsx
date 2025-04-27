import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export default function Home() {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 52.520008, // Beispiel: Berlin Koordinaten
    lng: 13.404954,
  };

  const events = [
    {
      title: 'Haarschnitt Termin',
      start: new Date(2025, 3, 28, 10, 0), // 28. April 2025, 10:00
      end: new Date(2025, 3, 28, 11, 0),   // 28. April 2025, 11:00
    },
    {
      title: 'Bartpflege Termin',
      start: new Date(2025, 3, 29, 14, 0), // 29. April 2025, 14:00
      end: new Date(2025, 3, 29, 15, 0),   // 29. April 2025, 15:00
    },
  ];

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

      <section className="pt-24 pb-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
              alt="Styflex Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Beauty, wie du willst – wann du willst
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Flexible Abos für Haarschnitte, Bartpflege & mehr – einfach, planbar, fair.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in">
              <Link href="/abonnements">
                <span className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                  Dein Abo wählen
                </span>
              </Link>
              <Link href="/salons">
                <span className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition transform hover:scale-105">
                  Salonpartner werden
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Warum Styflex?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=50&h=50&fit=crop"
                alt="Planbar Icon"
                width={50}
                height={50}
                className="mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">Planbare Beauty</h3>
              <p className="text-gray-600">Transparente Preise, volle Kostenkontrolle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=50&h=50&fit=crop"
                alt="Flexibel Icon"
                width={50}
                height={50}
                className="mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">Flexible Buchung</h3>
              <p className="text-gray-600">Buche per App – jederzeit, überall.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition">
              <Image
                src="https://images.unsplash.com/photo-1509228627152-72ae9ae00bc4?w=50&h=50&fit=crop"
                alt="Green Icon"
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Finde Salons in deiner Nähe</h2>
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={12}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Buche deinen Termin</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            className="bg-white rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Das sagen unsere Kunden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Kunde 1"
                width={100}
                height={100}
                className="mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 italic">
                „Styflex hat mein Beauty-Erlebnis revolutioniert! So einfach und flexibel.“
              </p>
              <p className="font-semibold mt-2">– Anna S.</p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                alt="Kunde 2"
                width={100}
                height={100}
                className="mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 italic">
                „Ich liebe die Möglichkeit, jederzeit Termine zu buchen.“
              </p>
              <p className="font-semibold mt-2">– Lukas M.</p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1517841902196-7e9c7ef145d8?w=100&h=100&fit=crop"
                alt="Kunde 3"
                width={100}
                height={100}
                className="mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 italic">
                „Die besten Preise und super Service – ich bin begeistert!“
              </p>
              <p className="font-semibold mt-2">– Julia K.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
