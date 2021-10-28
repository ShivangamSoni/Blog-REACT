import PostCard from "../../Components/Post/PostCard";
import data from "../../data.json";

import "./style.css";

const Home = () => {
  const { posts } = data;

  return (
    <div>
      <h1>Home</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
