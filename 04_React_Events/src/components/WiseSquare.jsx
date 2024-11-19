import "./WiseSquare.css";

const WiseSquare = () => {
  function dispenseWisdom() {
    let messages = [
      /*wise messages goes here: */
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the hesrt is no education at all.",
      "Not everything that is faced can be changed, but nothing nothing can be changed untill it is faced.",
    ];

    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }
  return (
    <div className="WiseSquare" onMouseEnter={dispenseWisdom}>
      😊
    </div>
  );
};

export default WiseSquare;
