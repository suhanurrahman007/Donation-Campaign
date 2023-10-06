import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Statistics = () => {
  // Fetching the data
  const allDonation = useLoaderData();
  const donatePeoples = JSON.parse(localStorage.getItem("donate") || "[]");

  // Calculating user's donations and total donations
  const userDonations = donatePeoples.length;
  const totalDonations = allDonation.length;
  const othersDonations = totalDonations - userDonations;

  // Setting up the data and colors for the pie chart
  const data = [
    { name: "Your Donations", value: userDonations },
    { name: "Total Donations", value: othersDonations },
  ];
  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <div className="flex justify-center items-center h-full">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({name, percent }) =>
            `${name} : ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
