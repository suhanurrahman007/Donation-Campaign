import { useState } from "react";


const Banner = ({ handleInput }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const onButtonClick = () => {
    handleInput(localSearchText); 
  };

  return (
    <div className="lg:px-20 px-6 flex flex-col justify-center items-center h-[70vh] space-y-7">
      <h2 className="text-xl md:text-3xl font-extrabold">
        I Grow By Helping People In Need
      </h2>
      <div className="form-control">
        <div className="input-group">
          <input
            value={localSearchText}
            onChange={(e) => setLocalSearchText(e.target.value)}
            id="inputField"
            type="text"
            placeholder="Search here....."
            className="input input-bordered"
          />
          <button
            onClick={onButtonClick}
            className="btn bg-orange-700 text-white hover:bg-orange-950"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
