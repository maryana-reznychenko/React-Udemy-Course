import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <h1 className="display-1 my-5">Dog List goes here</h1>
      <div className="row">
        {dogs.map((d) => (
          <div className="DogList_dog col-md-6 col-lg-4" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name}`} className="underline ">
                {d.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
