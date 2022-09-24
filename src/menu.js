export default function menu(){

    
    
    let menuText = `Check out our best dishes!`

    const container = document.querySelector('.content');
        const text = document.createElement('p');
            text.classList.add('menu-text');
            text.textContent = menuText;
    container.appendChild(text);

    const menuDatabase = [
        {
            name: 'Fried Octopus',
            price: '34$',
            description: 'Deep fried octopuss, served with fresh salads and our special sea sauce.'
        },
        {
            name: 'Orange Shark',
            price: '43$',
            description: 'Baked shark ribs served with orange juice.',
        },
        {
            name: 'Oyster in mustard sauce',
            price: '23$',
            description: 'Oyster with potatos, swimming in great mustard sauce.'
        },
        {
            name: `Grandpa's Jerremy special sushi set`,
            price: '100$',
            description: 'Special ingredients + secret recipe = The best sushi set in the world!'
        }
    ];

    menuDatabase.forEach(element => {
        const menuPosition = document.createElement('div');
        menuPosition.classList.add('dish');
            const dishName = document.createElement('p');
            dishName.classList.add('dish-name');
            dishName.textContent = element.name;
            const dishPrice = document.createElement('p');
            dishPrice.classList.add('dish-price');
            dishPrice.textContent = element.price;
            const dishDescription = document.createElement('p');
            dishDescription.classList.add('dish-description');
            dishDescription.textContent = element.description;
        menuPosition.appendChild(dishName);
        menuPosition.appendChild(dishPrice);
        menuPosition.appendChild(dishDescription);
        container.appendChild(menuPosition);
    })

}
