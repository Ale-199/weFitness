import "./WorkoutDetails.css";

export default function WorkoutDetails() {
  return (
    <>
      <div className="workoutDetailsContainer">
        <div className="deleteContainer">
          <h3>Exercise Title</h3>
          <span className="deleteBtn">
            <i class="bx bx-trash"></i>
          </span>
        </div>
        <h4>Weight in (kg): 10kg</h4>
        <h4>Reps: 20</h4>
        <h4>Sets: 5</h4>
      </div>
    </>
  );
}
