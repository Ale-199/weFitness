const express = require("express");
const {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteworkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteworkout);

router.patch("/:id", updateWorkout);

module.exports = router;
