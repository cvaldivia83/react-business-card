import Photo from "./Photo";
import Title from "./Title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Content() {
  return (
    <div className="content">
      <Photo />
      <Title />
    </div>
  );
}
