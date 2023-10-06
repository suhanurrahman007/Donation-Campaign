import { Link } from "react-router-dom";

const DonationPeoples = ({ people }) => {
  const { id, title, image, categories, color, price } = people;

  return (
    <div
      style={{ backgroundColor: color.colorOne }}
      className="card flex flex-row card-compact delay-150 duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer shadow-2xl"
    >
      <figure>
        <img className="w-52 h-[11.7rem]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <button
            style={{
              backgroundColor: color.colorTwo,
              color: color.colorThree,
            }}
            className="btn btn-sm"
          >
            {categories}
          </button>
        </div>
        <h2 className="card-title text-lg">{title}</h2>
        <p style={{ color: color.colorThree }} className="text-sm font-bold">
          ${price}.00
        </p>
        <div>
          <Link to={`/people/${id}`}>
            <button
              style={{ backgroundColor: color.colorThree }}
              className="btn rounded-sm text-xs text-white"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationPeoples;
