import style from "./style.module.css";

const UpvoteShare = () => {
  return (
    <div className={style.container}>
      <button className={`${style.btn} ${style.up}`} type="button">
        UpVotes
      </button>
      <button className={`${style.btn} ${style.share}`} type="button">
        Share This Article
      </button>
    </div>
  );
};

export default UpvoteShare;
