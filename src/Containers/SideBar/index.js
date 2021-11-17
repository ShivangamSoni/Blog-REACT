import Advertisement from "../../Components/Advertisement";
import TopPosts from "../TopPosts";
import style from "./style.module.css";

const SideBar = (props) => {
  const { order = 1 } = props;

  const topPosts = <TopPosts />;
  const advt = <Advertisement />;

  return (
    <div className={style.sidebar}>
      {order === 1 ? (
        <>
          {topPosts} {advt}
        </>
      ) : (
        <>
          {advt} {topPosts}
        </>
      )}
    </div>
  );
};

export default SideBar;
