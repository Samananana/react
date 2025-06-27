import React, { useState } from "react";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from "./components/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div style={styles.container}>
                        <h1>{showLogin ? 'Login' : 'Register'}</h1>
                        {showLogin ? <LoginForm /> : <RegisterForm />}
                        <p>
                            {showLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                style={styles.switchBtn}
                                onClick={() => setShowLogin(!showLogin)}
                                type="button"
                            >
                                {showLogin ? "Register" : "Login"}
                            </button>
                        </p>
                    </div>
                }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        maxWidth: '400px',
        padding: '20px',
        margin: '0 auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
    },
    switchBtn: {
        marginLeft: '10px',
        cursor: 'pointer',
    },
};

export default App;