import { Link } from "react-router-dom";

const People = ({ people }) => {
  const { id, title, image, categories, color } = people;

  return (
    <Link to={`/people/${id}`}>
      <div
        style={{ backgroundColor: color.colorOne }}
        className="card card-compact rounded-lg delay-150 duration-300 ease-in-out hover:scale-105 cursor-pointer shadow-2xl"
      >
        <figure>
          <img className="w-full h-40" src={image} alt="Shoes" />
        </figure>
        <div className="card-body h-32">
          <div className="card-actions">
            <button
              style={{
                backgroundColor: color.colorTwo,
                color: color.colorThree,
              }}
              className="btn btn-sm normal-case"
            >
              {categories}
            </button>
          </div>
          <h2
            style={{ color: color.colorThree }}
            className="card-title text-lg"
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default People;
