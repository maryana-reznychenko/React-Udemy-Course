const Friend = ({ name, hobbies }) => {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Friend;
