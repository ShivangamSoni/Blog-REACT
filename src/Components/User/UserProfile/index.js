import style from "./style.module.css";
import abbreviateNumber from "../../../Utilities/abbreviateNumber";

const UserProfile = (props) => {
  const { user, numPosts } = props;

  return (
    <div className={style.container}>
      <div className={style.profileHead}>
        <img className={style.profileImage} src={require("../../../Assets/User.png").default} alt="" />
      </div>

      <div className={style.userDetails}>
        <p className={style.name}>
          {user.name} <span className={style.userName}>({user.userName})</span>
        </p>
        <p className={style.email}>{user.email}</p>
      </div>

      <div className={style.postDetails}>
        <div className={style.stats}>
          <div className={style.statNumber}>{abbreviateNumber(numPosts)}</div>
          <div className={style.statType}>Posts</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
