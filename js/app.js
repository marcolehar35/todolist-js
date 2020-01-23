/**
 * Todolist
 */
const app = {
  init: function () {
    // Target du DOM
    app.todo = document.getElementById('todo');
    // Génération du Form
    app.createForm();
    // Génération du Counter
    app.createCounter();
    // Génération de la List
    app.createList();
  },
  createForm: function () {
    console.log('app : createForm');
    // ajout d'un <form>
    const form = document.createElement('form');
    form.id = 'todo-form';

    // ajout d'un input text et l'ajouter au form
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo-input';
    input.autocomplete = 'off';
    input.name = 'inputValue';
    input.placeholder = 'Ajouter une tâche';

    // ajout du form dans le dom
    form.appendChild(input);
    app.todo.appendChild(form);
  },
  createCounter: function () {
    console.log('app : createCounter');
  },
  createList: function () {
    console.log('app : createList');
  },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
