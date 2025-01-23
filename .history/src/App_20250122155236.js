import React, { useState } from "react";
import InputForm from "./InputForm"
import ResultsTable from "./ResultsTable"

const App = () => {
  const [results, setResults] = useState([]);

  const handleCalculate = (humanDose, animalWeight) => {
    const kmHuman = 37;
    const animals = [
      { name: "Mouse", km: 3 },
      { name: "Rat", km: 6 },
      { name: "Guinea Pig", km: 8 },
      { name: "Rabbit", km: 12 },
      { name: "Monkey", km: 12 },
      { name: "Dog", km: 20 },
    ];

    const newResults = animals.map((animal) => {
      const dosePerKg = (humanDose * kmHuman) / animal.km;
      const totalDose = dosePerKg * animalWeight;
      return { animal: animal.name, dosePerKg, totalDose };
    });

    setResults(newResults);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Human to Animal Dose Calculator
      </h1>
      <div className="max-w-4xl mx-auto">
        <InputForm onCalculate={handleCalculate} />
        {results.length > 0 && <ResultsTable results={results} />}
      </div>
    </div>
  );
};

export default App;
