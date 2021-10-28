import UserBar from "../../User/UserBar/index";

const Post = (props) => {
  const { category, title, slug, authorId } = props.post;
  console.log(props);
  return (
    <div>
      <h2>Blog Post / Individual Post</h2>
      <p>Title: {title}</p>
      <p>Category: {category}</p>
      <p>Slug: {slug}</p>
      <UserBar userId={authorId} />
    </div>
  );
};

export default Post;
