import { useState } from "react";
import "./todos.css";

export default function TodosForm({ onFormSubmitted }) {
  
  const [title, setTitle] = useState('');

  function submitForm(e) {
    e.preventDefault();
    onFormSubmitted({ title });
    setTitle('');
  }

  return (
    <div className="todos-form">
      <h4 className="todos-form__title">Add new todo here</h4>
      <form onSubmit={ submitForm }>
        <div className="todos-form__content">
          <input 
            type="text" 
            className="todos-form__input" 
            placeholder="Enter the title of the todo" 
            value={ title }
            onInput={ (e) => setTitle(e.target.value) }
          />
          <button className="todos-form__submit">add</button>
        </div>
      </form>
    </div>
  );
}
