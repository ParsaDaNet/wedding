import Image from "next/image";
import Navbar from "../NavBar";
import venueImage from "../../images/VenueBirdseye.jpg";
import airportImage from "../../images/niceAirport.jpg";
import trainImage from "../../images/trainstaions.jpg";

import "./GettingThere.css";

const journeys = [
  {
    number: "01",
    title: "By Air",
    subtitle: "Arriving on the French Riviera",
    description:
      "Nice Côte d’Azur Airport is the closest airport to our venue. From there, you can hire a car or arrange a private transfer.",
    image: airportImage,
    link: "https://www.nice.aeroport.fr/en",
    linkText: "Visit airport website",
  },
  {
    number: "02",
    title: "By Train",
    subtitle: "Travel through France",
    description:
      "Nice-Ville station connects Nice with Paris and other major French cities. From the station, continue to the venue by car or taxi.",
    image: trainImage,
    link: "https://www.sncf-connect.com/en-en/",
    linkText: "Plan your train journey",
  },
  {
    number: "03",
    title: "Car Hire",
    subtitle: "Explore at your own pace",
    description:
      "Hiring a car gives you the freedom to explore the beautiful towns and coastline of the French Riviera during your stay.",
    image: "/images/french-riviera-road.jpg",
    link: "https://www.nice.aeroport.fr/en/services/car-rental",
    linkText: "Explore car rental",
  },
  {
    number: "04",
    title: "Taxi & Transfers",
    subtitle: "Arrive comfortably",
    description:
      "We recommend arranging your journey to and from the venue in advance, particularly for the end of the wedding celebrations.",
    image: "/images/french-riviera-taxi.jpg",
    link: "https://www.taxis-nice.fr/en/home/",
    linkText: "Taxi Nice Riviera",
  },
];

const taxiDrivers = [
  { name: "Central Taxi Riviera Nice", phone: "+33 4 93 13 78 78" },
  { name: "Taxi Beaulieu-sur-Mer (David)", phone: "+33 6 65 46 10 64" },
  { name: "Taxi Mass", phone: "+33 6 58 92 43 23" },
  { name: "Taxi Jean-François", phone: "+33 6 61 42 85 09" },
  { name: "Taxi Nice", phone: "+33 6 10 82 11 71" },
  { name: "Taxi Nicolas", phone: "+33 6 09 87 69 35" },
  { name: "Taxi Nice 06", phone: "+33 6 51 68 36 87" },
  { name: "Taxi Nice Aéroport", phone: "+33 6 34 40 53 53" },
  { name: "Taxi Yann", phone: "+33 6 29 46 76 24" },
  { name: "Taxi Olivier", phone: "+33 6 24 02 67 51" },
  { name: "Taxi Nice French Riviera", phone: "+33 6 65 00 93 13" },
  { name: "Taxi Conventionné Nice", phone: "+33 6 44 66 65 50" },
  { name: "Taxis Nice", phone: "+33 4 82 82 59 10" },
];

export default function GettingThere() {
  return (
    <>
    <main className="getting-there">
        <section className="getting-there__hero">
          <Image
            src={venueImage}
            alt="Domaine du Mont Leuze overlooking the French Riviera"
            fill
            priority
            sizes="100vw"
            className="getting-there__hero-image"
          />

          <div className="getting-there__hero-overlay">
            <span className="getting-there__eyebrow">
              Yasaman &amp; Medhy
            </span>
            <h1>Getting There</h1>
            <span className="getting-there__hero-line" />
            <p>Our guide to the French Riviera</p>
          </div>
        </section>

        <section className="getting-there__intro">
          <span className="getting-there__eyebrow">
            We look forward to welcoming you
          </span>
          <h2>Getting to the Riviera</h2>
          <p>
            We are so happy you will be joining us for our wedding.
            Here are a few helpful details to make planning your journey
            to the French Riviera as easy as possible.
          </p>
          <p className="getting-there__date">
            21–22 August 2027 · Domaine du Mont Leuze
          </p>
        </section>

        <section className="getting-there__journeys">
          <header className="getting-there__section-heading">
            <span className="getting-there__eyebrow">
              Plan your journey
            </span>
            <h2>Making your way to us</h2>
          </header>

          <div className="getting-there__grid">
            {journeys.map((journey) => (
              <article className="getting-there__card" key={journey.number}>
                <div className="getting-there__card-image">
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span>{journey.number}</span>
                </div>

                <div className="getting-there__card-content">
                  <span className="getting-there__card-subtitle">
                    {journey.subtitle}
                  </span>
                  <h3>{journey.title}</h3>
                  <p>{journey.description}</p>
                  <a
                    href={journey.link}
                    target="_blank"
                    rel="noreferrer"
                    className="getting-there__text-link"
                  >
                    {journey.linkText} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="getting-there__notice">
          <div className="getting-there__notice-content">
            <span className="getting-there__eyebrow">
              A little local advice
            </span>
            <h2>Plan your return journey</h2>
            <p>
              Domaine du Mont Leuze is situated in the hills above the
              coast. Taxi availability may be limited at the end of the
              evening, so we recommend booking your return transport in
              advance.
            </p>
            <p>
              That way, you can relax, celebrate and enjoy every moment
              with us without worrying about getting home.
            </p>
            <a
              href="https://www.taxis-nice.fr/en/home/"
              target="_blank"
              rel="noreferrer"
              className="getting-there__button"
            >
              Explore taxi services ↗
            </a>
          </div>
        </section>

        <section className="getting-there__taxi-section">
            <header className="getting-there__section-heading">
                <span className="getting-there__eyebrow">Local contacts</span>
                <h2>Taxi Directory</h2>
                <p>
                A selection of local taxi contacts to help you plan ahead.
                Please confirm availability and fares directly with each provider.
                </p>
            </header>

            <div className="getting-there__taxi-list">
                {taxiDrivers.map((taxi) => (
                <div className="getting-there__taxi" key={taxi.phone}>
                    <span>{taxi.name}</span>
                    <a href={`tel:${taxi.phone.replace(/\s/g, "")}`}>
                    {taxi.phone}
                    </a>
                </div>
                ))}
            </div>

            <p className="getting-there__disclaimer">
                Contact details should be verified before publication.
            </p>
        </section>
              

        <footer className="getting-there__footer">
          <span className="getting-there__eyebrow">
            With love
          </span>
          <h2>Yasaman &amp; Medhy</h2>
          <p>21–22 August 2027</p>
          <p>Domaine du Mont Leuze · French Riviera</p>
        </footer>
      </main>
    </>
  );
}