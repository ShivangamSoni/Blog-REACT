import style from "./style.module.css";

const NoImageCard = (props) => {
  return <props.comp data={props.data} style={style} displayImage={false} />;
};

export default NoImageCard;
