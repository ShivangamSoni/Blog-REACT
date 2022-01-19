import { useEffect } from "react";
import { useParams } from "react-router";
import UserProfile from "../../Components/User/UserProfile";
import LatestPosts from "../../Containers/LatestPosts";
import style from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUser, fetchUserById } from "../../REDUX/Blogs/ActionCreator";

const Profile = () => {
  const { authorId } = useParams();
  const { isAuthenticated, activeUser, latestByUser } = useSelector((state) => ({
    isAuthenticated: state.site.isAuthenticated,
    activeUser: state.blogs.active.user,
    latestByUser: state.blogs.active.latestByUser,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authorId && isAuthenticated) {
      dispatch(fetchLoggedInUser());
    } else {
      dispatch(fetchUserById(authorId));
    }
  }, [isAuthenticated, authorId, dispatch]);

  return (
    <div>
      {Object.keys(activeUser).length ? (
        <>
          <UserProfile />

          <div className={style.foot}>{latestByUser.length === 0 || <LatestPosts title={`${activeUser.name}'s Posts`} posts={latestByUser} loading={true} />}</div>
        </>
      ) : null}
    </div>
  );
};

export default Profile;
