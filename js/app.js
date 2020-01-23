/**
 * Todolist
 */
const app = {
  todo: null, // cible dans le DOM
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
  addTask: function (evt) {
    evt.preventDefault();
    console.log('submit');
    // Ajouter une tache dans la liste des taches
    const formInput = document.querySelector('#todo-input');
    const value = formInput.value;

    // Alternative : Recup de la valeur du champ
    // const value = evt.target.elements.inputValue.value;

    // Génération d'une nouvelle tache
    app.generateTask({
      label: value,
      done: false,
    });

    // Nettoyage de la valeur du champ
    formInput.value = '';
  },
  createForm: function () {
    console.log('app : createForm');
    // ajout d'un <form>
    const form = document.createElement('form');
    form.id = 'todo-form';

    form.addEventListener('submit', app.addTask);

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
    // ajout d'un div
    const counter = document.createElement('div');
    counter.id = 'todo-counter';

    // Préparer le contenu
    counter.textContent = '2 tâche(s) en cours';

    // ajout du compteur au DOM
    app.todo.appendChild(counter);
  },
  createList: function () {
    console.log('app : createList');
    // Création de la liste
    const list = document.createElement('ul');
    list.id = 'tasks-list';
    // je stocke dans tout app mon élément list (accessible de partout)
    app.list = list;

    // Création des tâches
    app.generateTask({
      label: 'Coder une todolist en JS',
      done: false,
    });
    app.generateTask({
      label: 'Coder un site en PHP',
      done: true,
    });
    app.generateTask({
      label: 'Faire des crepes',
      done: true,
    });

    // ajout au DOM
    app.todo.appendChild(list);
  },
  // gère la création d'un li (tache)
  generateTask: function (data) {
    // ajout d'un li + enrichissements
    const task = document.createElement('li');
    task.className = 'task';

    if (data.done) {
      task.classList.add('task-label--done');
    }

    // ajout d'un checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = data.done;

    // ajout d'un label => span
    const label = document.createElement('span');
    label.className = 'task-label';
    label.textContent = data.label;

    // ajouter checkbox et span au li
    task.appendChild(checkbox);
    task.appendChild(label);

    // ajouter le li à la liste de taches
    app.list.appendChild(task);
  },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
