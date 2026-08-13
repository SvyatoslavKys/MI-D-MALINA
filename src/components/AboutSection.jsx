import SectionHeading from './SectionHeading.jsx';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <SectionHeading title="O NAS" subtitle="TROCHĘ O NAS, DOMKACH I NASZEJ OSADZIE" />
        <p className="about__description">
          Osada Miód Malina powstała w 2023 roku. Do dyspozycji naszych gości mamy obecnie
          4 domy, których wynajem uruchomiliśmy pod koniec 2023 roku. Osada jest całkowicie
          nowa i czeka, aby ugościć i rozpieścić swoich gości.
        </p>
        <a className="button" href="#attractions">
          CZYTAJ DALEJ
        </a>
      </div>
    </section>
  );
}
