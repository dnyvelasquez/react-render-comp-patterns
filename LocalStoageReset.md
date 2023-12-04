localStorage.removeItem('TODOS_V1');
const defaultTodos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'Hacer la cama', completed: false},
    {text: 'Aprender a cantar', completed: false},
    {text: 'Tomar vino', completed: true},
    {text: 'Tomar vino otra vez', completed: false},
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
