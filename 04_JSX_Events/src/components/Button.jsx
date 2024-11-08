const Button = () => {
  return (
    <div>
      <button
        onClick={function () {
          alert("CLICKED");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;
