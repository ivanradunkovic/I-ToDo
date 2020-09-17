import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


render() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header />
                    <br />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                        </React.Fragment>
                    )} />

                    <Route path="/about" component={About} />
                </div>
            </div>
        </Router>
    );
}
}

export default App;