import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="list--inline">
        <li className="list--item">
          <a className="list--link" href="https://www.facebook.com/valdivia.carla">
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
          </a>
        </li>
        <li className="list--item">
          <a className="list--link" href="https://www.linkedin.com/in/carla-cabrera-valdivia/">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          </a>
        </li>
        <li className="list--item">
          <a className="list--link" href="https://twitter.com/Carla_Cabrera">
            <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
          </a>
        </li>
        <li className="list--item">
          <a className="list--link" href="mailto:valdivia.carla@gmail.com">
            <FontAwesomeIcon icon="fa-solid fa-at" />
          </a>
        </li>
      </ul>
    </div>
  );
}
