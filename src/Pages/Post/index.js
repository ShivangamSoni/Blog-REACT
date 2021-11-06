import style from "./style.module.css";

const Post = (props) => {
  console.log(props);
  return <div className={style.container}>Post Page</div>;
};

export default Post;
