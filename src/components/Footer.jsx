import { contactLinks } from '../data/siteData.js';
import Brand from './Brand.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Brand dark />
        <SocialLinks />
        <ul className="footer__contacts">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="footer__meta">
          <p>Miód Malina © 2024</p>
          <p>Wykonane przez nkweb.pl</p>
        </div>
      </div>
    </footer>
  );
}
