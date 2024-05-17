import React, { useState } from 'react';
import { addMark } from '../service';

function AddMark() {
    const [student, setStudent] = useState('');
    const [assignment, setAssignment] = useState('');
    const [marks, setMarks] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addMark({ student, assignment, marks: parseInt(marks) });
            // alert('Mark added successfully!');
            setStudent('');
            setAssignment('');
            setMarks('');
        } catch (error) {
            // alert('Failed to add mark');
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Add Mark</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>Student:</label>
                    <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} style={styles.input} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>Assignment:</label>
                    <input type="text" value={assignment} onChange={(e) => setAssignment(e.target.value)} style={styles.input} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>Marks:</label>
                    <input type="text" value={marks} onChange={(e) => setMarks(e.target.value)} style={styles.input} />
                </div>
                <button type="submit" style={styles.button}>Add</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        background: '#f9f9f9',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        background: '#0A369D',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
};

export default AddMark;
