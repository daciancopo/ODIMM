import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: '1',
    acuratete: 4000,
    reusite: 2400,
    
  },
  {
    date: '2',
    acuratete: 3000,
    reusite: 1398,
  
  },
  {
    date: '3',
    acuratete: 2000,
    reusite: 9800,
  
  },
  {
    date: '4',
    acuratete: 2780,
    reusite: 3908,
   
  },
  {
    date: '5',
    acuratete: 1890,
    reusite: 4800,
   
  },
  {
    date: '6',
    acuratete: 2390,
    reusite: 3800,
  
  },
  {
    date: '7',
    acuratete: 3490,
    reusite: 4300,
  
  },
  {
    date: '8',
    acuratete: 4000,
    reusite: 2400,
 
  },
  {
    date: '9',
    acuratete: 3000,
    reusite: 1398,
  
  },
  {
    date: '10',
    acuratete: 2000,
    reusite: 9800,

  },
  {
    date: '11',
    acuratete: 2780,
    reusite: 3908,

  },
  {
    date: '12',
    acuratete: 1890,
    reusite: 4800,

  },
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {

  return null;
};
export default class BarChartComponent extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="reusite" fill="#0AC993" />
          <Bar dataKey="acuratete" fill="#008053" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
