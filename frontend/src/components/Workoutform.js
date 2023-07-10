import "./Workoutform.css";
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Workoutform() {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSumit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const workout = { title, weight, reps, sets };

    const reponse = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await reponse.json();

    if (!reponse.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (reponse.ok) {
      setError(null);
      setTitle("");
      setWeight("");
      setReps("");
      setSets("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="workoutForm__container" onSubmit={handleSumit}>
      <h2>Add A New Workout</h2>
      <div className="form__input">
        <h3>Exercise Title:</h3>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : ""}
        />
      </div>
      <div className="form__input">
        <h3>Weight (in kg):</h3>
        <input
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          className={emptyFields.includes("weight") ? "error" : ""}
        />
      </div>
      <div className="form__input">
        <h3>Reps:</h3>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={emptyFields.includes("reps") ? "error" : ""}
        />
      </div>
      <div className="form__input">
        <h3>Sets:</h3>
        <input
          type="number"
          onChange={(e) => setSets(e.target.value)}
          value={sets}
          className={emptyFields.includes("sets") ? "error" : ""}
        />
      </div>
      <button className="form__btn btn">Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
