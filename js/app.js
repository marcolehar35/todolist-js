/**
 * Todolist
 */

const tasks = [
  {
    label: 'farine',
    done: false,
  },
  {
    label: 'sucre',
    done: true,
  },
  {
    label: 'lait',
    done: false,
  }
];

const app = {
  count: 0, // on part de 0 pour le compteur
  todo: null, // cible dans le DOM
  init: function () {
    // Target du DOM
    app.todo = document.getElementById('todo');
    // Ménage
    app.todo.innerHTML = '';
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

    // Ajout d'une tache aux données et non à l'interface
    tasks.push({
      label: value,
      done: false,
    });

    // Je recharge l'interface
    app.init();

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
  // MAJ du DOM avec la valeur du compteur
  updateCounter: function () {
    const counter = document.getElementById('todo-counter');
    counter.textContent = `${app.count} tâche(s) en cours`;
  },
  createCounter: function () {
    console.log('app : createCounter');
    // ajout d'un div
    const counter = document.createElement('div');
    counter.id = 'todo-counter';

    // Préapration des taches non effectuées
    const tasksUndone = tasks.filter((task) => !task.done);

    // Préparer le contenu
    counter.textContent = `${tasksUndone.length} tâche(s) en cours`;

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
    // J'affiche les taches de l'utilisateur
    tasks.forEach(app.generateTask);

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

    // Je vais écouter le changement sur la checkbox
    checkbox.addEventListener('change', function () {
      data.done = !data.done;
      app.init();
    });

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
