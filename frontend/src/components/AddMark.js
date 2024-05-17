// frontend/src/components/AddMark.js
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
        <div>
            <h2>Add Mark</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Student:</label>
                    <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} />
                </div>
                <div>
                    <label>Assignment:</label>
                    <input type="text" value={assignment} onChange={(e) => setAssignment(e.target.value)} />
                </div>
                <div>
                    <label>Marks:</label>
                    <input type="text" value={marks} onChange={(e) => setMarks(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddMark;
