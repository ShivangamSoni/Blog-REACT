import style from "./style.module.css";

const UpvoteShare = (props) => {
  const { post } = props;

  const shareLink = () => navigator.clipboard.writeText(window.location.href);

  return (
    <div className={style.container}>
      <button className={`${style.btn} ${style.up}`} type="button">
        {post.upVotes}
      </button>
      <button className={`${style.btn} ${style.share}`} type="button" onClick={shareLink}>
        Share This Article
      </button>
    </div>
  );
};

export default UpvoteShare;
