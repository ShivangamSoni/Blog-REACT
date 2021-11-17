import style from "./style.module.css";
import FeaturePosts from "../../Containers/FeaturePosts";
import LatestPosts from "../../Containers/LatestPosts";
import LatestArticles from "../../Containers/LatestArticles";
import SideBar from "../../Containers/SideBar";
import LatestStories from "../../Containers/LatestStories";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import HeroCard from "../../Components/BlogCard/HOC/HeroCard";
import BlogCard from "../../Components/BlogCard";

const Home = () => {
  const { posts, mediaMatches } = useContext(DataContext);

  return (
    <div className={style.main}>
      <FeaturePosts />

      <LatestPosts title="The Latest" posts={[...posts].reverse()} />

      <div className={style.content}>
        <LatestArticles title="Latest Articles" posts={[...posts].reverse()} />

        {mediaMatches ? null : <SideBar order={2} />}
        <HeroCard data={posts[0]} comp={BlogCard} />
      </div>

      <LatestStories />
    </div>
  );
};

export default Home;
