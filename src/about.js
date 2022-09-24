export default function about(){

    let storyText = `In 1946 our grandpa Jeremy emigrate from Poland to Iceland. He didn't have anything but the dream about creating the best sea food restaurant that have ever existed. Not waiting too long,
    he was traveling around Iceland looking for the best chefs on the island. After many days, he gathered the best team of profesional chefs and created most famous restaurant on the planet.
    Now, when you're here. You can taste this tremendous meals!`

    const container = document.querySelector('.content');
        const story = document.createElement('p');
            story.classList.add('story');
            story.textContent = storyText;
    container.appendChild(story);
}