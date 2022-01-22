import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard";
import style from "./style.module.css";

const LatestArticles = (props) => {
  const { title, posts } = props;
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    setVisible(6);
  }, [posts, title]);

  const loadMore = () => setVisible((prevState) => prevState + 2);

  return (
    <div className={style.latestArticles}>
      <h3>{title}</h3>

      <div className={style.container}>
        {posts
          .reverse()
          .slice(0, visible)
          .map((post) => (
            <BlogCard key={post.id} data={post} />
          ))}
      </div>

      {visible < posts.length ? (
        <button type="button" className={style.load} onClick={loadMore}>
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default LatestArticles;
