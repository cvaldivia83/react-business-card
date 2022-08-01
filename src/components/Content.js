import Photo from "./Photo";
import Title from "./Title";
import Info from './Info';
import Button from './Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Content() {
  return (
    <div className="content">
      <Photo />
      <div className="icon-container" onClick={() => {document.body.classList.toggle("dark-theme");}}>
        <span className="icon">
          <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
        </span>
      </div>
      <Title />
      <Button />
      <Info />
    </div>
  );
}
