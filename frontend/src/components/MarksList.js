import React, { useState, useEffect } from 'react';
import { getAllMarks } from '../service';

function MarksList() {
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllMarks();
                setMarks(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    // Function to group marks by student
    const groupMarksByStudent = () => {
        const groupedMarks = {};
        marks.forEach(mark => {
            if (!groupedMarks[mark.student]) {
                groupedMarks[mark.student] = [];
            }
            groupedMarks[mark.student].push(mark);
        });
        return groupedMarks;
    };

    // Function to get unique assignments
    const getUniqueAssignments = () => {
        const assignments = new Set();
        marks.forEach(mark => {
            assignments.add(mark.assignment);
        });
        return Array.from(assignments);
    };

    const uniqueAssignments = getUniqueAssignments();

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Marks List</h2>
            {Object.entries(groupMarksByStudent()).map(([student, studentMarks]) => (
                <div key={student} style={styles.studentContainer}>
                    <h3 style={styles.studentName}>{student}</h3>
                    <div style={styles.tableContainer}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.header}>Assignment</th>
                                    <th style={styles.header}>Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {uniqueAssignments.map((assignment, index) => {
                                    const mark = studentMarks.find(mark => mark.assignment === assignment);
                                    return (
                                        <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                                            <td style={styles.assignmentCell}>{assignment}</td>
                                            <td style={styles.marksCell}>{mark ? mark.marks : '0'}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: 'auto',
        background: '#f9f9f9',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        border: '1px solid #ddd',
    },
    heading: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
    },
    studentContainer: {
        marginBottom: '40px',
    },
    studentName: {
        textAlign: 'center',
        marginBottom: '10px',
        color: '#333',
        fontSize: '20px',
    },
    tableContainer: {
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    header: {
        backgroundColor: '#0A369D',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        borderRight: '1px solid #fff', // Vertical line after each column
    },
    assignmentCell: {
        textAlign: 'center',
        padding: '10px',
        borderRight: '1px solid #ddd', // Vertical line after each column
    },
    marksCell: {
        textAlign: 'center',
        padding: '10px',
    },
    rowEven: {
        backgroundColor: '#FFC0CB', // Light Pink
    },
    rowOdd: {
        backgroundColor: '#FFA07A', // Light Salmon
    },
};

export default MarksList;
