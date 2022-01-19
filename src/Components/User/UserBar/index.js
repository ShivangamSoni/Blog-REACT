import { Link } from "react-router-dom";
import style from "./style.module.css";

const UserBar = (props) => {
  const { author, post, social } = props;

  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={require("../../../Assets/User.png").default} alt={author.name} />
      </div>

      <div className={style.details}>
        <span>
          {social ? "" : "Written By"}
          <h4>
            <Link to={`/profile/${author.id}`} title="View User Profile">
              {author.name}
            </Link>
          </h4>
        </span>
        <p>
          {post.creationTime} . {post.readTime} min. read
        </p>
      </div>

      {social ? (
        <div className={style.social}>
          <i className={`fab fa-facebook-square ${style.icon}`}></i>
          <i className={`fab fa-twitter-square ${style.icon}`}></i>
          <i className={`fab fa-instagram-square ${style.icon}`}></i>
          <i className={`fab fa-youtube-square ${style.icon}`}></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserBar;
