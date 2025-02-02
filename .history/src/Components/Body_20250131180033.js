import React, { useState, useCallback } from "react";
import InputForm from "../Components/InputForm"
import ResultsTable from "../Components/ResultsTable";

const Body = () => {
  const [results, setResults] = useState([]);

  const handleCalculate = useCallback((animalResults) => {
    setResults(animalResults);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Human to Animal Dose Calculator
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <InputForm onCalculate={handleCalculate} />
        {results.length > 0 && <ResultsTable results={results} />}
      </div>
    </div>
  );
};

export default Body;
