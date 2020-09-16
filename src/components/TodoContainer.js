import React from 'react'
import TodosList from "./TodosList";

class TodoContainer extends React.Component
{

    state = {
        todos: [
            {
                id: 1,
                title: "Create todo app",
                completed: true
            },
            {
                id: 2,
                title: "Commit to Github",
                completed: false
            },
            {
                id: 3,
                title: "Fix bugs",
                completed: false
            }
        ]
    };

    render()
    {
        return (
            <div>
                <TodosList todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoContainer