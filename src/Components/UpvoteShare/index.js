import style from "./style.module.css";
import abbreviateNumber from "../../Utilities/abbreviateNumber";

const UpvoteShare = (props) => {
  const { post } = props;

  const shareLink = () => navigator.clipboard.writeText(window.location.href);

  return (
    <div className={style.container}>
      <button className={`${style.btn} ${style.up}`} type="button">
        {abbreviateNumber(post.upVotes)}
      </button>
      <button className={`${style.btn} ${style.share}`} type="button" onClick={shareLink}>
        Share This Article
      </button>
    </div>
  );
};

export default UpvoteShare;
