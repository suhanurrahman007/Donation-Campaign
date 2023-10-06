import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PeopleDetailsCard from "./PeopleDetailsCard";

const PeopleDetails = () => {
    const [people, setPeoples] = useState({})
    const peoples = useLoaderData()
    const {id} = useParams()


    useEffect(() => {
      const findPeople = peoples?.find(
        (people) => people.id === parseFloat(id)
      );
      setPeoples(findPeople);
    }, [id, peoples]);

    return (
        <div>
            <PeopleDetailsCard people={people}></PeopleDetailsCard>
        </div>
    );
};

export default PeopleDetails;