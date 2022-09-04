import React,{useState} from 'react';
import './index.css';
import { Navbar, Table, RimGraph, BarGraph, Buton } from './components';
import { GraphData } from './Data';
import { data } from 'autoprefixer';

const App = () => {
    const [useData,setData] = useState({
        labels:GraphData.map((data) => data.date),
        datasets:[{
            label:"Amount spent",
            data: GraphData.map((data) => data.amount) ,
            backgroundColor:["blue","grey"]
        }]
    });
    const datadoughnut = {
        labels: [
          'Grey'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [100],
          backgroundColor: [
            'grey'
          ],
        }]
      };
  return (
    <div>
        <Navbar />
        <Buton/>
        <div class="m-5 mt-14 flex flex-row space-x-6">
            <div class="border border-4 w-2/3 h-screen">
                <Table/>
            </div>
            <div class="flex flex-col gap-5">
                <RimGraph chartdata={datadoughnut}/>
                <BarGraph chartdata={useData}/>
            </div>
        </div>
        <div class="text-center text-[#3120E0]">
            <div>Total Expenditure : 3500</div>
            <div>Total Earning :2500</div>
            <div>Net Total : -1000</div>
        </div>
    </div>
  )
}

export default App