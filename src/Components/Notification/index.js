import style from "./style.module.css";

const Notification = (props) => {
  const { closeHandler } = props;

  return (
    <div className={style.container}>
      <i className={`fas fa-exclamation-circle ${style.infoIcon}`}></i>
      <span className={style.msg}>Please Login to Clap for the Post</span>
      <span className={style.closeBtn} onClick={closeHandler}>
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};

export default Notification;
