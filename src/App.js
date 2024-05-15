import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
      <ApolloProvider client={client}>
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm/>
        <TodoList />
    </div>
      </ApolloProvider>
  );
}

export default App;
