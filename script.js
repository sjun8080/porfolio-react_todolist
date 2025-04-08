
const { useState, useEffect } = React;

function App() {
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState(""); 
  // "todos" holds the list of todos, starts as an empty array.
  // "input" holds the current text in the input field, starts as an empty string.

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
   //Updating the todos State:
    setTodos([...todos, newTodo]);//The spread operator (...todos) copies the current list of todos into a new array.newTodo is added at the end of this new array
    setInput("");
    //The spread operator (...todos) copies the current list of todos into a new array.newTodo is added at the end of this new array
    //After the new todo is added to the list, you reset the input field back to an empty string 
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //toggleComplete flips the "done/undone" status of a todo
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); 
    //todo => todo.id !== id: Remove the one that matches
  };
  
  return (
    <div style={{ backgroundColor: "orange", minHeight: "100vh", padding: "2rem" }}>
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h1>📝 To-Do List</h1>
    <DateUTC />
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: "1rem 0" }}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "1rem" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

const utcDate = new Date().toUTCString();
console.log(utcDate);

function DateUTC() {
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const now = new Date().toUTCString();
    setUtcTime(now);
  }, []);

  return <p>Current UTC Date: {utcTime}</p>;
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
