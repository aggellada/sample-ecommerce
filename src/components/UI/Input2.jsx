export default function Input2({ label }) {
  return (
    <>
      <div className="input_two">
        <label htmlFor={label}>{label}</label>
        <div className="input_two_bar">
          <input type="text" id={label} name={label} required />
        </div>
      </div>
    </>
  );
}
