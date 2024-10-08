export default function ContactInfo({ header, description }) {
  return (
    <div className="contact_info">
      <h1>{header}</h1>
      <p>{description}</p>
    </div>
  );
}
