import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
  const [humanDose, setHumanDose] = useState("");
  const [animalWeight, setAnimalWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (humanDose && animalWeight) {
      onCalculate(Number(humanDose), Number(animalWeight));
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
          className="input"
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
          className="input"
          value={animalWeight}
          onChange={(e) => setAnimalWeight(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-primary">
        Calculate
      </button>
    </form>
  );
};

export default InputForm;
