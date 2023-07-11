//css styles
import "./Dashboard.css";
//components
import WorkoutDetails from "../../components/WorkoutDetails";
import Workoutform from "../../components/Workoutform";

import { useEffect } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Dashboard() {
  const { workouts, dispatch } = useWorkoutsContext();

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      console.table(json);

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="dashboard__bg">
      <div className="dashboard__container container">
        <div className="dashboard__left">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails workout={workout} key={workout._id} />
            ))}
          {!workouts && <div>Not recording</div>}
        </div>
        <div className="dashboard__right">
          <Workoutform />
        </div>
      </div>
    </div>
  );
}
