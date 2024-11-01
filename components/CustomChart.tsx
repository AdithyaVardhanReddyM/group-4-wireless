import React, { useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  iswall1visible: boolean;
  iswall2visible: boolean;
  constructive: boolean;
};

const CustomChart = ({
  iswall1visible,
  iswall2visible,
  constructive,
}: Props) => {
  const generateData = () => {
    const data = [];
    for (let x = 0; x <= 2 * Math.PI; x += 0.1) {
      if (constructive) {
        data.push({
          time: x.toFixed(1),
          direct: Math.sin(x),
          leftWall: Math.sin(x) * 0.7, // 70% amplitude
        });
      } else {
        data.push({
          time: x.toFixed(1),
          direct: Math.sin(x),
          leftWall: -1 * Math.sin(x) * 0.6, // 70% amplitude
        });
      }
    }
    return data;
  };

  const CustomTooltip = ({ active }: any) => {
    if (active) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
          <p className="text-blue-600 font-medium">Direct Signal</p>
          {iswall1visible && iswall2visible && (
            <p className="text-green-600 font-medium">Reflected from Wall</p>
          )}
          {iswall1visible && !iswall2visible && (
            <p className="text-green-600 font-medium">
              Reflected from Left Wall
            </p>
          )}
          {!iswall1visible && iswall2visible && (
            <p className="text-green-600 font-medium">
              Reflected from Right Wall
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96 py-10 px-20 bg-black rounded-lg shadow-lg">
      <h2 className=" font-semibold mb-4 text-white">Signals at Reciever</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={generateData()}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis
            dataKey="time"
            label={{ value: "Time", position: "bottom" }}
            tickFormatter={() => ""} // Hide tick values
            axisLine={false}
            tick={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="direct"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
            name="Direct Signal"
          />
          <Line
            type="monotone"
            dataKey="leftWall"
            stroke="#16a34a"
            strokeWidth={2}
            dot={false}
            name="Reflected from either Wall"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomChart;
