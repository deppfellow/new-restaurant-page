import './style.css';
import menuCreation from './menu/menu';
import navigation from './nav/nav';

// Navigation
const navbar = document.getElementById('navbar');
navbar.appendChild(navigation);

// Content
const main = document.getElementById('content');
main.appendChild(menuCreation);

console.log('All set!');
