import 'dotenv/config';
import { CONFIG } from "./config/settings";
import express from "express";
import cors from "cors";
import { errorHandler } from './middleware/errorHandler';
import taskRoutes from "./routes/taskRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = CONFIG.PORT || 5000;

// Enable all routes
app.use(cors());

// Parse JSON
app.use(express.json());

// Mount routes
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Use global error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
});