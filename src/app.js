// importing all the required modules
const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
const taskRoutes = require("./routes/taskRoutes");

// creating an express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(errorMiddleware);

// setting up the routes for api endpoints
app.use("/api/tasks", taskRoutes);

// Listening to the program on http://localhost:3000/
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
