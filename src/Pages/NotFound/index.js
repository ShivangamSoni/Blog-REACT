import "./style.css";
import errorImage from "../../Assets/404-Error.svg";

const NotFound = () => {
  return (
    <div className="notFound">
      <img alt="404 Page Not Found" src={errorImage} />
    </div>
  );
};

export default NotFound;
