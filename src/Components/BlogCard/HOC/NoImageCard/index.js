import style from "./style.module.css";

const NoImageCard = (props) => {
  return <props.comp data={props.data} style={style} content50={true} />;
};

export default NoImageCard;
