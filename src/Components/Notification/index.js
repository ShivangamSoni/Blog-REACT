import style from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../../REDUX/Site/ActionCreator";

const Notification = () => {
  const { show, text } = useSelector((state) => state.site.notification);
  const dispatch = useDispatch();

  const close = () => dispatch(hideNotification());

  return (
    show && (
      <div className={style.container}>
        <i className={`fas fa-exclamation-circle ${style.infoIcon}`}></i>
        <span className={style.msg}>{text}</span>
        <span className={style.closeBtn} onClick={close}>
          <i className="fas fa-times"></i>
        </span>
      </div>
    )
  );
};

export default Notification;
