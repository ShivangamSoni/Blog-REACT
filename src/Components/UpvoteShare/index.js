import style from "./style.module.css";
import abbreviateNumber from "../../Utilities/abbreviateNumber";
import { useState, useContext } from "react";
import { DataContext } from "../../DataContext";

const UpvoteShare = (props) => {
  const { setPost, isAuthenticated, users, setUser } = useContext(DataContext);
  const [copied, setCopied] = useState(false);

  const { post } = props;

  const handleUpVote = () => {
    if (!isAuthenticated) {
      return;
    }

    const user = users.filter((u) => u.userName === sessionStorage.getItem("userName"))[0];
    const slug = post.slug;

    const id = post.id;
    let newVote = post.upVotes;

    if (user.reactions.includes(slug)) {
      newVote -= 1;

      setUser((prev) => {
        const newState = [...prev];
        const index = newState.findIndex((u) => u.userName === user.userName);
        const newReactions = newState[index].reactions.filter((r) => r !== slug);
        newState[index].reactions = newReactions;
        return newState;
      });
    } else {
      newVote += 1;

      setUser((prev) => {
        const newState = [...prev];
        const index = newState.findIndex((u) => u.userName === user.userName);
        newState[index].reactions.push(slug);
        return newState;
      });
    }

    setPost((prev) => {
      const newState = [...prev];
      const index = newState.findIndex((data) => data.id === id);
      newState[index].upVotes = newVote;
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
