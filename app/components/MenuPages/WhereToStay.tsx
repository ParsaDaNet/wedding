import Image from "next/image";
import Navbar from "../NavBar";
import heroImage from "../../images/where-to-stay/ville-franche-hero.jpg";
import carltonImage from "../../images/where-to-stay/hotel-carlton.jpg";
import delcloyImage from "../../images/where-to-stay/hotel-delcloy.jpg"
import provencalImage from "../../images/where-to-stay/hotel-le-provencal.jpg";
import saintPaulImage from "../../images/where-to-stay/hotel-le-saint-paul.jpg";
import petitPalaisImage from "../../images/where-to-stay/hotel-petit-palais.jpg";
import apollinaireImage from "../../images/where-to-stay/hotel-apollinaire.jpg";
import novotelImage from "../../images/where-to-stay/hotel-novotel-airport.jpg";
import radissonImage from "../../images/where-to-stay/hotel-radisson-airport.jpg";
import nemeaImage from "../../images/where-to-stay/hotel-nemea.jpg";
import okkoImage from "../../images/where-to-stay/hotel-okko-airport.jpg";
import "./WhereToStay.css";

const hotelImages = {
  carlton: carltonImage,
  delcloy: delcloyImage,
  provencal: provencalImage,
  saintPaul: saintPaulImage,
  petitPalais: petitPalaisImage,
  apollinaire: apollinaireImage,
  novotel: novotelImage,
  radisson: radissonImage,
  nemea: nemeaImage,
  okko: okkoImage,
};

type Hotel = {
  name: string;
  stars: number;
  priceScore: "£" | "££" | "£££";
  location: string;
  address: string;
  venueTime: string;
  airportTime: string;
  website: string;
  category: string;
  image: (typeof hotelImages)[keyof typeof hotelImages];
};

const nearbyHotels: Hotel[] = [
  {
    name: "Hôtel Carlton",
    stars: 4,
    priceScore: "££",
    location: "Beaulieu-sur-Mer",
    address: "7 Avenue Edith Cavell, 06310 Beaulieu-sur-Mer, France",
    venueTime: "Approx. 15–20 min",
    airportTime: "Approx. 25–35 min",
    website: "https://www.hotel-carlton.com/",
    category: "Nearby",
    image: hotelImages.carlton,
  },
  {
    name: "Hôtel Delcloy",
    stars: 3,
    priceScore: "££",
    location: "Saint-Jean-Cap-Ferrat",
    address: "3 Avenue Jean Monnet, 06230 Saint-Jean-Cap-Ferrat, France",
    venueTime: "Approx. 15–20 min",
    airportTime: "Approx. 30–40 min",
    website: "https://www.delcloy.com/",
    category: "Nearby",
    image: hotelImages.delcloy,
  },
  {
    name: "Hôtel Le Provençal",
    stars: 3,
    priceScore: "££",
    location: "Villefranche-sur-Mer",
    address: "4 Avenue du Maréchal Joffre, 06230 Villefranche-sur-Mer, France",
    venueTime: "Approx. 15–20 min",
    airportTime: "Approx. 25–35 min",
    website: "https://www.hotel-provensal.com/",
    category: "Nearby",
    image: hotelImages.provencal,
  },
  {
    name: "Hôtel Le Saint Paul",
    stars: 5,
    priceScore: "£££",
    location: "Nice",
    address: "29 Boulevard Franck Pilatte, 06300 Nice, France",
    venueTime: "Approx. 20–30 min",
    airportTime: "Approx. 20–30 min",
    website: "https://www.lesaintpaul.com/",
    category: "Nearby",
    image: hotelImages.saintPaul,
  },
  {
    name: "Hôtel Petit Palais",
    stars: 4,
    priceScore: "££",
    location: "Nice",
    address: "17 Avenue Emile Bieckert, 06000 Nice, France",
    venueTime: "Approx. 25–35 min",
    airportTime: "Approx. 20–30 min",
    website: "https://www.hotel-petit-palais.com/",
    category: "Nearby",
    image: hotelImages.petitPalais,
  },
  {
    name: "Hôtel Apollinaire",
    stars: 4,
    priceScore: "£££",
    location: "Nice",
    address: "25 Boulevard Dubouchage, 06000 Nice, France",
    venueTime: "Approx. 25–35 min",
    airportTime: "Approx. 20–30 min",
    website: "https://www.hotel-apollinaire.com/",
    category: "Nearby",
    image: hotelImages.apollinaire,
  },
];

const airportHotels: Hotel[] = [
  {
    name: "Novotel Suites Nice Airport",
    stars: 4,
    priceScore: "££",
    location: "Nice Airport",
    address: "125 Boulevard René Cassin, 06200 Nice, France",
    venueTime: "Approx. 30–40 min",
    airportTime: "Approx. 5–10 min",
    website: "https://all.accor.com/",
    category: "Near the airport",
    image: hotelImages.novotel,
  },
  {
    name: "Radisson Hotel Nice Airport",
    stars: 4,
    priceScore: "££",
    location: "Nice Airport",
    address: "24 Rue Costes et Bellonte, 06200 Nice, France",
    venueTime: "Approx. 30–40 min",
    airportTime: "Approx. 5–10 min",
    website: "https://www.radissonhotels.com/",
    category: "Near the airport",
    image: hotelImages.radisson,
  },
  {
    name: "Nemea Appart'Hotel",
    stars: 4,
    priceScore: "£",
    location: "Nice Airport",
    address: "Nice, France",
    venueTime: "Approx. 30–40 min",
    airportTime: "Approx. 5–15 min",
    website: "https://www.nemea-residence.com/",
    category: "Near the airport",
    image: hotelImages.nemea,
  },
  {
    name: "OKKO Hotels Nice Aéroport",
    stars: 4,
    priceScore: "££",
    location: "Nice Airport",
    address: "147 Boulevard René Cassin, 06200 Nice, France",
    venueTime: "Approx. 30–40 min",
    airportTime: "Approx. 5–10 min",
    website: "https://www.okkohotels.com/",
    category: "Near the airport",
    image: hotelImages.okko,
  },
];

const renderHotels = (hotels: Hotel[]) =>
  hotels.map((hotel) => (
    <article className="where-to-stay__card" key={hotel.name}>
      <div className="where-to-stay__card-image">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>

      <div className="where-to-stay__card-content">
        <p className="where-to-stay__category">{hotel.category}</p>
        <h3 className="where-to-stay__hotel-name">{hotel.name}</h3>
        <p className="where-to-stay__stars">
          {"★".repeat(hotel.stars)}
          {"☆".repeat(5 - hotel.stars)}
        </p>
        <p className="where-to-stay__price">
          {hotel.priceScore}
        </p>
        <p className="where-to-stay__location">{hotel.location}</p>
        <p className="where-to-stay__address">{hotel.address}</p>

        <div className="where-to-stay__travel-times">
          <p>
            <strong>To the venue:</strong> {hotel.venueTime}
          </p>
          <p>
            <strong>To Nice Airport:</strong> {hotel.airportTime}
          </p>
        </div>

        <div className="where-to-stay__links">
          <a href={hotel.website} target="_blank" rel="noreferrer">
            Hotel website ↗
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${hotel.name} ${hotel.address}`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            View map ↗
          </a>
        </div>
      </div>
    </article>
  ));

export default function WhereToStay() {
  return (
    <main className="where-to-stay">
      <section className="where-to-stay__hero">
        <Image
          src={heroImage}
          alt="Villefranche-sur-Mer on the French Riviera"
          fill
          priority
          sizes="100vw"
          className="where-to-stay__hero-image"
        />
        <div className="where-to-stay__hero-overlay" />
        <div className="where-to-stay__hero-content">
          <p className="where-to-stay__eyebrow">Your stay on the Riviera</p>
          <h1>Where to Stay</h1>
          <p>Some suggestions to help you plan your visit.</p>
        </div>
      </section>

      <section className="where-to-stay__intro">
        <p className="where-to-stay__eyebrow">August 21–22, 2027</p>
        <h2>Make a weekend of it</h2>
        <p>
          We look forward to celebrating with you at Domaine du Mont Leuze.
          Below are some accommodation options to help you make the most of
          your time on the French Riviera. We recommend checking travel times
          and booking early, as August is a popular time to visit.
        </p>
      </section>

      <section className="where-to-stay__section">
        <div className="where-to-stay__section-heading">
          <p className="where-to-stay__eyebrow">Stay nearby</p>
          <h2>Hotels around the Riviera</h2>
          <p>
            These options are in Nice and the surrounding coastal towns, with
            access to local restaurants, beaches and the wedding venue.
          </p>
        </div>
        <div className="where-to-stay__grid">{renderHotels(nearbyHotels)}</div>
      </section>

      <section className="where-to-stay__section where-to-stay__section--airport">
        <div className="where-to-stay__section-heading">
          <p className="where-to-stay__eyebrow">Convenient for travel</p>
          <h2>Hotels near Nice Airport</h2>
          <p>
            If you have an early flight or prefer to stay close to the airport,
            these options may be convenient.
          </p>
        </div>
        <div className="where-to-stay__grid">{renderHotels(airportHotels)}</div>
      </section>

      <section className="where-to-stay__footer">
        <h2>We can’t wait to celebrate with you</h2>
        <p>
          Please check directly with each hotel for availability, rates and
          transport options for your stay.
        </p>
      </section>
    </main>
  );
}