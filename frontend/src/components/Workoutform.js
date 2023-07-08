import "./Workoutform.css";

export default function Workoutform() {
  return (
    <div className="workoutForm__container">
      <h2>Add A New Workout</h2>
      <div className="form__input">
        <h3>Exercise Title:</h3>
        <input type="text" />
      </div>
      <div className="form__input">
        <h3>Weight (in kg):</h3>
        <input type="text" />
      </div>
      <div className="form__input">
        <h3>Reps:</h3>
        <input type="text" />
      </div>
      <div className="form__input">
        <h3>Sets:</h3>
        <input type="text" />
      </div>
      <button className="form__btn btn">Add Workout</button>
    </div>
  );
}
