import Image from "next/image";
import heroImage from "./images/home/our-story.jpg";
import "./Home.css";

export default function HomePage() {
  return (
    <main className="home">
      <section className="home__hero">
        <Image
          src={heroImage}
          alt="Yasaman and Medhy"
          fill
          priority
          sizes="(max-width: 882px) 100vw, 850px"
          className="home__hero-image"
        />
      </section>
    </main>
  );
}