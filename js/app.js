/**
 * Todolist
 */
var app = {
  init: function () {
    // Génération du Form
    app.createForm();
    // Génération du Counter
    app.createCounter();
    // Génération de la List
    app.createList();
  },
  createForm: function () {
    console.log('app : createForm');
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
