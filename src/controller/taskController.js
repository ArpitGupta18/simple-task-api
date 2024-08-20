const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../../data/db.json");
let db = require(dbPath);

const saveToDb = () => {
	fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

const getTasks = (req, res) => {
	try {
		res.status(200).json(db.tasks);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getTasksById = (req, res) => {
	const tasks = db.tasks.find((task) => task.id == req.params.id);
	if (tasks) {
		res.status(200).json(tasks);
	} else {
		res.status(404).json({ message: "Task not found" });
	}
};

const createTask = (req, res) => {
	const { name, description, status } = req.body;
	const newTask = {};
	newTask.id = Date.now();
	newTask.name = name;
	newTask.description = description === undefined ? "" : description;
	newTask.status = status;
	db.tasks.push(newTask);
	saveToDb();
	res.status(201).json(newTask);
};

const partailUpdateTask = (req, res) => {
	const taskIndex = db.tasks.findIndex((task) => task.id == req.params.id);
	const { name, description, status } = req.body;

	const nameValue = name === undefined ? db.tasks[taskIndex].name : name;
	const statusValue =
		status === undefined ? db.tasks[taskIndex].status : status;
	const descriptionValue =
		description === undefined
			? db.tasks[taskIndex].description
			: description;

	if (taskIndex != -1) {
		const updatedTask = {
			id: db.tasks[taskIndex].id,
			name: nameValue,
			description: descriptionValue,
			status: statusValue,
		};
		db.tasks[taskIndex] = updatedTask;

		saveToDb();
		res.status(200).json(updatedTask);
	} else {
		res.status(404).json({ message: "Task not found" });
	}
};

const updateTask = (req, res) => {
	const taskIndex = db.tasks.findIndex((task) => task.id == req.params.id);
	const { name, description, status } = req.body;

	console.log(name);
	console.log(description);
	console.log(status);
	const descriptionValue =
		description === undefined
			? db.tasks[taskIndex].description
			: description;

	if (taskIndex != -1) {
		const updatedTask = {
			id: db.tasks[taskIndex].id,
			name: name,
			description: descriptionValue,
			status: status,
		};
		db.tasks[taskIndex] = updatedTask;

		saveToDb();
		res.status(200).json(updatedTask);
	} else {
		res.status(404).json({ message: "Task not found" });
	}
};

const deleteTask = (req, res) => {
	const originalLength = db.tasks.length;
	db.tasks = db.tasks.filter((task) => task.id != req.params.id);
	saveToDb();

	if (db.tasks.length < originalLength) {
		res.status(200).json({ message: "Task deleted successfully" });
	} else {
		res.status(404).json({ message: "Task not found" });
	}
};

module.exports = {
	getTasks,
	getTasksById,
	createTask,
	updateTask,
	partailUpdateTask,
	deleteTask,
};
