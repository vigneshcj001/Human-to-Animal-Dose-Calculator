import React from "react";

const ResultsTable = ({ results }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Animal</th>
            <th className="border border-gray-400 px-4 py-2">Dose (mg/kg)</th>
            <th className="border border-gray-400 px-4 py-2">Dose (mg)</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">
                {result.animal}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {result.dosePerKg.toFixed(2)}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {result.totalDose.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
