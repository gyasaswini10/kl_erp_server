import React, { useState } from 'react';

const Crud = () => {
    const [students, setStudents] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [editing, setEditing] = useState(false);

    const addStudent = () => {
        if (editing) {
            const updatedStudents = students.map(student =>
                student.id === id ? { id, name, age } : student
            );
            setStudents(updatedStudents);
            setEditing(false);
        } else {
            setStudents([...students, { id, name, age }]);
        }
        resetForm();
    };

    const editStudent = (student) => {
        setId(student.id);
        setName(student.name);
        setAge(student.age);
        setEditing(true);
    };

    const deleteStudent = (studentId) => {
        setStudents(students.filter(student => student.id !== studentId));
    };

    const resetForm = () => {
        setId('');
        setName('');
        setAge('');
    };

    return (
        <div>
            <h1>Student Management</h1>
            <input type="text" placeholder='ID' value={id} onChange={(e) => setId(e.target.value)} required />
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} required />
            <button onClick={addStudent}>{editing ? 'Update' : 'Add'} Student</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                <button onClick={() => editStudent(student)}>Edit</button>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Crud;
