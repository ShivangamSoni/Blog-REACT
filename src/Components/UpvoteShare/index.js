import style from "./style.module.css";
import abbreviateNumber from "../../Utilities/abbreviateNumber";
import { useState, useContext } from "react";
import { DataContext } from "../../DataContext";
import Notification from "../../Containers/Notification";

// React Share
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton, TwitterIcon, TwitterShareButton } from "react-share";

const UpvoteShare = (props) => {
  const { setPost, isAuthenticated, users, setUser } = useContext(DataContext);
  const [shareActive, setShareActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const url = window.location.href;

  const { post } = props;

  const handleUpVote = () => {
    if (!isAuthenticated) {
      setShowNotification(true);
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

  const toggleShareLink = () => {
    setShareActive((prev) => !prev);
  };

  return (
    <div className={style.container}>
      {showNotification && <Notification closeHandler={() => setShowNotification(false)} />}
      <button onClick={handleUpVote} className={`${style.btn} ${style.up}`} type="button">
        {abbreviateNumber(post.upVotes)} Claps
      </button>

      <div className={`${style.btn} ${style.share} ${shareActive ? style.shareActive : null}`} type="button" onClick={toggleShareLink}>
        <span className={style.tooltipText} aria-hidden={true}>
          <FacebookShareButton url={url} quote={post.title} hashtags={["#theSiren"]}>
            <FacebookIcon onClick={toggleShareLink} round={true} size={32} />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={post.title} hashtags={["#theSiren"]}>
            <TwitterIcon round={true} size={32} />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={post.title}>
            <WhatsappIcon round={true} size={32} />
          </WhatsappShareButton>
        </span>
        Share This Article
      </div>
    </div>
  );
};

export default UpvoteShare;
