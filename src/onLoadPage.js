export default function onLoadRender(){


    let introText = `Glad to see You. Unfortunately this is not real restaurant page :(. However I'll be pleased if you look around and leave some feedback about page itself. Enjoy!`;

    let creditsText = `This page was build in purpose of practicing Webpack modules, along The Odin Project.`;
    let creditOne = `Background image created by sunorwind on Unsplash`;



    let div = document.createElement('div');

    const body = document.querySelector('body');

        const background = document.createElement('div');
            background.classList.add('background');


        const container = document.createElement('div');
            container.classList.add('container');

                const navbar = document.createElement('div');
                    navbar.classList.add('navbar');

                        const logo = document.createElement('div');
                            logo.classList.add('logo');
                            logo.textContent = 'GOOD SeaFood';
                        
                        const buttons = document.createElement('ul');
                            buttons.classList.add('buttons');
                                const about = document.createElement('li');
                                    about.classList.add('button');
                                    about.setAttribute('id', 'about');
                                    about.textContent = 'About Us';
                                const menu = document.createElement('li');
                                    menu.classList.add('button');
                                    menu.setAttribute('id', 'menu');
                                    menu.textContent = 'Menu';
                                const contact = document.createElement('li');
                                    contact.classList.add('button');
                                    contact.setAttribute('id', 'contact');
                                    contact.textContent = 'Contact';
                        buttons.appendChild(about);
                        buttons.appendChild(menu);
                        buttons.appendChild(contact);
                navbar.appendChild(logo);
                navbar.appendChild(buttons);


                const main = document.createElement('div');
                    main.classList.add('main');
                        const content = document.createElement('div');
                            content.classList.add('content');
                                const greetings = document.createElement('h1');
                                    greetings.classList.add('greetings');
                                    greetings.textContent = 'Welcome !';
                                      const intro = document.createElement('p');
                                        intro.classList.add('intro');
                                        intro.textContent = introText;
                                      const credits = document.createElement('p');
                                        credits.classList.add('credits');
                                        credits.textContent = creditsText;
                                        const creditLine = document.createElement('p');
                                            creditLine.classList.add('credits');
                                            creditLine.textContent = creditOne;

                            content.appendChild(greetings);    
                            content.appendChild(intro);
                            content.appendChild(credits); 
                            content.appendChild(creditLine); 
                main.appendChild(content);

                const footer = document.createElement('div');
                    footer.classList.add('footer');
                    footer.textContent = 'Copyright Adrian Holubecki 2022';
        container.appendChild(navbar);
        container.appendChild(main);
        container.appendChild(footer);
    body.appendChild(background);
    body.appendChild(container);            
}