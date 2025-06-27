import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setErrors] = useState({});
    const [form, setForm] = useState({ email: "", password: "" });
    const [issubmiting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!form.email.includes('@')) {
            errors.email = 'Email must be valid';
        }
        if (form.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        return errors;
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const validateErrors = validate();
        setErrors(validateErrors);
        if (Object.keys(validateErrors).length > 0) {
            setIsSubmitting(false);
            return;
        }
        setTimeout(() => {
            if (
                form.email === "admin@gmail.com" && form.password === "12345678"
            ) {
                navigate("/dashboard");
            } else {
                alert("Invalid Credentials");
            }
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                style={styles.input}
                value={form.email}
                onChange={handleChange}
                required
            />
            {error.email && (
                <span style={{ color: "red", fontSize: "14px" }}>{error.email}</span>
            )}
            <br /><br />

            <div style={{ position: "relative" }}>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    style={styles.input}
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "black",
                        fontWeight: "bold",
                        userSelect: "none"
                    }}
                >
                    {showPassword ? "Hide" : "Show"}
                </span>
            </div>
            {error.password && (
                <span style={{ color: "red", fontSize: "14px" }}>{error.password}</span>
            )}
            <br /><br />
            <button
                type="submit"
                style={styles.button}
                disabled={issubmiting}
            >
                {issubmiting ? 'Logging in....' : 'Login'}
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'blue',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        fontSize: '16px',
        color: 'black',
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid #ccc',
        width: '70%',
        transition: "border-color 0.3s ease",
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
    },
};

export default LoginForm;