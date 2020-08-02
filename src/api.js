export const getTodos = () => fetch("http://localhost:4000/").then(res => res.json())

export const createTodo = (todo) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateTodo = (todo, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const getTodo = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())