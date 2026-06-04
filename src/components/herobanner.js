import Button from "./Button";

function HeroBanner({ title, text }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
      <Button text="Primary" type="primary" />
      <Button text="Secondary" type="secondary" />
    </section>
  );
}

export default HeroBanner;