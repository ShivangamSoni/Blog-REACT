import style from "./style.module.css";

const SideBarCard = (props) => {
  return <props.comp data={props.data} style={style} />;
};

export default SideBarCard;
