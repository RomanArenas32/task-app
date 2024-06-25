import { useNavigate } from "react-router-dom";
import { BurguerMenu, Links } from "./components";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <h1 onClick={() => navigate("../")}>Tasker</h1>
      <div className="navbar-container_links">
        <Links />
      </div>
      <div className="navbar-container_burguer">
        <BurguerMenu />
      </div>
    </nav>
  );
};
