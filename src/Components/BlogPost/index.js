import style from "./style.module.css";
import UserBar from "../User/UserBar/index";

const BlogPost = (props) => {
  const { post, author } = props;
  return (
    <div className={style.container}>
      <h1 className={style.title}>{post.title}</h1>
      <UserBar author={author} post={post} social={true} />

      <div className={style.heroImage}>
        <img src={require("../../Assets/image.jpg").default} alt={post.title} />
      </div>

      <p className={style.content}>{post.content}</p>

      <UserBar author={author} post={post} social={false} />
    </div>
  );
};

export default BlogPost;
