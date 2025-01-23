import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultsTable from "./components/ResultsTable";

const App = () => {
  const [results, setResults] = useState([]);

  const handleCalculate = (animalResults) => {
    setResults(animalResults);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-md mb-8">
        Human to Animal Dose Calculator
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <InputForm onCalculate={handleCalculate} />
        {results.length > 0 && <ResultsTable results={results} />}
      </div>
    </div>
  );
};

export default App;
