import SideBarCard from "../../Components/BlogCard/HOC/SideBarCard";
import BlogCard from "../../Components/BlogCard";
import style from "./style.module.css";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

const TopPosts = () => {
  const { posts } = useContext(DataContext);

  return (
    <div className={style.topPosts}>
      <h3>Top Posts</h3>

      <div className={style.content}>
        {posts.slice(0, 4).map((post) => (
          <SideBarCard key={post.id} comp={BlogCard} data={post} />
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
