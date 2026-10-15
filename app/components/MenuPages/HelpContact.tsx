import Image from "next/image";
import "./HelpContact.css";
import PlannersPicture from "../../images/PlannersPicture.jpg";

export default function HelpContact() {
  return (
    <main className="help-contact">
      <section className="help-contact__content">
        <span className="help-contact__eyebrow">
          YASAMAN &amp; MEDHY
        </span>

        <h1>Help &amp; Contact</h1>

        <div className="help-contact__divider" aria-hidden="true">
          <span />
          <span className="help-contact__ornament">✳</span>
          <span />
        </div>

        <p className="help-contact__intro">
          If you have any questions regarding our wedding,
          wish to plan a speech or surprise, please don’t
          hesitate to contact our wedding planner.
        </p>

        <div className="help-contact__details">
          <span className="help-contact__label">
            YOUR POINT OF CONTACT
          </span>

          <h2>Laure Annerel</h2>
          <p className="help-contact__role">
            Our Wedding Planner
          </p>
          <p className="help-contact__languages">
            French and English speaking
          </p>

          <a
            className="help-contact__link"
            href="mailto:laureannerel@alliance-revee.com"
          >
            laureannerel@alliance-revee.com
          </a>

          <a
            className="help-contact__link"
            href="tel:+33602532936"
          >
            +33 (0)6 02 53 29 36
          </a>
        </div>

        <p className="help-contact__footer">
          We look forward to celebrating with you.
        </p>
      </section>

      <div className="help-contact__image-wrap">
        <Image
            className="help-contact__image"
            src={PlannersPicture}
            alt="Yasaman and Medhy"
            width={700}
            height={773}
            sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>
    </main>
  );
}
