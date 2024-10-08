export default function ContactInput({ placeholder, type, name }) {
  return (
    <div>
      <input
        className="contact_input"
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </div>
  );
}
