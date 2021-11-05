import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { category, title, slug } = props.post;
  return (
    <div style={{ background: "chartreuse" }}>
      <h2>Post Card</h2>
      <Link to={slug}>
        Image: {/*<img />*/}
        <h2>Title: {title}</h2>
        <p>Content:</p>
        <span>Category: {category}</span>
      </Link>
    </div>
  );
};

export default PostCard;
