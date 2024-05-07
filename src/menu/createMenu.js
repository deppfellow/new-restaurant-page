export default (menu) => {
	// Creating the image of each menu
	const menuImage = new Image();
	menuImage.src = menu.itemSource;
	menuImage.alt = menu.itemName;

	const menuWrapper = document.createElement('div');
	menuWrapper.classList.add('menu-wrapper');
	menuWrapper.appendChild(menuImage);

	// Creating the description of each menu
	const menuDescription = document.createElement('div');
	menuDescription.classList.add('menu-description');
	menuDescription.innerHTML = `
        <p class="menu-name">Menu name:</p>
        <p class="menu-name">${menu.itemName}</p>
        <P class="menu-price">Menu price: ${menu.itemPrice}</P>
    `;

	// Creating the action button of each menu
	const menuAction = document.createElement('div');
	menuAction.innerHTML = `
        <button>Buy</button>
        <button>Wishlist</button>
    `;

	const menuItem = document.createElement('div');
	menuItem.classList.add('menu-item');
	menuItem.append(menuWrapper, menuDescription, menuAction);

	return menuItem;
};
