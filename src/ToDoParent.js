import React, { useState } from "react";
import ToDoChild1 from "./ToDoChild1";
import ToDoChild2 from "./ToDoChild2";

function ToDoParent() {
    const [toDos, setToDos] = useState([]);

    const addToDo = (newToDo) => {
        setToDos([...toDos, newToDo]);
    };

    const deleteToDo = (index) => {
        const updatedToDos = [...toDos];
        updatedToDos.splice(index, 1);
        setToDos(updatedToDos);
    };

    const saveToDo = (index, editedToDo) => {
        const updatedToDos = [...toDos];
        updatedToDos[index] = editedToDo;
        setToDos(updatedToDos);
    };

    return (
        <>
            <hr />
            <h1 style={{ textAlign: "center" }}>To Do List</h1>
            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
            <hr />
            <ToDoChild1 onAddToDo={addToDo} />
            <hr />
            <ToDoChild2 toDos={toDos} onDeleteToDo={deleteToDo}onSaveToDo={saveToDo} />
        </>
    );
}

export default ToDoParent;
