import react from "react";

const ImageList = (props) => {
  console.log(props.images);

  props.images.map((image) => <img src=""></img>>{image}</div>);
  return <div>ImageList</div>;
};

export default ImageList;