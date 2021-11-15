import style from "./style.module.css";
import abbreviateNumber from "../../Utilities/abbreviateNumber";
import { useState, useContext } from "react";
import { DataContext } from "../../DataContext";

const UpvoteShare = (props) => {
  const { setPost } = useContext(DataContext);
  const [copied, setCopied] = useState(false);

  const { post } = props;

  const handleUpVote = () => {
    const id = post.id;
    const currentUpVotes = post.upVotes;

    setPost((prev) => {
      const newState = [...prev];
      const index = newState.findIndex((data) => data.id === id);
      newState[index].upVotes = currentUpVotes + 1;
      return newState;
    });
  };

  const shareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={style.container}>
      <button onClick={handleUpVote} className={`${style.btn} ${style.up}`} type="button">
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
