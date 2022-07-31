import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="list--inline">
        <li className="list--item">
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        </li>
        <li className="list--item">
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </li>
        <li className="list--item">
          <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
        </li>
        <li className="list--item">
          <FontAwesomeIcon icon="fa-solid fa-at" />
        </li>
      </ul>
    </div>
  );
}
