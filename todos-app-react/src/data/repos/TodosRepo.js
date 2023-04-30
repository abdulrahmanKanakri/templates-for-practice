import { handleErrors } from "../remote/exceptions";

export function TodosRepo() {
  return {
    async getTodos() {
      return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(handleErrors);
    },
    async createTodo(todo) {
      return await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(handleErrors);
    },
    async deleteTodo(id) {
      return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      }).then(handleErrors);
    },
    async toggleCompleted({ id, completed }) {
      return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(handleErrors);
    }
  };
}
