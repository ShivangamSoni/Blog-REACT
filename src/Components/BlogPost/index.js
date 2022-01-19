import style from "./style.module.css";
import UserBar from "../User/UserBar/index";
import Tags from "../Tags";
import { useSelector } from "react-redux";

const BlogPost = () => {
  const { post, author } = useSelector((state) => ({ post: state.blogs.active.blog, author: state.blogs.active.user }));

  const heroImage = post.content[1];

  const postFields = post.content.map((field, index) => {
    if (index === 0 || index === 1) return null;

    let element = null;

    switch (field.type) {
      case "sub-heading":
        element = (
          <h2 className={style.subHeading} key={field.id}>
            {field.content}
          </h2>
        );
        break;
      case "paragraph":
        element = (
          <p className={style.paragraph} key={field.id}>
            {field.content}
          </p>
        );
        break;
      case "image":
        element = (
          <div className={style.image} key={field.id}>
            <img src={field.src} alt={field.content} />
          </div>
        );
        break;
      case "break":
        element = <hr className={style.sectionBreak} key={field.id} />;
        break;
      default:
        element = null;
    }

    return element;
  });

  return (
    <div className={style.container}>
      <div className={style.postContent}>
        <h1 className={style.title}>{post.title}</h1>

        <UserBar author={author} post={post} social={true} />

        <div className={style.heroImage}>
          <img src={heroImage.src} alt={heroImage.content} />
        </div>

        {postFields}

        <Tags tags={post.tags} />
      </div>

      <UserBar author={author} post={post} social={false} />
    </div>
  );
};

export default BlogPost;
