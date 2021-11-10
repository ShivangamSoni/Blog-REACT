import BlogCard from "../../Components/BlogCard";
import style from "./style.module.css";

const LatestArticles = (props) => {
  const { title, posts } = props;

  return (
    <div className={style.latestArticles}>
      <h3>{title}</h3>

      <div className={style.container}>
        {posts.map((post) => (
          <BlogCard key={post.id} data={post} />
        ))}
      </div>

      <button type="button" className={style.load}>
        Load More
      </button>
    </div>
  );
};

export default LatestArticles;
