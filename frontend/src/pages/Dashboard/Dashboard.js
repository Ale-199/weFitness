import "./Dashboard.css";
import WorkoutDetails from "../../components/WorkoutDetails";
import Workoutform from "../../components/Workoutform";
export default function Dashboard() {
  return (
    <div className="bg">
      <div className="dashboard__container container">
        <div>
          <WorkoutDetails />
        </div>
        <div>
          <Workoutform />
        </div>
      </div>
    </div>
  );
}
