import "./Dashboard.css";
import WorkoutDetails from "../../components/WorkoutDetails";
import Workoutform from "../../components/Workoutform";
export default function Dashboard() {
  return (
    <div className="dashboard__bg">
      <div className="dashboard__container container">
        <div className="dashboard__left">
          <WorkoutDetails />
        </div>
        <div className="dashboard__right">
          <Workoutform />
        </div>
      </div>
    </div>
  );
}
