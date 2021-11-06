import { Link } from "react-router-dom";
// import style from "./style.module.css";

const BlogCard = (props) => {
  const style = props.style || require("./style.module.css");
  const { data } = props;

  return (
    <div className={style.blogCard}>
      <div className={style.blogImage}>
        <img src={require("../../Assets/image.jpg").default} alt={data.title} />
      </div>
      <div className={style.blogContent}>
        <h2>
          <Link to={data.slug} className={style.title}>
            {data.title}
          </Link>
        </h2>
        <p className={style.content}>{data.content.split(" ").slice(0, 49).join(" ") + "..."}</p>
        <p className={style.catDate}>
          <span className={style.category}>{data.category}</span> / <span className={style.creationDate}>{data.creationTime}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
