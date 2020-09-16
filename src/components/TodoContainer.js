import React from 'react'

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
                {this.state.todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </div>
        );
    }
}

export default TodoContainer