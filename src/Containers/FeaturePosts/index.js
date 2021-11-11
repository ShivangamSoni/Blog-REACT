import style from "./style.module.css";
import FeatureCard from "../../Components/BlogCard/HOC/FeatureCard";
import BlogCard from "../../Components/BlogCard";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

const FeaturePosts = (props) => {
  const { posts, mediaMatches } = useContext(DataContext);
  const numOfPosts = mediaMatches ? 1 : 3;

  return (
    <div className={style.container}>
      {posts.slice(0, numOfPosts).map((post) => (
        <FeatureCard key={post.id} comp={BlogCard} data={post} />
      ))}
    </div>
  );
};

export default FeaturePosts;
