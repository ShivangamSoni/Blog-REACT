import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { category, title, slug } = props.post;
  return (
    <div style={{ background: "chartreuse" }}>
      <h2>Post Card</h2>
      <Link to={slug}>
        Image: <img alt="Demo Post Image" />
        <h2>Title: {title}</h2>
        <span>Category: {category}</span>
      </Link>
    </div>
  );
};

export default PostCard;
