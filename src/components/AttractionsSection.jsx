import { attractions } from '../data/siteData.js';
import SectionHeading from './SectionHeading.jsx';

export default function AttractionsSection() {
  return (
    <section className="section section--muted" id="attractions">
      <div className="container attractions">
        <SectionHeading title="ATRAKCJE" subtitle="W POBLIŻU ZNAJDUJĄ SIĘ..." />
        <ul className="attractions__grid">
          {attractions.map((attraction) => (
            <li key={attraction.name} className="attraction">
              <img src={attraction.icon} alt="" />
              <span>{attraction.name}</span>
            </li>
          ))}
        </ul>
        <p className="attractions__note">I WIELE INNYCH MIEJSC WARTYCH ODKRYCIA</p>
      </div>
    </section>
  );
}
