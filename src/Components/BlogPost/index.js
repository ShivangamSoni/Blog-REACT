import style from "./style.module.css";
import UserBar from "../User/UserBar/index";

const BlogPost = () => {
  return (
    <div className={style.container}>
      <h2>Post Title</h2>
      <UserBar />

      <div>Hero image</div>

      <p>Post Content</p>
    </div>
  );
};

export default BlogPost;
