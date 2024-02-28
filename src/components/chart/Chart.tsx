import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { data } from "../dashboard/data";
import { CustomLegend } from "../dashboard/Legend";
import { dataType } from '../../interfaces';


const Chart: React.FC = () => {
  const initialData: dataType[] = [...data].sort((a, b) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    return new Date(`${aYear} ${aMonth}`).getTime() - new Date(`${bYear} ${bMonth}`).getTime();
  });
  return (
    <div>
      <ResponsiveContainer height={400}>
        <LineChart
          height={400}
          data={initialData}
          margin={{
            top:  20,
            right:  40,
            left:  0,
            bottom:  5,
          }}
        >
          <CartesianGrid strokeDasharray="1  0" vertical={false} />
          <XAxis
            dataKey="date"
            tickCount={initialData?.length ??  0}
            tick={{
              stroke: "#676767",
              strokeWidth:  0.4,
              fontSize: ".9rem",
            }}
            tickLine={false}
            axisLine={false}  
          />
          <YAxis
            interval="preserveStartEnd"
            tickLine={false}
            axisLine={false}  
          />
          <Tooltip />
          <Legend content={<CustomLegend data={initialData} />} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#489AD2"
            strokeWidth={2}  
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#6FC2F3"
            strokeDasharray="3  4  5  2"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

