import React, { useState } from "react";

function ToDoChild2(props) {
    const [editableIndex, setEditableIndex] = useState(null);
    const [editedToDo, setEditedToDo] = useState('');

    const DeleteToDo = (index) => {
        props.onDeleteToDo(index);
    };

    const EditToDo = (index, toDo) => {
        setEditableIndex(index);
        setEditedToDo(toDo);
    };

    const SaveToDo = (index) => {
        props.onSaveToDo(index, editedToDo);
        setEditableIndex(null);
        setEditedToDo('');
    };

    const InputChange = (event) => {
        setEditedToDo(event.target.value);
    };

    return (
        <div className="container">
            <ul className="list-group">
                {props.toDos.map((toDo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {editableIndex === index ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editedToDo} 
                                    onChange={InputChange}
                                    className="form-control mr-3" 
                                    style={{ width: "70%" }} 
                                />
                                <button className="btn btn-outline-success mx-2" onClick={() => SaveToDo(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{toDo}</span>
                                <div>
                                    <button className="btn btn-outline-primary mx-2" onClick={() => EditToDo(index, toDo)}>Edit</button>
                                    <button className="btn btn-outline-danger" onClick={() => DeleteToDo(index)}>Delete</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoChild2;
