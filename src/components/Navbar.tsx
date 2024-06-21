import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Tasker</h1>
      <nav>
        <ul>
          <Link to="/"><li>Task gestor</li></Link>
          <Link to="/guides"><li>Guide</li></Link>
          <Link to="/about"><li>About it</li></Link>
        </ul>
      </nav>
    </div>
  )
}
