import style from "./style.module.css";

const NoImageCard = (props) => {
  return <props.comp data={props.data} style={style} />;
};

export default NoImageCard;
