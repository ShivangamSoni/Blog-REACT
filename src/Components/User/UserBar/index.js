import style from "./style.module.css";

const UserBar = () => {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={require("../../../Assets/image.jpg").default} alt="Author" />
      </div>
      <div className={style.details}>
        <h4>Author Name</h4>
        <p>Post Date | Read Time</p>
      </div>

      <div className={style.social}>Social Icons</div>
    </div>
  );
};

export default UserBar;
