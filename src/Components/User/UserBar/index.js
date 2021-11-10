import style from "./style.module.css";

const UserBar = (props) => {
  const { author, post } = props;

  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={require("../../../Assets/image.jpg").default} alt="Author" />
      </div>
      <div className={style.details}>
        <h4>{author.name}</h4>
        <p>
          {post.creationTime} . {post.readTime} read
        </p>
      </div>

      <div className={style.social}>Social Icons</div>
    </div>
  );
};

export default UserBar;
