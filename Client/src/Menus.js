import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>

      <Link className="list-group-item list-group-item-action"
       tag="a" 
       to="/home"
       >
        Home
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/mains"
      >
        MAINS
      </Link>
             
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/apetizer"
      >
        APETIZER
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/dessert"
      >
        DESSERT
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/clone"
      >
        CLONE
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/weired"
      >
        WEIRED
      </Link>


    </ListGroup>
  );
};

export default Menus;