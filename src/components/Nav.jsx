// http://localhost:5174/

import { Link } from "react-router-dom";

export function Nav() {


    return (
      <>
      <header className="menu">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>
          </ul>
        </nav>
      </header>

      </>
    )
  }