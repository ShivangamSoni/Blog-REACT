import { useContext } from "react";
import { useParams } from "react-router";
import BlogPost from "../../Components/BlogPost";
import UpvoteShare from "../../Components/UpvoteShare";
import LatestPosts from "../../Containers/LatestPosts";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const Post = () => {
  const { author, post } = useParams();

  const { posts, users } = useContext(DataContext);

  const blogPost = posts.find((postData) => postData.slug === `/post/${author}/${post}`);

  const blogAuthor = users.find((user) => user.id === blogPost.authorId);

  const latestByAuthor = posts.filter((post) => post.authorId === blogAuthor.id && post.id !== blogPost.id);

  return (
    <>
      <div className={style.container}>
        <div className={style.upShareContainer}>
          <UpvoteShare post={blogPost} />
        </div>
        <BlogPost post={blogPost} author={blogAuthor} />
      </div>

      <div className={style.foot}>{latestByAuthor.length === 0 || <LatestPosts title={`More From ${blogAuthor.name}`} posts={latestByAuthor} />}</div>
    </>
  );
};

export default Post;
