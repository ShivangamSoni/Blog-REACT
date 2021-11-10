import style from "./style.module.css";
import UserBar from "../User/UserBar/index";

const BlogPost = (props) => {
  const { post, author } = props;
  return (
    <div className={style.container}>
      <h2>{post.title}</h2>
      <UserBar author={author} post={post} />

      <div>Hero image</div>

      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
