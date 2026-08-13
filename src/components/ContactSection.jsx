import { contactLinks } from '../data/siteData.js';
import SectionHeading from './SectionHeading.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function ContactSection() {
  return (
    <section className="section section--muted" id="contact">
      <div className="container contact">
        <SectionHeading title="KONTAKT" subtitle="POZOSTAŃMY W KONTAKCIE..." />
        <ul className="contact__links">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <img src={link.icon} alt="" />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </div>
    </section>
  );
}
