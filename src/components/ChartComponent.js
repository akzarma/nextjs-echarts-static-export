import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartComponent = ({ option }) => {
  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};

export default ChartComponent;