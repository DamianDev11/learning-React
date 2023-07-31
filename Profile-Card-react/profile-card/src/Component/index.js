import "./style.css";

const Wonder = (props) => {
  const { timing } = props;
  return <h1 className="welcome">This is a beautiful {timing}</h1>;
};

export default Wonder;
