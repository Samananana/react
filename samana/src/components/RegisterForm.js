import React, { useState } from 'react';

function RegisterForm() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Login in with\nEmail: ${form.email}\nPassword: ${form.password}`);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                style={styles.input}
            />
            <br /><br />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
            />
            <br /><br />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                style={styles.input}
            />
            <br /><br />
            <button type="submit" style={styles.button}>Register</button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
    },
    input: {
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px',
        backgroundColor: 'pink',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: 'pink',
        fontWeight: 'bold', // fixed typo: fontstyle -> fontWeight
    },
};

export default RegisterForm;