import { useLoaderData } from "react-router-dom";
import People from "../../components/Peoples/People";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const peoples = useLoaderData();

  const filteredPeoples = searchText
    ? peoples.filter(
        (people) =>
          people.categories.toLowerCase().includes(searchText.toLowerCase()) ||
          people.categories.toUpperCase().includes(searchText.toUpperCase())
      )
    : peoples;

  const handleInput = (inputValue) => {
    setSearchText(inputValue);
  };

  return (
    <div>
      <div className="coverPhoto">
        <Banner handleInput={handleInput}></Banner>
      </div>
      <h2 className="text-2xl text-center font-extrabold p-5">
        All Categories Helping People
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-5 md:px-20">
        {filteredPeoples.map((people) => (
          <People key={people.id} people={people}></People>
        ))}
      </div>
    </div>
  );
};

export default Home;
