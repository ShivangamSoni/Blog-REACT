import style from "./style.module.css";

const ImageTopCard = (props) => {
  return <props.comp data={props.data} style={style} />;
};

export default ImageTopCard;
