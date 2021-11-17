import style from "./style.module.css";

const ImageTopCard = (props) => {
  const { displayContent, index } = props;

  return <props.comp data={props.data} style={style} displayContent={displayContent} i={index} />;
};

export default ImageTopCard;
