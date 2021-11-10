import style from "./style.module.css";
import FeatureCard from "../../Components/BlogCard/HOC/FeatureCard";
import BlogCard from "../../Components/BlogCard";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

const FeaturePosts = (props) => {
  const { posts } = useContext(DataContext);
  console.log("Featured:\n", posts);

  return (
    <div className={style.container}>
      {posts.slice(0, 3).map((post) => (
        <FeatureCard key={post.id} comp={BlogCard} data={post} />
      ))}
    </div>
  );
};

export default FeaturePosts;
