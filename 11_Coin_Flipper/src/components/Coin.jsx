import "./Coin.css";

const Coin = ({ data }) => {
  return (
    <div className="Coin">
      <img src={data.imgSrc} alt={data.side} />
    </div>
  );
};

export default Coin;
