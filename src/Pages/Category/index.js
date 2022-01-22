import { useParams } from "react-router";
import LatestArticles from "../../Containers/LatestArticles";
import SideBar from "../../Containers/SideBar";
import style from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBlogByCategory } from "../../REDUX/Blogs/ActionCreator";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogByCategory(category));
  }, [category, dispatch]);

  const {
    categoryPosts,
    site: { mediaMatches },
  } = useSelector((state) => ({ categoryPosts: state.blogs.categoryBlogs, site: state.site }));

  return (
    <div className={style.container}>
      {categoryPosts.length ? <LatestArticles title={category.toUpperCase()} posts={categoryPosts} /> : <h3>No Posts for Category: {category.toUpperCase()}</h3>}
      {mediaMatches ? null : <SideBar />}
    </div>
  );
};

export default Category;
