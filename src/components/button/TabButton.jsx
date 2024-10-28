import "./button.css";

export default function TabButton({ children, color = "#4dad5b", ...props }) {
  return (
    <button className="tab-button" {...props}>
      {children}
    </button>
  );
}
