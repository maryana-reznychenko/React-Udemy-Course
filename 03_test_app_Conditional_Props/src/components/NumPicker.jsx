//Pick upp a random number.
//If num = 7 show one message, otherwhise another message
let min = 1;
let max = 10;

// function getNum() {
//   return min + Math.floor(Math.random() * (max - min + 1));
// }

const NumPicker = () => {
  let randomNum = min + Math.floor(Math.random() * (max - min + 1));
  let msg;
  if (randomNum === 7) {
    msg = (
      <div>
        <h2>CONGRATULATION!</h2>
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
      </div>
    );
  } else {
    msg = <p>Oh, not so lucky number 😎</p>;
  }

  return (
    <div>
      <h1>Your number is: {randomNum}</h1>
      {msg}
    </div>
  );
};

export default NumPicker;
