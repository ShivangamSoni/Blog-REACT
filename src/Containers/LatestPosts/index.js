import style from "./style.module.css";
import ImageTopCard from "../../Components/BlogCard/HOC/ImageTopCard";
import BlogCard from "../../Components/BlogCard";
import { useState } from "react";

const LatestPosts = (props) => {
  const [numberOfPost, setNumberOfPost] = useState(3);
  const { title, posts, loading } = props;

  const loadMore = () => setNumberOfPost((prev) => prev + 3);

  return (
    <div className={style.latestPosts}>
      <h3>{title}</h3>
      <div className={style.container}>
        {posts.slice(0, numberOfPost).map((post) => (
          <ImageTopCard key={post.id} comp={BlogCard} data={post} />
        ))}
      </div>

      {loading ? (
        numberOfPost < posts.length ? (
          <button type="button" className={style.load} onClick={loadMore}>
            Load More
          </button>
        ) : null
      ) : null}
    </div>
  );
};

export default LatestPosts;
