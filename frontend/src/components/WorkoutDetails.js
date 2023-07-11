import "./WorkoutDetails.css";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workoutDetailsContainer">
      <div className="deleteContainer">
        <h3>{workout.title}</h3>
        <span className="deleteBtn" onClick={handleClick}>
          <i className="bx bx-trash"></i>
        </span>
      </div>
      <h4>Weight in (kg): {workout.weight}</h4>
      <h4>Reps: {workout.reps}</h4>
      <h4>Sets: {workout.sets}</h4>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
}
