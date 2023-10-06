import swal from "sweetalert";

const PeopleDetailsCard = ({ people }) => {
  const {id, title, description, image, price, color } = people;


  const handleDonate = () => {
    const donatePeopleArray = [];

    const donatePeoples = JSON.parse(localStorage.getItem("donate"));

    if (!donatePeoples) {
      donatePeopleArray.push(people);
      localStorage.setItem("donate", JSON.stringify(donatePeopleArray));
      swal("Good job!", "Your Donate successfully!!!", "success");
    } else {
      const isExits = donatePeoples.find((people) => people.id === id);

      if (!isExits) {
        donatePeopleArray.push(...donatePeoples, people);
        localStorage.setItem("donate", JSON.stringify(donatePeopleArray));
        swal("Good job!", "Your Donate successfully!!!", "success");
      } else {
        swal("Error!", "Already Donated!!!", "error");
      }
    }
  };
  return (
    <div className="px-7 md:px-20 space-y-4 py-5">
      <div className="relative">
        <img
          className="w-full h-auto md:h-auto lg:h-[30rem] rounded-lg"
          src={image}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 h-20 bg-black opacity-50">
          <button
            onClick={handleDonate}
            style={{ backgroundColor: color?.colorThree }}
            className="btn rounded-sm text-white w-40"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="text-sm text-gray-700 text-justify">{description}</p>
    </div>
  );
};

export default PeopleDetailsCard;
