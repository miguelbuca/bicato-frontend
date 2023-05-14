import React from "react";

export interface MetricsProps {
  data: Metrics[];
}

const Metrics = ({ data }: MetricsProps) => {
  return (
    <div className="flex flex-row md:ml-0 sm:justify-center sm:items-center xs:justify-center xs:items-center xs:-ml-10 ss:-ml-10">
      {data.map(({ name, value }, index, arr) => (
        <div
          key={index}
          className={`flex flex-col items-center ${
            index + 1 === arr.length
              ? `md:pl-5 sm:pl-5 ss:pl-3`
              : `border-r md:px-10 sm:px-5 ss:px-3`
          }`}
        >
          <div className="flex items-center justify-center mb-2">
            <strong className="lg:text-6xl md:text-4xl xs:text-xl ss:text-base">
              {value}
            </strong>
          </div>
          <div>
            <span className="capitalize xs:text-xs ss:text-xs">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
