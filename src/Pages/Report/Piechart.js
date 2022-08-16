import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import Report from './Report';
const Piechart = ({chartData}) => {
    return ( 
        <Doughnut data={chartData} />
     );
}
 
export default Piechart;
