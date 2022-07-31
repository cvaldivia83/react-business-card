import Photo from "./Photo";
import Title from "./Title";
import Info from './Info';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Content() {
  return (
    <div className="content">
      <Photo />
      <div className="icon-container">
        <span className="icon">
          <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
        </span>
      </div>
      <Title />
      <Info />
    </div>
  );
}
