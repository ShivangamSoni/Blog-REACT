import style from "./style.module.css";

const SideBarCard = (props) => {
  return <props.comp data={props.data} style={style} displayContent={false} />;
};

export default SideBarCard;
