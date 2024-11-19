const AnnoyingForm = () => {
  function handleKeyUp(e) {
    console.log(e);
    if (e.key === "*") {
      alert("-----YES! You Pressed * ! -----");
    } else {
      alert("YOU PRESS SOMETHING");
    }
  }
  return (
    <div>
      <h3>Try Typing In Here:</h3>
      <textarea onKeyUp={handleKeyUp} />
    </div>
  );
};

export default AnnoyingForm;
