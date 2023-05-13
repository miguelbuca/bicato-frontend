import React from "react";

export interface MetricsProps {
  data: Metrics[];
}

const Metrics = ({ data }: MetricsProps) => {
  return (
    <div className="flex flex-row gap-10">
      {data.map(({ name, value }, index, arr) => (
        <div
          key={index}
          className={`flex flex-col items-center ${
            index + 1 === arr.length ? `` : `border-r pr-10`
          }`}
        >
          <div className="mb-2">
            <strong className="text-6xl">{value}</strong>
          </div>
          <div>
            <span className="capitalize">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
