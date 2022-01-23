import moment from 'moment'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Theme = {
  read:         "rgba(70,164,108, 0.5)",
  readBorder:   "rgb(70,164,108)",
  added:        "rgba(218,48,76, 0.5)",
  addedBorder:  "rgb(218,48,76)"
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 22
        },
      }
    },
    title: {
      display: true,
      text: 'Added vs Read',
      font: {
        size: 28
      },
    },
  },
};


const itemisedStatsToGraph = (itemised) => {
  let readData = [];
  let addedData = [];
   let labels = [];


  for (let [day, entry] of Object.entries(itemised)) {
    var dayStr = moment.unix(day).utc().format("DD MMM");
    labels.push(dayStr);
    readData.push({x: dayStr, y: entry.articles_read});
    addedData.push({x: dayStr, y: entry.articles_added});
  }

  return {
    labels,
    datasets: [
      {
        label: 'Read',
        data: readData,
        backgroundColor: Theme.read,
        borderColor: Theme.readBorder
      },
      {
        label: 'Added',
        data: addedData,
        backgroundColor: Theme.added,
        borderColor: Theme.addedBorder
      }
    ]
  };
}

const Graph = ({itemised}) => {
  const graphData = itemisedStatsToGraph(itemised);

  return <Line options={options} data={graphData}/>;
}

export default Graph;
