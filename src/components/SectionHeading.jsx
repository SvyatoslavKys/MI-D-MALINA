export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <span aria-hidden="true" />
    </div>
  );
}
