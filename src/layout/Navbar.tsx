import { Link, useNavigate } from "react-router-dom";
import { Time } from "./components";


export const Navbar: React.FC = () => {

  const navigate = useNavigate();
 

  return (
    <div className="navbar-container" >
      <div className="navbar-container_time">
        <h1 onClick={()=> navigate('../')}>Tasker</h1>
        <Time/>
      </div>
      <nav>
        <ul>
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
      </nav>
    </div>
  );
};

