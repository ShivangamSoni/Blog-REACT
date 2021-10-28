import { useLocation } from "react-router-dom";
import data from "../../data.json";
import BlogPost from "../../Components/Post/BlogPost/index";

const Post = () => {
  const { posts } = data;
  const location = useLocation().pathname;
  const post = posts.filter((post) => post.slug === location)[0];

  return (
    <div>
      <BlogPost key={post.id} post={post} />
    </div>
  );
};

export default Post;
