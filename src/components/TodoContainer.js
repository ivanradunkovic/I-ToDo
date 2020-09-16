import React from 'react'
import TodosList from "./TodosList";
import InputTodo from "./InputTodo"
import Header from "./Header";

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

    hendleChange = (id) =>
    {
        this.setState({
            todos: this.state.todos.map((todo) =>
            {
                if (todo.id === id)
                {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    addTodoItem = (title) =>
    {
        const newTodo = {
            id: this.id(),
            title: title,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    };

    delTodo = (id) =>
    {
        this.setState({
            todos: [
                ...this.state.todos.filter((todo) =>
                {
                    return todo.id !== id;
                }),
            ],
        });
    };

    render()
    {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo}
                />
            </div>
        );
    }
}
export default TodoContainer;