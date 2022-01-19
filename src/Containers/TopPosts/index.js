import SideBarCard from "../../Components/BlogCard/HOC/SideBarCard";
import BlogCard from "../../Components/BlogCard";
import style from "./style.module.css";
import ImageTopCard from "../../Components/BlogCard/HOC/ImageTopCard";

// Redux
import { useSelector } from "react-redux";

const TopPosts = () => {
  const posts = useSelector((state) => state.blogs.blogs);

  return (
    <div className={style.topPosts}>
      <h3>Top Posts</h3>

      <div className={style.content}>
        {posts.slice(0, 4).map((post, index) => {
          if (index === 0) {
            return <ImageTopCard key={post.id} comp={BlogCard} data={post} displayContent={false} index={index + 1} />;
          }
          return <SideBarCard key={post.id} comp={BlogCard} data={post} index={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default TopPosts;
