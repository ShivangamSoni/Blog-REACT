import style from "./style.module.css";
import FeaturePosts from "../../Containers/FeaturePosts";
import LatestPosts from "../../Containers/LatestPosts";
import LatestArticles from "../../Containers/LatestArticles";
import SideBar from "../../Containers/SideBar";
import LatestStories from "../../Containers/LatestStories";
import { useSelector } from "react-redux";

const Home = () => {
  const {
    posts,
    site: { mediaMatches },
  } = useSelector((state) => ({ posts: state.blogs.blogs, site: state.site }));

  return (
    <div className={style.main}>
      <FeaturePosts />

      <LatestPosts title="The Latest" posts={[...posts].reverse()} />

      <div className={style.content}>
        <LatestArticles title="Latest Articles" posts={[...posts].reverse()} />

        {mediaMatches ? null : <SideBar order={2} />}
      </div>

      <LatestStories />
    </div>
  );
};

export default Home;
