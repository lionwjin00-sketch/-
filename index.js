const WhatTodo = document.querySelector("#WhatTodo");
const addbutton = document.querySelector("#addbutton");
const todoList = document.querySelector("#todoList");

alert("fddddddfdas");
console.log("asdf");
let todos = [
    {
        id: 1,
        text: "JavaScript 공부",
        completed: false
    },
    {
        id: 2,
        text: "운동하기",
        completed: true
    }
];

function showTodos() {
    for (let i = 0; i < todos.length; i++) {
       const li = document.createElement("li");
    li.textContent = todos[i].text;
    todoList.appendChild(li);
    }
}
showTodos();
