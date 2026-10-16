import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import heroImage from "./images/home/our-story.jpg";
import "./Home.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export default function HomePage() {
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__invitation">
          <p className="home__eyebrow">TOGETHER WITH THEIR FAMILIES</p>

          <h1>
            Yasaman <span>&</span> Medhy
          </h1>

          <div className="home__divider" />

          <h2 className={greatVibes.variable}>
            A celebration of Love
          </h2>
          
      

          <p className="home__welcome">
            You are part of our story, and we would be honoured to have you with us to celebrate a weekend of love, laughter and sunshine above the Mediterranean
          </p>

          <p className="home__date">21 — 22 AUGUST 2027</p>

          <p className="home__location">
            DOMAINE DU MONT LEUZE
            <br />
            FRENCH RIVIERA, FRANCE
          </p>

          <a className="weekend-rsvp__button" href="/rsvp">
            Confirm your presence
          </a>
        </div>

        <div className="home__photo">
          <Image
            src={heroImage}
            alt="Yasaman and Medhy"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 850px"
            className="home__hero-image"
          />
        </div>
      </section>
    </main>
  );
}