import React, { useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ItemContext from '../Context/ItemContext';


ChartJS.register(ArcElement, Tooltip, Legend);
const Piechart = () => {
  const context = useContext(ItemContext);
  const { list } = context;
  let elec = list.filter(list => list.category === 'electronics').length;
  let jew = list.filter(list => list.category === 'jewelery').length;
  let men = list.filter(list => list.category === "men's clothing").length;
  let women = list.filter(list => list.category === "women's clothing").length;
  const data = {
    labels: ['electronics', 'jewelery', 'mens clothing', 'womens clothing'],
    datasets: [
      {
        label: '# of Votes',
        data: [elec, jew, men, women],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Pie data={data}></Pie>
    </div>
  )
}

export default Piechart
