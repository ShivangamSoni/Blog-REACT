import style from "./style.module.css";
import abbreviateNumber from "../../../Utilities/abbreviateNumber";

const UserProfile = (props) => {
  const { user, posts } = props;

  const numPosts = posts.length;
  const numUpVotes = posts.reduce((res, post) => {
    return res + post.upVotes;
  }, 0);

  return (
    <div className={style.container}>
      <div className={style.profileHead}>
        <img className={style.profileImage} src={user.image} alt={user.name} />
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

        <div className={style.stats}>
          <div className={style.statNumber}>{abbreviateNumber(numUpVotes)}</div>
          <div className={style.statType}>UP Votes</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
