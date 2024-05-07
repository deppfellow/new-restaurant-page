import Logo from '../asset/img/rhode-island-logo.png';
import navIcon from './navIcons';

const navbar = document.getElementById('navbar');

// Main logo
const mainWrapper = document.createElement('div');
mainWrapper.classList.add('title');

const mainLogo = new Image();
mainLogo.src = Logo;
mainLogo.alt = 'Rhode Island Logo';
mainLogo.style.width = '5rem';

const mainTitle = document.createElement('span');
mainTitle.textContent = "Terra's Cuisine";

mainWrapper.append(mainLogo, mainTitle);
navbar.appendChild(mainWrapper);

// Navbar component
const navWrapper = document.createElement('ul');
navWrapper.classList.add('nav-wrapper');

for (const item of navIcon) {
	const navItem = document.createElement('li');
	navItem.classList.add('nav-item');
	navItem.innerHTML = `
        <a href="#" class="nav-link">
            <img src="${item.iconSource}" alt="${item.name}"></img>
            <span class="nav-text">${item.name}</span>
        </a>
    `;

	navWrapper.append(navItem);
}

export default navWrapper;
