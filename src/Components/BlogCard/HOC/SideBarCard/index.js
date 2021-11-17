import style from "./style.module.css";

const SideBarCard = (props) => {
  const { index } = props;

  return <props.comp data={props.data} style={style} displayContent={false} i={index} />;
};

export default SideBarCard;
