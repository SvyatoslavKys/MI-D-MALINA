import { cottageAmenities, sharedAmenities } from '../data/siteData.js';
import SectionHeading from './SectionHeading.jsx';

function AmenitiesGrid({ items }) {
  return (
    <ul className="amenities-grid">
      {items.map((item) => (
        <li className="amenity-card" key={item.name}>
          <img src={item.image} alt="" loading="lazy" />
          <span aria-hidden="true" className="amenity-card__shade" />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default function AmenitiesSection() {
  return (
    <section className="section" id="amenities">
      <div className="container amenities">
        <SectionHeading title="UDOGODNIENIA" subtitle="CZEKAJĄ NA WAS..." />

        <h3>W NASZEJ OSADZIE CZEKAJĄ NA NASZYCH GOŚCI</h3>
        <AmenitiesGrid items={sharedAmenities} />

        <h3>W KAŻDYM DOMKU GOŚCIE MAJĄ DO DYSPOZYCJI</h3>
        <AmenitiesGrid items={cottageAmenities} />
      </div>
    </section>
  );
}
