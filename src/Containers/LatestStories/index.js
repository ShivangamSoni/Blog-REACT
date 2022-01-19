import style from "./style.module.css";
import NoImageCard from "../../Components/BlogCard/HOC/NoImageCard";
import BlogCard from "../../Components/BlogCard";
import { useState } from "react";

// Redux
import { useSelector } from "react-redux";

const LatestStories = () => {
  const posts = useSelector((state) => state.blogs.blogs);
  const [visible, setVisible] = useState(3);

  const loadMore = () => setVisible((prevState) => prevState + 3);

  return (
    <div className={style.latestStories}>
      <h3>Latest Stories</h3>
      <div className={style.container}>
        {[...posts]
          .reverse()
          .slice(0, visible)
          .map((post) => (
            <NoImageCard key={post.id} comp={BlogCard} data={post} />
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

export default LatestStories;
