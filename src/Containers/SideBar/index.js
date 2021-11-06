import Advertisement from "../../Components/Advertisement";
import TopPosts from "../TopPosts";
import style from "./style.module.css";

const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <TopPosts />
      <Advertisement />
    </div>
  );
};

export default SideBar;
