import style from "./style.module.css";

const Tags = ({ tags }) => {
  return (
    <div className={style.container}>
      {tags.map((tag) => (
        <span key={tag.value} className={style.tag}>
          {tag.label}
        </span>
      ))}
    </div>
  );
};

export default Tags;
