'use client'
// pages/index.js
import React from 'react';
import ChartComponent from '../../components/ChartComponent';

const getOption = () => {
  return {
    title: {
      text: 'ECharts example'
    },
    tooltip: {},
    legend: {
      data:['Sales']
    },
    xAxis: {
      data: ['shirt','cardigan','chiffon shirt','pants','heels','socks']
    },
    yAxis: {},
    series: [{
      name: 'Sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
};

const HomePage = () => {
  const option = getOption();

  return (
    <div>
      <h1>Next.js app with Apache ECharts</h1>
      <ChartComponent option={option} />
    </div>
  );
};

export default HomePage;
