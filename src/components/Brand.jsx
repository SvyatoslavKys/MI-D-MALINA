import { logo } from '../data/siteData.js';

export default function Brand({ dark = false }) {
  return (
    <a className={`brand${dark ? ' brand--dark' : ''}`} href="#home" aria-label="Miód Malina — strona główna">
      <img className="brand__mark" src={logo} alt="" />
      <span className="brand__name">MIÓD MALINA</span>
      <span className="brand__place">OSADA ISTEBNA</span>
    </a>
  );
}
