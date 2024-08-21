// import required module
const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "../../data/db.json");

// verifies whether the request body contains name and status to perform operation
const validateTask = (req, res, next) => {
	const { name, status } = req.body;
	if (!name || !status) {
		return res
			.status(404)
			.json({ message: "Name and Status are required" });
	}
	next();
};

// validates where the task requested exists or not
const validateTaskExistence = (req, res, next) => {
	const db = JSON.parse(fs.readFileSync(tasksPath));
	const task = db.tasks.find((task) => task.id == req.params.id);
	if (!task) {
		return res.status(404).json({ message: "Task not found" });
	}
	next();
};

module.exports = { validateTask, validateTaskExistence };
