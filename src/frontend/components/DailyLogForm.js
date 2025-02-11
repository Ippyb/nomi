import React, { useState } from "react";
import "../styles/DailyLogForm.css";


const DailyLogForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    day: "",
    temperature: "",
    workload: "",
    meals: "",
    water: "",
    exercise: "",
    screentime: "",
    menstrualPhase: "",
    log: "",
    mood: "",
    sleep: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="dailyLogFormContainer">
      <label>
        Date (MM/DD/YY):
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="dailyLogField"
        />
      </label>

      <label>
        Day of the Week:
        <input
          type="text"
          name="day"
          value={formData.day}
          onChange={handleChange}
          required
          className="dailyLogField"
        />
      </label>

      <label>
        Weather (Highest Temperature in C):
        <input
          type="number"
          step="0.1"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <label>
        Workload (Rated 1-5):
        <input
          type="number"
          min="1"
          max="5"
          name="workload"
          value={formData.workload}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <label>
        Meals (Number):
        <input
          type="number"
          name="meals"
          value={formData.meals}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <label>
        Water Intake (Litres per day):
        <input
          type="number"
          step="0.1"
          name="water"
          value={formData.water}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <label>
        Exercise (Hours):
        <input
          type="number"
          step="0.1"
          name="exercise"
          value={formData.exercise}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <label>
        Screentime (Hours):
        <input
          type="number"
          step="0.1"
          name="screentime"
          value={formData.screentime}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <label>
        Menstrual Cycle Phase:
        <select
          name="menstrualPhase"
          value={formData.menstrualPhase}
          onChange={handleChange}
          className="dailyLogField"
        >
          <option value="">Not Tracked</option>
          <option value="1">Menstruation</option>
          <option value="2">Follicular</option>
          <option value="3">Ovulation</option>
          <option value="4">Luteal Phase</option>
        </select>
      </label>

      <label>
        Log (Daily Activities/Events):
        <textarea
          name="log"
          value={formData.log}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <label>
        Overall Mood:
        <select
          name="mood"
          value={formData.mood}
          onChange={handleChange}
          className="dailyLogField"
        >
          <option value="">Select Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
          <option value="Anxious">Anxious</option>
          <option value="Irritable">Irritable</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Excited">Excited</option>
          <option value="Tired">Tired</option>
        </select>
      </label>

      <label>
        Sleep (Hours):
        <input
          type="number"
          step="0.1"
          name="sleep"
          value={formData.sleep}
          onChange={handleChange}
          className="dailyLogField"
        />
      </label>

      <button type="submit" className="DailyLogSubmitButton">
        Submit
      </button>
    </form>
  );
};

export default DailyLogForm;
