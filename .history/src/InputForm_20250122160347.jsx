import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
  const [humanDose, setHumanDose] = useState("");
  const [animalWeight, setAnimalWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const animals = [
      { name: "Mouse", weight: 0.025 },
      { name: "Rat", weight: 0.2 },
      { name: "Rabbit", weight: 2.5 },
      { name: "Dog", weight: 10 },
      { name: "Monkey", weight: 8 },
    ];

    const results = animals.map((animal) => {
      const dosePerKg = (humanDose * animal.weight) / 70;
      const totalDose = dosePerKg * animalWeight;
      return {
        animal: animal.name,
        dosePerKg,
        totalDose,
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
