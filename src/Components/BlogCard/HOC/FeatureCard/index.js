import style from "./style.module.css";

const FeatureCard = (props) => {
  return <props.comp data={props.data} style={style} />;
};

export default FeatureCard;
