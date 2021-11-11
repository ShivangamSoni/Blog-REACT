import style from "./style.module.css";

const FeatureCard = (props) => {
  return <props.comp data={props.data} style={style} displayContent={false} />;
};

export default FeatureCard;
