import { useContext } from "react";
import { useParams } from "react-router";
import LatestArticles from "../../Containers/LatestArticles";
import SideBar from "../../Containers/SideBar";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const Category = () => {
  const { category } = useParams();

  const { posts } = useContext(DataContext);

  const categoryPosts = posts.filter((post) => post.category.toLowerCase() === category);
  console.log(categoryPosts);

  return (
    <div className={style.container}>
      {categoryPosts.length ? <LatestArticles title={category.toUpperCase()} posts={categoryPosts} /> : <h3>No Posts for Category: {category.toUpperCase()}</h3>}
      <SideBar />
    </div>
  );
};

export default Category;
