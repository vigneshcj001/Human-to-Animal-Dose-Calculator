import React, { useState, useMemo } from "react";

const InputForm = ({ onCalculate }) => {
  const [humanDose, setHumanDose] = useState("");
  const [animalWeight, setAnimalWeight] = useState("");

  const animalsData = useMemo(
    () => [
      { name: "Mouse", weight: 0.02, kmFactor: 3 },
      { name: "Rat", weight: 0.15, kmFactor: 6 },
      { name: "Guinea Pig", weight: 0.4, kmFactor: 8 },
      { name: "Rabbit", weight: 1.8, kmFactor: 12 },
      { name: "Monkey", weight: 3, kmFactor: 12 },
      { name: "Dog", weight: 10, kmFactor: 20 },
    ],
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!humanDose || !animalWeight) {
      alert("Please enter both the human dose and animal weight.");
      return;
    }

    // Human dose per kg
    const humanDosePerKg = humanDose / 60;

    // Calculate results
    const results = animalsData.map((animal) => {
      const dosePerKg = humanDosePerKg * animal.kmFactor;
      const totalDose = dosePerKg * animalWeight;

      return {
        animal: animal.name,
        dosePerKg: dosePerKg.toFixed(2),
        totalDose: totalDose.toFixed(2),
      };
    });

    onCalculate(results);
  };

  return (
    <form
      className="bg-white shadow-lg rounded-lg p-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Adult Human Dose (mg):
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={humanDose}
          onChange={(e) => setHumanDose(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Desired Animal Weight (kg):
        </label>
        <input
          type="number"
          step="0.01"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={animalWeight}
          onChange={(e) => setAnimalWeight(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition duration-300"
      >
        Calculate
      </button>
    </form>
  );
};

export default InputForm;
