import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const style = require("./style.module.css");
  const propStyle = props.style;

  const { data, displayImage = true, displayContent = true, i } = props;

  const content = data.content[2].content;
  const image = data.content[1];

  return (
    <div className={propStyle?.blogCard || style.blogCard} data-id={i}>
      {displayImage ? (
        <div className={propStyle?.blogImage || style.blogImage}>
          <img src={image.src} alt={image.content} />
        </div>
      ) : null}

      <div className={propStyle?.blogContent || style.blogContent}>
        <h2 title={data.title}>
          <Link to={data.slug} className={propStyle?.title || style.title}>
            {data.title.split(" ").length > 3 ? data.title.split(" ").slice(0, 3).join(" ") + "..." : data.title}
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
