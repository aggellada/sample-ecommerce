export default function Input({ label, labelTwo }) {
  return (
    <div className="input">
      <div className="left_input">
        <label htmlFor={label}>{label}</label>
        <input type="text" id={label} name={label} required />
      </div>
      <div className="right_input">
        <label htmlFor={labelTwo}>{labelTwo}</label>
        <input type="text" id={labelTwo} name={labelTwo} required />
      </div>
    </div>
  );
}
