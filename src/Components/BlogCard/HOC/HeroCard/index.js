import style from "./style.module.css";

const HeroCard = (props) => {
  return <props.comp data={props.data} style={style} />;
};

export default HeroCard;
