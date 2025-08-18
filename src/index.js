import projects from './projects.js';
import openInNew from './icons/open-in-new.svg';
import './styles.css';

const Index = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
  });

  function loadProjects() {
    const keys = Object.keys(projects);
    const container = document.querySelector('.projects');

    for (const key of keys) {
      const card = document.createElement('article');
      card.classList.add('card');

      if ('image' in projects[key]) {
        loadImage(card, key);
      }

      const name = document.createElement('h3');
      name.textContent = projects[key].name;
      const links = document.createElement('span');

      if ('repository' in projects[key]) {
        loadRepoLink(links, key);
      }

      if ('liveview' in projects[key]) {
        loadLiveDemoLInk(links, key);
      }

      name.appendChild(links);

      const desc = document.createElement('p');
      desc.textContent = projects[key].description;

      card.appendChild(name);
      card.appendChild(desc);

      container.appendChild(card);
    }

    function loadImage(card, key) {
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = projects[key].image;
      img.alt = `${projects[key].name} screenshot`;
      img.classList.add('print-screen');
      card.appendChild(img);
    }

    function loadRepoLink(links, key) {
      const a = document.createElement('a');
      const icon = document.createElement('img');
      icon.src =
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
      icon.width = '30';
      icon.height = '30';
      a.appendChild(icon);
      a.href = projects[key].repository;
      a.setAttribute('aria-label', `View ${projects[key].name} on GitHub`);

      links.appendChild(a);
    }

    function loadLiveDemoLInk(links, key) {
      const a = document.createElement('a');
      const icon = document.createElement('img');
      icon.src = openInNew;
      icon.width = '30';
      icon.height = '30';
      a.appendChild(icon);
      a.href = projects[key].liveview;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', `Open ${projects[key].name} live demo`);

      links.appendChild(a);
    }
  }
})();
