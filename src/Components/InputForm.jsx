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

    if (!humanDose || !animalWeight) {
      alert("Please enter both the human dose and animal weight.");
      return;
    }

    const humanDosePerKg = humanDose / 60;

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
      className="bg-white shadow-md rounded-lg p-6 space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-gray-800 font-semibold mb-2">
          Adult Human Dose (mg):
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-gray-500"
          value={humanDose}
          onChange={(e) => setHumanDose(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-800 font-semibold mb-2">
          Desired Animal Weight (kg):
        </label>
        <input
          type="number"
          step="0.01"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-gray-500"
          value={animalWeight}
          onChange={(e) => setAnimalWeight(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded transition duration-300"
      >
        Calculate
      </button>
    </form>
  );
};

export default InputForm;
