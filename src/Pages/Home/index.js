import style from "./style.module.css";
import FeaturePosts from "../../Containers/FeaturePosts";
import LatestPosts from "../../Containers/LatestPosts";
import LatestArticles from "../../Containers/LatestArticles";
import SideBar from "../../Containers/SideBar";
import LatestStories from "../../Containers/LatestStories";

const Home = () => {
  return (
    <div className={style.main}>
      <FeaturePosts />

      <LatestPosts title="The Latest" />

      <div className={style.content}>
        <LatestArticles title="Latest Articles" />
        <SideBar />
      </div>

      <LatestStories />
    </div>
  );
};

export default Home;
