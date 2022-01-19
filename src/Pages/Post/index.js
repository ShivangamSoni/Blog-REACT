import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BlogPost from "../../Components/BlogPost";
import UpvoteShare from "../../Components/UpvoteShare";
import LatestPosts from "../../Containers/LatestPosts";
import { fetchBlogById } from "../../REDUX/Blogs/ActionCreator";
import style from "./style.module.css";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blogPost, latestByAuthor, blogAuthor } = useSelector((state) => ({
    blogPost: state.blogs.active.blog,
    latestByAuthor: state.blogs.active.latestByUser,
    blogAuthor: state.blogs.active.user,
  }));

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [id, dispatch]);

  return (
    <>
      {Object.keys(blogPost).length ? (
        <>
          <div className={style.container}>
            <div className={style.upShareContainer}>
              <UpvoteShare />
            </div>
            <BlogPost />
          </div>

          <div className={style.foot}>{latestByAuthor.length === 0 || <LatestPosts title={`More From ${blogAuthor.name}`} posts={latestByAuthor} loading={true} />}</div>
        </>
      ) : null}
    </>
  );
};

export default Post;
