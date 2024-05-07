import menuData from './menuData';
import createMenu from './createMenu';

const menuContent = document.createElement('div');
menuContent.classList.add('menu-content');

for (const item of menuData) {
	// console.log(`Name: ${item.itemName}, price: ${item.itemPrice}`);

	const menuItem = createMenu(item);
	menuContent.append(menuItem);
	// console.log(menuItem);
}

export default menuContent;
