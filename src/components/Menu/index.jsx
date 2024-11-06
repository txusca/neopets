import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          Teste
        </Link>
        <Button>Teste</Button>
      </nav>
    </header>
  )
}

export default Menu;