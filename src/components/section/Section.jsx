import "./Section.css";

export default function Section({ children, title, color = "#424242" }) {
  return (
    <section className="section" style={{ "--main-color": color }}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
