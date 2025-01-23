import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
  const [humanDose, setHumanDose] = useState("");
  const [animalWeight, setAnimalWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (humanDose && animalWeight) {
      onCalculate(parseFloat(humanDose), parseFloat(animalWeight));
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Adult Human Dose (mg):
        </label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={humanDose}
          onChange={(e) => setHumanDose(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Desired Animal Weight (kg):
        </label>
        <input
          type="number"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={animalWeight}
          onChange={(e) => setAnimalWeight(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Calculate
      </button>
    </form>
  );
};

export default InputForm;
