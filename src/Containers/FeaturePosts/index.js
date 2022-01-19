import style from "./style.module.css";
import FeatureCard from "../../Components/BlogCard/HOC/FeatureCard";
import BlogCard from "../../Components/BlogCard";

// Redux
import { useSelector } from "react-redux";

const FeaturePosts = (props) => {
  const {
    posts,
    site: { mediaMatches },
  } = useSelector((state) => ({ posts: state.blogs.blogs, site: state.site }));

  const numOfPosts = mediaMatches ? 1 : 3;

  return (
    <div className={style.container}>
      {posts
        .reverse()
        .slice(0, numOfPosts)
        .map((post) => (
          <FeatureCard key={post.id} comp={BlogCard} data={post} />
        ))}
    </div>
  );
};

export default FeaturePosts;
