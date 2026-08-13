import { socialLinks } from '../data/siteData.js';

export default function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Media społecznościowe">
      {socialLinks.map((social) => (
        <li key={social.label}>
          {social.href ? (
            <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
              <img src={social.icon} alt="" />
            </a>
          ) : (
            <span className="social-links__placeholder" aria-label={social.label}>
              <img src={social.icon} alt="" />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
