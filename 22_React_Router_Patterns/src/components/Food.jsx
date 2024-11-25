import { useParams, Navigate } from "react-router-dom";

import "./Food.css";

const Food = () => {
  const { name } = useParams();

  const url = `https://source.unsplash.com/1600x900/?${name}`;

  //This we use if we want to redirect user somvhere if something went wrong in url.
  //It will be saved in the browser history
  // if (/\d/.test(name)) {
  //   return <Navigate to="/notfound" />;
  // }
  return (
    <div className="Food">
      {/*This method inside return() will redirect user where we want, if something went wrong
      in url. //It will NOT be saved in the browser history*/}
      {/\d/.test(name) ? (
        <Navigate to="/" />
      ) : (
        <div>
          <h1>I love to eat {name}</h1>
          <img src={url} alt={name} />
        </div>
      )}
    </div>
  );
};

export default Food;
