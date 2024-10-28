import { NavLink } from "react-router-dom";

export default function HeaderLink({
  path,
  children,
  Icon,
  color = "#464646",
}) {
  return (
    <NavLink
      to={path}
      className="header-link"
      style={{ "--hover-color": color }}
    >
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      <span>
        <p>{children}</p>
      </span>
    </NavLink>
  );
}
