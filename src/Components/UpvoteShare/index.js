import style from "./style.module.css";
import abbreviateNumber from "../../Utilities/abbreviateNumber";
import { useState } from "react";

// React Share
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginToVote, logout, sessionExpired } from "../../REDUX/Site/ActionCreator";
import { fetchBlogById } from "../../REDUX/Blogs/ActionCreator";
import BASE_URL from "../../Utilities/API";

const UpvoteShare = () => {
  const { isAuthenticated } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  const [shareActive, setShareActive] = useState(false);
  const url = window.location.href;

  const post = useSelector((state) => state.blogs.active.blog);

  const handleUpVote = async () => {
    if (!isAuthenticated) {
      dispatch(loginToVote());
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const {
        data: { count },
      } = await axios.put(
        `${BASE_URL}/api/v1/user/vote`,
        { blogId: post.id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const {
        data: { success },
      } = await axios.put(
        `${BASE_URL}/api/v1/blogs/vote/${post.id}`,
        { count },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (success) {
        dispatch(fetchBlogById(post.id));
      }
    } catch (e) {
      console.log(e.response.data);
      if (e.response.data.message === "Token Expired") {
        localStorage.removeItem("token");
        dispatch(logout());
        dispatch(sessionExpired());
      } else {
        console.log(e);
      }
    }
  };

  const toggleShareLink = () => {
    setShareActive((prev) => !prev);
  };

  return (
    <div className={style.container}>
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
