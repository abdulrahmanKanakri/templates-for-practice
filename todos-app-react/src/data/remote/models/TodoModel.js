export function TodoModel({ title, completed }) {
  return {
    title,
    completed: completed || false,
  };
}
