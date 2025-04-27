
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingSystem from '../components/BookingSystem';
import FAQ from '../components/FAQ';
import ProductCarousel from '../components/ProductCarousel';
import StickyNav from '../components/StickyNav';
import SearchFilter from '../components/SearchFilter';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

export default function Home() {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 51.2277, // Düsseldorf Koordinaten
    lng: 6.7735,
  };

  const events = [
    {
      title: 'Haarschnitt Termin',
      start: new Date(2025, 3, 28, 10, 0),
      end: new Date(2025, 3, 28, 11, 0),
    },
    {
      title: 'Bartpflege Termin',
      start: new Date(2025, 3, 29, 14, 0),
      end: new Date(2025, 3, 29, 15, 0),
    },
  ];

  const categories = [
    { name: 'Salon' },
    { name: 'Barber' },
    { name: 'Haarfarbe' },
    { name: 'Styling' },
  ];

  const [filteredCategories, setFilteredCategories] = useState(categories);

  const salons = [
    { name: 'Glam Studio Altstadt', services: ['Haarschnitt', 'Färben', 'Maniküre'] },
    { name: 'Chic Salon Oberkassel', services: ['Bartpflege', 'Augenbrauenkorrektur'] },
    { name: 'Elegance Spa Flingern', services: ['Haarschnitt', 'Wellness-Behandlungen'] },
  ];

  const [filteredSalons, setFilteredSalons] = useState(salons);

  const products = [
    {
      name: 'Wella Organic Shampoo',
      brand: 'Von Wella Professionals',
      price: '€24.99',
      description: 'Nachhaltiges Shampoo.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop',
    },
    {
      name: 'Schwarzkopf Styling Gel',
      brand: 'Von Schwarzkopf',
      price: '€19.99',
      description: 'Langanhaltender Halt.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=200&fit=crop',
    },
    {
      name: 'Nivea Facial Cleanser',
      brand: 'Von Nivea',
      price: '€29.99',
      description: 'Sanfte Reinigung.',
      image: 'https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=300&h=200&fit=crop',
    },
  ];

  const faqs = [
    {
      question: 'Was macht Styflex zur führenden Plattform für Friseursalons?',
      answer: 'Styflex bietet eine einfache Buchungsplattform, exklusive Vorteile für Salons in Düsseldorf und ein nahtloses Erlebnis für Kunden.',
    },
    {
      question: 'Wie hilft Styflex meinem Salon zu wachsen?',
      answer: 'Wir bringen neue Kunden, bieten Werbemöglichkeiten und helfen dir, deinen Umsatz mit unserem Premium Badge Programm zu steigern.',
    },
    {
      question: 'Gibt es versteckte Kosten?',
      answer: 'Nein, Styflex ist transparent. Alle Gebühren werden klar kommuniziert, und es gibt keine versteckten Kosten.',
    },
    {
      question: 'Gibt es eine Mindestlaufzeit?',
      answer: 'Nein, unsere Pläne sind flexibel und können monatlich gekündigt werden.',
    },
    {
      question: 'Ist Styflex für Salons jeder Größe geeignet?',
      answer: 'Ja, Styflex unterstützt kleine und große Salons in Düsseldorf gleichermaßen.',
    },
    {
      question: 'Welche Salons können Styflex nutzen?',
      answer: 'Alle Friseursalons und Barbershops in Düsseldorf können sich anmelden.',
    },
    {
      question: 'Wie kann Styflex helfen, Terminausfälle zu reduzieren?',
      answer: 'Mit automatischen Erinnerungen und einfacher Umbuchung minimieren wir No-Shows.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Styflex Düsseldorf - Die führende Software für Salons</title>
        <meta
          name="description"
          content="Einfache, flexible und leistungsstarke Buchungssoftware für dein Unternehmen in Düsseldorf."
        />
        <meta name="keywords" content="Beauty-Abo, Friseur Düsseldorf, flexible Haarschnitte, nachhaltige Beauty" />
      </Head>

      <Header />
      <StickyNav />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
              alt="Modernes Friseurstudio"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Die führende Software für Salons und Spas
            </h1>
            <p className="text-lg sm:text-xl mb-8 animate-fade-in text-gray-600">
              Einfache, flexible und leistungsstarke Buchungssoftware für dein Unternehmen in Düsseldorf.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in">
              <Link href="/abonnements">
                <span className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition transform hover:scale-105 text-lg">
                  Jetzt loslegen
                </span>
              </Link>
              <Link href="/salons">
                <span className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition transform hover:scale-105 text-lg flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Einführung ansehen
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-900">
            Entdecken Sie Beauty-Dienstleistungen in Düsseldorf
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Finden Sie die perfekte Dienstleistung für sich, von Haarschnitten bis hin zu Wellness-Behandlungen, alles in Düsseldorf.
          </p>
          <SearchFilter
            items={categories}
            placeholder="Dienstleistungen suchen..."
            onFilter={setFilteredCategories}
            type="category"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <Image
                  src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop`}
                  alt={category.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xl font-bold">{category.name}</p>
                </div>
                <p className="text-center text-gray-900 font-medium py-4">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile für Endkunden und Salons */}
      <section id="vorteile" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Warum Styflex wählen?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Vorteile für Endkunden und Salons in Düsseldorf.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Für Endkunden</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Einfache und schnelle Terminbuchung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Exklusive Rabatte mit Abonnements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Zugang zu den besten Salons in Düsseldorf</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Sichere und unkomplizierte Zahlungen</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Für Salons</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Mehr Kunden durch unsere Plattform</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Umsatzsteigerung mit Zahlungslösungen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Einfache Terminverwaltung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Werbemöglichkeiten durch Premium Badge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eine Plattform für alle */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Eine Plattform für alle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop"
                alt="Salon"
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Salon</h3>
                <p className="text-gray-600">Für Friseursalons in Düsseldorf, die mehr Kunden erreichen möchten.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=200&fit=crop"
                alt="Barber"
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Barber</h3>
                <p className="text-gray-600">Für Barbershops, die moderne Buchungslösungen suchen.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <Image
                src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=300&h=200&fit=crop"
                alt="Kunden"
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kunden</h3>
                <p className="text-gray-600">Für Kunden, die einfach und schnell Termine buchen möchten.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Die bevorzugte Wahl der Branche */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Die bevorzugte Wahl der Branche
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wir sind die führende Plattform für Friseursalons in Düsseldorf. Unsere Bemühungen, die beste Buchungssoftware aufzubauen und Kunden ein einzigartiges Erlebnis zu bieten, finden in der Branche höchste Anerkennung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <p className="text-4xl font-bold text-primary mb-4">26%</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mehr Kunden</h3>
              <p className="text-gray-600">
                Gewinne neue Kunden und verwandle sie in Stammgäste – auf der führenden Plattform für die Beauty-Branche in Düsseldorf. Tag für Tag.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop"
                alt="Salon Testimonial"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-2xl mb-4"
              />
              <p className="text-gray-600 italic">
                "Styflex hat unseren Salon in Düsseldorf revolutioniert. Wir haben mehr Kunden als je zuvor!"
              </p>
              <p className="text-gray-900 font-medium mt-2">– Glam Studio Altstadt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steigere deinen Umsatz mit Zahlungen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Steigere deinen Umsatz mit Zahlungen
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Nutze die Vorteile von sicheren und einfachen Zahlungen direkt über Styflex.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=400&fit=crop"
                alt="Salon Payment"
                width={800}
                height={400}
                className="rounded-2xl shadow-md w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Akzeptiere Zahlungen schnell und sicher
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Integrierte Lösung für deinen Salon
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Keine zusätzlichen Gebühren
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unternehmensführung */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Unternehmensführung
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Styflex unterstützt dich dabei, deinen Salon in Düsseldorf weiterzuentwickeln, neue Kunden zu gewinnen und den Umsatz zu steigern. Sieh dir an, wie es funktioniert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buchungen</h3>
              <p className="text-gray-600">Verwalte Termine einfach und effizient.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kunden</h3>
              <p className="text-gray-600">Behalte den Überblick über deine Kundenbasis.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Umsatz</h3>
              <p className="text-gray-600">Steigere deinen Umsatz mit unseren Tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans Comparison */}
      <section id="plans" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Vergleiche unsere Jahres-Abonnements
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wähle das perfekte Abonnement für deine Bedürfnisse in Düsseldorf.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-gray-900 font-bold">Merkmale</th>
                  <th className="p-4 text-gray-900 font-bold">Basic</th>
                  <th className="p-4 text-gray-900 font-bold">Premium</th>
                  <th className="p-4 text-gray-900 font-bold">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Zielgruppe</td>
                  <td className="p-4 text-gray-600">Gelegenheitsnutzer, preissensible Kunden (z. B. Studierende)</td>
                  <td className="p-4 text-gray-600">Regelmäßige Nutzer mit gehobenem Anspruch (z. B. Berufstätige)</td>
                  <td className="p-4 text-gray-600">Vielnutzer, Premiumkunden (z. B. Geschäftsleute)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Preis (monatlich)</td>
                  <td className="p-4 text-gray-600">19,99 €/Monat</td>
                  <td className="p-4 text-gray-600">39,99 €/Monat</td>
                  <td className="p-4 text-gray-600">59,99 €/Monat</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Preis (jährlich, 10 % Rabatt)</td>
                  <td className="p-4 text-gray-600">215,89 €/Jahr (~17,99 €/Monat)</td>
                  <td className="p-4 text-gray-600">431,89 €/Jahr (~35,99 €/Monat)</td>
                  <td className="p-4 text-gray-600">647,89 €/Jahr (~53,99 €/Monat)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Green-Zuschlag (optional)</td>
                  <td className="p-4 text-gray-600">+2 €/Monat oder +21,60 €/Jahr</td>
                  <td className="p-4 text-gray-600">+2 €/Monat oder +21,60 €/Jahr</td>
                  <td className="p-4 text-gray-600">+2 €/Monat oder +21,60 €/Jahr</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Anzahl der Basisleistungen/Monat</td>
                  <td className="p-4 text-gray-600">1 Basisleistung (Haarschnitt, Bartpflege, Augenbrauenkorrektur)</td>
                  <td className="p-4 text-gray-600">2 Basisleistungen</td>
                  <td className="p-4 text-gray-600">3 Basisleistungen</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Buchungszeiten</td>
                  <td className="p-4 text-gray-600">Nebenzeiten (werktags 9:00–14:00)</td>
                  <td className="p-4 text-gray-600">Bevorzugte Zeiten (werktags 9:00–20:00, Samstag 9:00–14:00)</td>
                  <td className="p-4 text-gray-600">Priorität (alle Zeiten, Top-Salons)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Rabatt auf Zusatzleistungen</td>
                  <td className="p-4 text-gray-600">5%</td>
                  <td className="p-4 text-gray-600">10%</td>
                  <td className="p-4 text-gray-600">20%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Treuepunkte pro Basisleistung</td>
                  <td className="p-4 text-gray-600">2 Punkte</td>
                  <td className="p-4 text-gray-600">5 Punkte</td>
                  <td className="p-4 text-gray-600">8 Punkte</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Jährlicher Bonus (bei Jahresabo)</td>
                  <td className="p-4 text-gray-600">+10 Punkte nach 12 Monaten</td>
                  <td className="p-4 text-gray-600">+20 Punkte nach 12 Monaten</td>
                  <td className="p-4 text-gray-600">+30 Punkte nach 12 Monaten</td>
                </tr>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4">
                    <Link href="/abonnements" className="block w-full bg-primary text-white py-2 rounded-full hover:bg-green-600 transition text-lg font-medium text-center">
                      Basic wählen
                    </Link>
                  </td>
                  <td className="p-4">
                    <Link href="/abonnements" className="block w-full bg-primary text-white py-2 rounded-full hover:bg-green-600 transition text-lg font-medium text-center">
                      Premium wählen
                    </Link>
                  </td>
                  <td className="p-4">
                    <Link href="/abonnements" className="block w-full bg-primary text-white py-2 rounded-full hover:bg-green-600 transition text-lg font-medium text-center">
                      Pro wählen
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vergleich: Styflex Abonnement vs. Herkömmlicher Friseur */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Styflex Abonnement vs. Herkömmlicher Friseur
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wie schneidet Styflex im Vergleich zu einem herkömmlichen Friseurbesuch ohne Abo ab? (Basisleistungen: 30–40 € pro Besuch)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-gray-900 font-bold">Merkmale</th>
                  <th className="p-4 text-gray-900 font-bold">Styflex Basic (Jährlich)</th>
                  <th className="p-4 text-gray-900 font-bold">Styflex Premium (Jährlich)</th>
                  <th className="p-4 text-gray-900 font-bold">Styflex Pro (Jährlich)</th>
                  <th className="p-4 text-gray-900 font-bold">Herkömmliche Friseurbesuche (Ohne Abo)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Kosten pro Jahr (ohne Green-Zuschlag)</td>
                  <td className="p-4 text-gray-600">215,89 € (~17,99 €/Monat)</td>
                  <td className="p-4 text-gray-600">431,89 € (~35,99 €/Monat)</td>
                  <td className="p-4 text-gray-600">647,89 € (~53,99 €/Monat)</td>
                  <td className="p-4 text-gray-600">360–480 € (bei 12 Besuchen, 30–40 € pro Besuch)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Anzahl der Basisleistungen pro Jahr</td>
                  <td className="p-4 text-gray-600">12 (1 pro Monat)</td>
                  <td className="p-4 text-gray-600">24 (2 pro Monat)</td>
                  <td className="p-4 text-gray-600">36 (3 pro Monat)</td>
                  <td className="p-4 text-gray-600">12 (bei 1 Besuch pro Monat)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Kosten pro Basisleistung</td>
                  <td className="p-4 text-gray-600">~17,99 €</td>
                  <td className="p-4 text-gray-600">~17,99 €</td>
                  <td className="p-4 text-gray-600">~17,99 €</td>
                  <td className="p-4 text-gray-600">30–40 €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Buchungszeiten</td>
                  <td className="p-4 text-gray-600">Nebenzeiten (werktags 9:00–14:00)</td>
                  <td className="p-4 text-gray-600">Bevorzugte Zeiten (werktags 9:00–20:00, Samstag 9:00–14:00)</td>
                  <td className="p-4 text-gray-600">Priorität (alle Zeiten, Top-Salons)</td>
                  <td className="p-4 text-gray-600">Abhängig von Verfügbarkeit</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Rabatt auf Zusatzleistungen</td>
                  <td className="p-4 text-gray-600">5%</td>
                  <td className="p-4 text-gray-600">10%</td>
                  <td className="p-4 text-gray-600">20%</td>
                  <td className="p-4 text-gray-600">Keine</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Treueprogramm</td>
                  <td className="p-4 text-gray-600">Ja (z. B. 10 € Zusatzleistung nach 6 Monaten, Gutscheine)</td>
                  <td className="p-4 text-gray-600">Ja (z. B. Gratis-Produkt nach 12 Monaten, Gutscheine)</td>
                  <td className="p-4 text-gray-600">Ja (z. B. Premium-Produkt nach 12 Monaten, Gutscheine)</td>
                  <td className="p-4 text-gray-600">Selten oder keine</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Flexibilität bei Up-/Downgrade</td>
                  <td className="p-4 text-gray-600">Ja, einmal pro Monat</td>
                  <td className="p-4 text-gray-600">Ja, einmal pro Monat</td>
                  <td className="p-4 text-gray-600">Ja, einmal pro Monat</td>
                  <td className="p-4 text-gray-600">Nicht anwendbar</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Zusätzliche Vorteile</td>
                  <td className="p-4 text-gray-600">Green-Option, einfache Buchung, Treuepunkte</td>
                  <td className="p-4 text-gray-600">Green-Option, bessere Zeiten, mehr Leistungen</td>
                  <td className="p-4 text-gray-600">Green-Option, Priorität, höchste Rabatte</td>
                  <td className="p-4 text-gray-600">Keine</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VIP Service */}
      <section id="vip" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-900">
                VIP Service in Düsseldorf
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Exklusive mobile Beauty-Dienstleistungen mit einer 40% Provisionsstruktur – ohne Zahlungsgebühren.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  On-Demand Haar- und Kosmetikdienstleistungen
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Express-Styling für Events
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Private Wellness-Behandlungen
                </li>
              </ul>
              <Link href="/vip" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-green-600 transition text-lg font-medium">
                VIP Service buchen
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=800&h=400&fit=crop"
                alt="VIP Service"
                width={800}
                height={400}
                className="rounded-2xl shadow-md w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NFC Cards */}
      <section id="nfc" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Smart NFC Cards
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Check-in mühelos in Düsseldorfs Top-Salons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop"
                alt="Standard (PVC) Card"
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Standard (PVC)</h3>
                <p className="text-2xl font-bold text-primary mb-4">€14.99</p>
                <p className="text-gray-600 mb-6">Langlebig für nahtlose Check-ins.</p>
                <button className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-600 transition text-lg font-medium">
                  Standard bestellen
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=200&fit=crop"
                alt="Premium (Bambus) Card"
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Premium (Bambus)</h3>
                <p className="text-2xl font-bold text-primary mb-4">€29.99</p>
                <p className="text-gray-600 mb-6">Umweltfreundlich und stilvoll.</p>
                <button className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-600 transition text-lg font-medium">
                  Premium bestellen
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <Image
                src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=300&h=200&fit=crop"
                alt="Pro (Metal) Card"
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Pro (Metal)</h3>
                <p className="text-2xl font-bold text-primary mb-4">€39.99</p>
                <p className="text-gray-600 mb-6">Luxuriös für Düsseldorfs Elite.</p>
                <button className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-600 transition text-lg font-medium">
                  Pro bestellen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Shop Düsseldorfs Beauty Essentials
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Premium-Produkte von deutschen Marken. Kaufe 3, erhalte das günstigste gratis!
          </p>
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* Salons */}
      <section id="salons" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Düsseldorfs Premier Salons
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Buchen Sie bei erstklassigen Salons in Düsseldorf.
          </p>

          {/* Featured Salons */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Ausgewählte Düsseldorfer Salons</h3>
            <BookingSystem salons={salons} />
          </div>

          {/* Salon List */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Finde deinen Salon in Düsseldorf</h3>
            <SearchFilter
              items={salons}
              placeholder="Suche nach Name, Dienstleistung oder Bereich..."
              onFilter={setFilteredSalons}
              type="salon"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {filteredSalons.map((salon, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md flex items-center hover:shadow-xl transition">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop"
                    alt={salon.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{salon.name}</h4>
                    <p className="text-sm text-primary">Premium Badge</p>
                    <p className="text-gray-600">{salon.name.includes('Altstadt') ? 'Altstadt' : salon.name.includes('Oberkassel') ? 'Oberkassel' : 'Flingern'}, Düsseldorf</p>
                    <p className="text-gray-600">Dienstleistungen: {salon.services.join(', ')}</p>
                    <button
                      onClick={() => {
                        const bookingContainer = document.getElementById('booking-container');
                        if (bookingContainer) {
                          bookingContainer.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="mt-2 text-primary hover:underline"
                    >
                      Termin buchen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Salon-Standorte in Düsseldorf</h3>
            <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden">
              <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={12}
                  center={defaultCenter}
                >
                  <Marker position={defaultCenter} />
                </GoogleMap>
              </LoadScript>
              <p className="text-gray-600 p-6">
                Finde unsere Partnersalons in ganz Düsseldorf, von der Altstadt bis Flingern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Häufig gestellte Fragen
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Fragen? Wir sind hier, um Ihnen zu helfen!
          </p>
          <form className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ihre E-Mail-Adresse"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ihre Nachricht"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-600 transition text-lg font-medium"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
