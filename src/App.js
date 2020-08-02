import React from 'react';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="navbar">
      </div>
    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
    </Switch>
    </div>
  );
}

export default App;
