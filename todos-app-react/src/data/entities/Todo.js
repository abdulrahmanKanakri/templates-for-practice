export function Todo({ title }) {
  return {
    id: Math.random() * 100,
    title,
    completed: false,
  };
}
