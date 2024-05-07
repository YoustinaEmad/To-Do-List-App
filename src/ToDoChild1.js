import React, { useState } from "react";

function ToDoChild1(props) {
    const [newToDo, setNewToDo] = useState('');

    const AddToDo = () => {
            props.onAddToDo(newToDo);
            setNewToDo('');
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-4">To Do App</h1>
            <div className="to-do-list" style={{ border: "2px solid #000", backgroundColor: "#f2f2f2", paddingLeft
            :100,paddingTop: "20px" }}>
                <form className="mb-4">
                    <div className="form-group d-flex align-items-center">
                        <input 
                            type="text" 
                            value={newToDo}
                            onChange={(e) => setNewToDo(e.target.value)} 
                            className="form-control mr-3" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter todo" 
                            style={{ width: "80%" }} 
                        />
                        <button 
                            type="button" 
                            onClick={AddToDo} 
                            className="btn btn-dark"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
            <br/>
            <br/>
        </div>
        
    );
}

export default ToDoChild1;
