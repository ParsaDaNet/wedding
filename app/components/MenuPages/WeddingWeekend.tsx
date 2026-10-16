import Image from "next/image";
import Navbar from "../NavBar";
import "./WeddingWeekend.css";
import venueImage from "../../images/VenueBirdseye.jpg";
import alter from "../../images/alter.jpg"
import brunch from "../../images/brunch.jpg"

const venue = {
  name: "Domaine du Mont Leuze",
  address: "600 Chem. du Mont Leuze, 06230 Villefranche-sur-Mer",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Domaine+du+Mont+Leuze",
};

const events = [
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "The main celebration",
    date: "Saturday, August 21st 2027",
    time: "From 4:30 p.m.",
    image: alter,
    imageAlt: "Wedding celebration",
    details: [
      "Please arrive by 4:30 p.m. for a ceremony beginning promptly at 5:00 p.m.",
      "The event will take place outdoors. We recommend bringing something warm for the evening.",
    ],
    dressCode: "Black tie",
  },
  {
    id: "brunch",
    title: "Brunch",
    subtitle: "The day after",
    date: "Sunday, August 22nd 2027",
    time: "11 a.m. – 3:30 p.m.",
    image: brunch,
    imageAlt: "Outdoor wedding brunch",
    details: ["Swimsuit and towel highly recommended."],
    // dressCode: "Summer outfit",
  },
];

export default function WeddingWeekend() {
  return (
    <>
      <main className="weekend-page" id="wedding-weekend">
        <section className="weekend-venue-hero">
          <Image
            src={venueImage}
            alt="Domaine du Mont Leuze wedding venue"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 100%",
            }}
          />

          <div className="weekend-venue-hero__overlay">
            <span>Yasaman &amp; Medhy</span>
            <h1>Our Wedding Weekend</h1>
          </div>
        </section>

        <div className="weekend-events">
          {events.map((event, index) => (
            <section
              key={event.id}
              id={event.id}
              className={`weekend-event ${
                index % 2 ? "weekend-event--reverse" : ""
              }`}
            >
              <div className="weekend-event__image">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  width={980}
                  height={650}
                  sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 55vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="weekend-event__content">
                <span className="weekend-eyebrow">{event.subtitle}</span>
                <h2>{event.title}</h2>

                <div className="weekend-event__date">
                  <p>{event.date}</p>
                  <p>{event.title}</p>
                  <p>{event.time}</p>
                </div>

                <div className="weekend-event__venue">
                  <h3>{venue.name}</h3>
                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {venue.address}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </div>

                <div className="weekend-event__details">
                  {event.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>

                {event.dressCode && ( 
                <p className="weekend-event__dresscode">
                  <span>Dress code</span>
                  {event.dressCode}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>

        <footer className="weekend-rsvp" id="rsvp">
          <span className="weekend-eyebrow">
            We can&apos;t wait to celebrate
          </span>
          <h2>Please confirm your presence</h2>
          <p>Kindly RSVP before January 22nd, 2027.</p>
          <a className="weekend-rsvp__button" href="/rsvp">
            Confirm your presence
          </a>
        </footer>
      </main>
    </>
  );
}