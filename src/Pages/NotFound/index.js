import style from "./style.module.css";

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div>
        <h2 data="404">404</h2>
        <p data="PAGE NOT FOUND">Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
