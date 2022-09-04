import React from 'react';
import { Doughnut  } from 'react-chartjs-2';
import { Chart as Chart } from 'chart.js/auto';

const RimGraph = ({chartdata}) => {
  return (
    <div class="border border-4 py-4">
      <Doughnut data={chartdata} />
    </div>
  )
}

export default RimGraph