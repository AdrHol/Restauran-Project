import './style.css';
import onLoad from './onLoadPage';
import about from './about';
import menu from './menu';
import contact from './contact';

const contentObj = {
    currentContent: null,

    about: function(){
        if(this.currentContent !== 'about'){
            const container = document.querySelector('.content');
            container.innerHTML = '';
            about();
            contentObj.currentContent = 'about';
        }  
    },

    contact: function(){
        if(this.currentContent !== 'contact'){
            const container = document.querySelector('.content');
            container.innerHTML = '';
            contact();
            contentObj.currentContent = 'contact';
        }
    },
    menu: function(){
        if(this.currentContent !== 'menu'){
            const container = document.querySelector('.content');
            container.innerHTML = '';
            menu();
            contentObj.currentContent = 'menu';
        }
    },


};

const page = (function(){
    onLoad();
    contentObj.currentContent = 'onLoad';

    const aboutButton = document.querySelector('#about');
        aboutButton.addEventListener('click', contentObj.about);
    const contactButton = document.querySelector('#contact');
        contactButton.addEventListener('click', contentObj.contact);
    const menuButton = document.querySelector('#menu');
        menuButton.addEventListener('click', contentObj.menu); 
}())


