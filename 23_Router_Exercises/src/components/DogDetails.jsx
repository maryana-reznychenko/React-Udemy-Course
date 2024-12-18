import { useParams, Link } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <h2>Dog not found!</h2>;
  }
  return (
    <div className="DogDetails row justify-content-center mt-5">
      <div className="col-11 col-lg-5">
        <div className="DogDetails_card card">
          <img className="card-img-top " src={dog.src} alt={dog.name} />
          <div className="card-body">
            <h3 className="card-title">{dog.name}</h3>
            <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
          </div>
          <ul className="list-group list-group-flush">
            {dog.facts.map((fact, i) => (
              <li className="list-group-item" key={i}>
                {fact}
              </li>
            ))}
          </ul>
          <div className="card-body">
            <Link to="/dogs" className="btn btn-danger">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
