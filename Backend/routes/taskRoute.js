const router = require("express").Router();
const Task = require("../models/task");
const { isValidObjectId } = require("mongoose");
const User = require("../models/user");
const authanticationToken = require("./auth");

// Get all tasks
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Get a single task
router.get("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the task ID
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Create a new task
router.post("/create-task", authanticationToken, async (req, res) => {
    try {
        const { title, description, dueDate, status, priority } = req.body;
        const { id } = req.headers;

        // Check if required fields are provided
        if (!title || !dueDate || !status || !priority) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Create a new task
        const newTask = new Task({ title, description, dueDate, priority, status });
        await newTask.save();

        // Add the task to the user's tasks
        const user = await User.findByIdAndUpdate(id, { $push: { tasks: newTask._id } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(201).json({ message: "Task created" });
    } catch (err) {
        // console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Update a task
router.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, dueDate, priority, completed } = req.body;

        // Validate the task ID
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        // Find the task and update it
        const task = await Task.findByIdAndUpdate(
            id,
            { title, description, dueDate, priority, completed },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Delete a task
router.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the task ID
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;