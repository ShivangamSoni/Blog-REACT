import BlogPost from "../../Components/BlogPost";
import UpvoteShare from "../../Components/UpvoteShare";
import LatestPosts from "../../Containers/LatestPosts";
import style from "./style.module.css";

const Post = (props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.upShareContainer}>
          <UpvoteShare />
        </div>
        <BlogPost />
      </div>
      <LatestPosts title="More From Author" />
    </>
  );
};

export default Post;
