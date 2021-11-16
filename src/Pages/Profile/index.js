import { useContext } from "react";
import { Navigate, useParams } from "react-router";
import UserProfile from "../../Components/User/UserProfile";
import LatestPosts from "../../Containers/LatestPosts";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const Profile = () => {
  const { posts, users } = useContext(DataContext);

  const { authorName: paramsName } = useParams();
  const sessionName = sessionStorage.getItem("userName");

  const userName = paramsName || sessionName;

  const user = users.filter((u) => u.userName === userName)[0];
  const footerName = `${user.name}'s Posts`;

  let latestByUser = null;
  if (user) {
    latestByUser = posts.filter((post) => post.authorId === user.id);
  }

  return (
    <div>
      {user !== undefined ? (
        <>
          <UserProfile user={user} numPosts={latestByUser.length} />

          <div className={style.foot}>{latestByUser.length === 0 || <LatestPosts title={footerName} posts={latestByUser} loading={true} />}</div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default Profile;
