import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
  const [humanDose, setHumanDose] = useState(""); // Adult Human Dose in mg
  const [animalWeight, setAnimalWeight] = useState(""); // Animal Weight in kg

  const animalsData = [
    { name: "Mouse", weight: 0.02, surfaceArea: 0.007, kmFactor: 3 },
    { name: "Rat", weight: 0.15, surfaceArea: 0.025, kmFactor: 6 },
    { name: "Guinea Pig", weight: 0.4, surfaceArea: 0.05, kmFactor: 8 },
    { name: "Rabbit", weight: 1.8, surfaceArea: 0.15, kmFactor: 12 },
    { name: "Monkey", weight: 3, surfaceArea: 0.25, kmFactor: 12 },
    { name: "Dog", weight: 10, surfaceArea: 0.5, kmFactor: 20 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Human Dose per kg calculation
    const humanDosePerKg = humanDose / 60;

    const results = animalsData.map((animal) => {
      // Calculate dose per kg for the animal
      const animalDosePerKg = humanDosePerKg * animal.kmFactor;

      // Calculate total dose for the desired animal weight
      const totalDose = animalDosePerKg * animalWeight;

      return {
        animal: animal.name,
        dosePerKg: animalDosePerKg.toFixed(2),
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
