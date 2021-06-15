import './charts.css';
import Chart from '../../ui/chart';

const UserCharts = (stats)=> {
   return (
       <div className="charts">
           <Chart name="clicks" data={stats}/>
           <Chart name="page_views" data={stats}/>
       </div>
       )
};

export default UserCharts;