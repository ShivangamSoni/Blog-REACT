import style from "./style.module.css";
import NoImageCard from "../../Components/BlogCard/HOC/NoImageCard";
import BlogCard from "../../Components/BlogCard";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

const LatestStories = () => {
  const { posts } = useContext(DataContext);

  return (
    <div className={style.latestStories}>
      <h3>Latest Stories</h3>
      <div className={style.container}>
        {posts.slice(0, 3).map((post) => (
          <NoImageCard key={post.id} comp={BlogCard} data={post} />
        ))}
      </div>
      <button type="button" className={style.load}>
        Load More
      </button>
    </div>
  );
};

export default LatestStories;
