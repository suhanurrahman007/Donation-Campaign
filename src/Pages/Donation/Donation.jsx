import { useState, useEffect } from "react";
import DonationPeoples from "./DonationPeoples";

const Donation = () => {
    const [donate, setDonate] = useState([]);
    const [notFound, setNotfound] = useState(false);
    const [isShow, setIsShow] = useState(4);

    useEffect(() => {
      const donatePeople = JSON.parse(localStorage.getItem("donate"));

      if (donatePeople) {
        setDonate(donatePeople);

      } else {
        setNotfound("No Donation Found");
      }
    }, []);

    const handleRemove = () => {
      localStorage.clear();
      setDonate([]);
      setNotfound("No Data Found");
    };


    return (
      <div>
        <div>
          {donate.length > 0 && (
            <div className="my-7 text-center">
              <button
                onClick={handleRemove}
                className="bg-orange-950 text-xs font-bold text-white hover:bg-blue-950 btn"
              >
                Deleted All Donations
              </button>
            </div>
          )}
        </div>
        {notFound ? (
          <p className="h-[80vh] flex justify-center items-center">
            {notFound}
          </p>
        ) : (
          <div>
            <div className="grid grid-cols-1  md:grid-cols-2 px-5 md:px-20 py-5 gap-8">
              {donate.slice(0, isShow).map((people) => (
                <DonationPeoples
                  key={people.id}
                  people={people}
                ></DonationPeoples>
              ))}
            </div>

            <div className={isShow === donate.length ? "hidden" : ""}>
              <div className="text-center">
                {donate.length > 4 && (
                  <button
                    onClick={() => setIsShow(donate.length)}
                    className="btn btn-success hover:bg-green-800 hover:text-white mb-7"
                  >
                    Show All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Donation;