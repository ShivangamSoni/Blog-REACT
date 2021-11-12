import style from "./style.module.css";
import abbreviateNumber from "../../Utilities/abbreviateNumber";
import { useState } from "react";

const UpvoteShare = (props) => {
  const [copied, setCopied] = useState(false);

  const { post } = props;

  const shareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={style.container}>
      <button className={`${style.btn} ${style.up}`} type="button">
        {abbreviateNumber(post.upVotes)} Claps
      </button>

      <button className={`${style.btn} ${style.share} ${copied ? style.copied : "aa"}`} type="button" onClick={shareLink}>
        <span className={style.tooltipText} aria-hidden={true}>
          Link Copied!
        </span>
        Share This Article
      </button>
    </div>
  );
};

export default UpvoteShare;
