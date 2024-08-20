const express = require("express");
const router = express.Router();
const {
	getTasks,
	getTasksById,
	createTask,
	updateTask,
	partailUpdateTask,
	deleteTask,
} = require("../controller/taskController");
const {
	validateTask,
	validateTaskExistence,
} = require("../middleware/validationMiddleware");

router.get("/", getTasks);
router.get("/:id", validateTaskExistence, getTasksById);
router.post("/", validateTask, createTask);
router.put("/:id", validateTaskExistence, validateTask, updateTask);
router.patch("/:id", validateTaskExistence, partailUpdateTask);
router.delete("/:id", validateTaskExistence, deleteTask);

module.exports = router;
