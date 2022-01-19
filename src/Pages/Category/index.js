import { useParams } from "react-router";
import LatestArticles from "../../Containers/LatestArticles";
import SideBar from "../../Containers/SideBar";
import style from "./style.module.css";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();

  const {
    posts,
    site: { mediaMatches },
  } = useSelector((state) => ({ posts: state.blogs.blogs, site: state.site }));

  const categoryPosts = posts.filter((post) => post.category.toLowerCase() === category);

  return (
    <div className={style.container}>
      {categoryPosts.length ? <LatestArticles title={category.toUpperCase()} posts={categoryPosts} /> : <h3>No Posts for Category: {category.toUpperCase()}</h3>}
      {mediaMatches ? null : <SideBar />}
    </div>
  );
};

export default Category;
