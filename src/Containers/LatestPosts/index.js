import style from "./style.module.css";
import ImageTopCard from "../../Components/BlogCard/HOC/ImageTopCard";
import BlogCard from "../../Components/BlogCard";

const LatestPosts = (props) => {
  const { title, posts } = props;

  return (
    <div className={style.latestPosts}>
      <h3>{title}</h3>
      <div className={style.container}>
        {posts.slice(0, 3).map((post) => (
          <ImageTopCard key={post.id} comp={BlogCard} data={post} />
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
