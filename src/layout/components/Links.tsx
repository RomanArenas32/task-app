import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <ul className="link_ul">
      <Link to="/">
        <li>Task gestor</li>
      </Link>
      <Link to="/guides">
        <li>Guide</li>
      </Link>
      <Link to="/about">
        <li>About it</li>
      </Link>
    </ul>
  );
};
