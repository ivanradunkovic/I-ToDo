import React from "react";

class TodoItem extends React.Component
{
    render()
    {
        const completedStyle = {
            fontStyle: "bold",
            color: "#228B22"
        };

        const { completed, id, title } = this.props.todo;

        return (
            <li className="todo-item">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}
                ></input>
                <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>{title}</span>
            </li>
        );
    }
}

export default TodoItem;