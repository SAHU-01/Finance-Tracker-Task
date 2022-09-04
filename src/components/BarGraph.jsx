import React from 'react';
import { Bar  } from 'react-chartjs-2';
import { Chart as Chart } from 'chart.js/auto';

const BarGraph = ({chartdata}) => {
  return (
    <div class="border border-4 p-8">
      <Bar data={chartdata} class="w-96"/>
    </div>
  )
}

export default BarGraph