export default function contact(){

    let contactText = `If You have any questions, don't hesitate to contact our team!`



    const container = document.querySelector('.content');

        const story = document.createElement('h1');
            story.classList.add('greetings');
            story.textContent = contactText;
        container.appendChild(story);


    const contactDatabase = [
        {
            name: 'Grandpa Jeremy',
            role: 'CEO - Founder',
            mail: 'BigJeremy@coolmail.com'
        },
        {
            name: 'Grandson Josh',
            role: 'Supply Manager',
            mail: 'JoshTheManager@coolemail.com',
        },
        {
            name: 'Grand daughter Jamie',
            role: 'HR Manager',
            mail: 'JamieHR@coolmail.com',
        }

    ]
    contactDatabase.forEach(person => {
        
        const contact = document.createElement('div');
        contact.classList.add('contact');
            const name = document.createElement('p');
            name.classList.add('name');
            name.textContent = person.name;
            const role = document.createElement('p');
            role.classList.add('role');
            role.textContent = person.role;
            const mail = document.createElement('p');
            mail.classList.add('mail');
            mail.textContent = person.mail;
        contact.appendChild(name);
        contact.appendChild(role);
        contact.appendChild(mail);
        container.appendChild(contact);
    })
   


           
}