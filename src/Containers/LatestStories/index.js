import style from "./style.module.css";
import NoImageCard from "../../Components/BlogCard/HOC/NoImageCard";
import BlogCard from "../../Components/BlogCard";
import { useContext, useState } from "react";
import { DataContext } from "../../DataContext";

const LatestStories = () => {
  const { posts } = useContext(DataContext);
  const [visible, setVisible] = useState(3);

  const loadMore = () => setVisible((prevState) => prevState + 3);

  return (
    <div className={style.latestStories}>
      <h3>Latest Stories</h3>
      <div className={style.container}>
        {posts.slice(0, visible).map((post) => (
          <NoImageCard key={post.id} comp={BlogCard} data={post} />
        ))}
      </div>
      <button type="button" className={style.load} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default LatestStories;
