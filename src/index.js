import profilePicture from './images/hornet.png';

import './styles.css';

const Index = (() => {
  const projects = {
    battleship: {
      name: 'Battleship Game',
      description: 'An implementation of the classic battleship game using javascript.',
      repository: 'https://github.com/Lemuller04/odin-battleship',
      liveview: 'https://lemuller04.github.io/odin-battleship/',
    },
    todoList: {
      name: 'Todo List',
      description: 'A simple todo list app with lots of options for creating custom todos.',
    },
    weatherApp: {
      name: 'Weather App',
      description: 'A simple app that display weather info and allows for location search.',
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
  });

  function loadProjects() {
    const keys = Object.keys(projects);
    const container = document.querySelector('.projects');

    for (const key of keys) {
      const card = document.createElement('div');
      card.classList.add('card');

      const name = document.createElement('h3');
      name.textContent = projects[key].name;
      const links = document.createElement('span');

      if ('repository' in projects[key]) {
        const a = document.createElement('a');
        a.href = projects[key].repository;
        a.innerHTML = `
            <img alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="30" height="30" />
          `;

        links.appendChild(a);
      }

      name.appendChild(links);

      const desc = document.createElement('p');
      desc.textContent = projects[key].description;

      card.appendChild(name);
      card.appendChild(desc);

      container.appendChild(card);
    }
  }
})();
