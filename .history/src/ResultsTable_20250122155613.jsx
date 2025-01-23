import React from "react";

const ResultsTable = ({ results }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="th">Animal</th>
            <th className="th">Dose (mg/kg)</th>
            <th className="th">Total Dose (mg)</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ animal, dosePerKg, totalDose }, index) => (
            <tr key={index}>
              <td className="td">{animal}</td>
              <td className="td">{dosePerKg.toFixed(2)}</td>
              <td className="td">{totalDose.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
