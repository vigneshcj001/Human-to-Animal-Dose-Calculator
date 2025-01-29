import React from "react";

const ResultsTable = ({ results }) => {
  if (!results.length) return null;

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-left font-semibold">Animal</th>
            <th className="px-6 py-3 text-left font-semibold">Dose (mg/kg)</th>
            <th className="px-6 py-3 text-left font-semibold">Dose (mg)</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
            >
              <td className="px-6 py-4 border-b">{result.animal}</td>
              <td className="px-6 py-4 border-b">{result.dosePerKg}</td>
              <td className="px-6 py-4 border-b">{result.totalDose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
