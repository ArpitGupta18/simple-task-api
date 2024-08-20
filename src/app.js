const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(errorMiddleware);

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
