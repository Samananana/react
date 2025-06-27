import React, { useState } from "react";

// ...existing code...
function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [selectAll, setSelectAll] = useState(false);

    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    const toggleTask = (index) => {
        const updated = [...tasks];
        updated[index].completed = !updated[index].completed;
        setTasks(updated);
    };

    const deleteTask = (index) => {
        const updated = [...tasks];
        updated.splice(index, 1);
        setTasks(updated);
    };

    // Select/Deselect all checkboxes
    const handleSelectAll = () => {
        const newValue = !selectAll;
        setSelectAll(newValue);
        setTasks(tasks.map(task => ({ ...task, completed: newValue })));
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <h2>To-Do list</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleAddTask} style={styles.addButton}>Add Task</button>
            </div>
            {/* Select All Checkbox */}
            {tasks.length > 0 && (
                <div style={{ margin: "10px 0" }}>
                    <input
                        type="checkbox"
                        checked={tasks.length > 0 && tasks.every(task => task.completed)}
                        onChange={handleSelectAll}
                        style={{ marginRight: "10px" }}
                    />
                    <label>Select All</label>
                </div>
            )}
            <ul style={styles.taskList}>
                {tasks.map((task, index) => (
                    <li key={index} style={styles.taskItem}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(index)}
                            style={{ marginRight: "10px" }}
                        />
                        <span
                            onClick={() => toggleTask(index)}
                            style={{
                                ...styles.taskText,
                                textDecoration: task.completed ? "line-through" : "none",
                                color: task.completed ? "gray" : "black"
                            }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(index)}
                            style={styles.deleteButton}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
const styles = {
    container: {
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "purple",
        boxShadow: "0 2px 4px rgba(200, 25, 25, 0.1)",
        textAlign: "center"
    },
    inputWrapper: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc"
    },
    addButton: {
        padding: "10px 15px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#28a745",
        color: "#fff",
        cursor: "pointer",
        fontSize: "16px"
    }, 
    taskList: {
        listStyleType: "none",
        padding: 0,
        margin: "10px",
     },
     taskItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#fff",
        marginBottom: "10px",
        borderRadius: "4px",
        borderRadius: "1px solid #ccc",
        border: "1px solid #ccc",
     },
     taskText: {
        flex: 1,
        cursor: "pointer",
        textAlign: "left",
    },
     deleteButton: {
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        marginLeft: "10px",
},

}

export default Dashboard;
