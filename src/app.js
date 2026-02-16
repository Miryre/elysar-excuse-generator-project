import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
let people = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let actions = ['ate', 'peed', 'crushed', 'broke'];
let tasks = ['my homework', 'my phone', 'the car'];
let events = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


let randomPerson = people[Math.floor(Math.random() * people.length)];
let randomAction = actions[Math.floor(Math.random() * actions.length)];
let randomTask = tasks[Math.floor(Math.random() * tasks.length)];
let randomEvent = events[Math.floor(Math.random() * events.length)];

let excuse = randomPerson + " " + randomAction + " " + randomTask + " " + randomEvent;

document.querySelector(".alert").innerHTML = excuse;






  console.log("Hello Rigo from the console!");
};
