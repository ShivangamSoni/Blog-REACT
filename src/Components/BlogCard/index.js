import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const style = require("./style.module.css");
  const propStyle = props.style;

  const { data, displayImage = true, displayContent = true } = props;

  const content = data.content[2].content;

  return (
    <div className={propStyle?.blogCard || style.blogCard}>
      {displayImage ? (
        <div className={propStyle?.blogImage || style.blogImage}>
          <img src={require("../../Assets/image.jpg").default} alt={data.title} />
        </div>
      ) : null}

      <div className={propStyle?.blogContent || style.blogContent}>
        <h2>
          <Link to={data.slug} className={propStyle?.title || style.title}>
            {data.title}
          </Link>
        </h2>

        {displayContent ? <p className={propStyle?.content || style.content}>{content.split(" ").slice(0, 49).join(" ") + "..."}</p> : null}

        <p className={propStyle?.catDate || style.catDate}>
          <span className={propStyle?.category || style.category}>{data.category}</span> /{" "}
          <span className={propStyle?.creationDate || style.creationDate}>{data.creationTime}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
