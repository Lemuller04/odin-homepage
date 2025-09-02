import cvApplicationImage from './images/cv-application.webp';
import battleshipImg from './images/battleship.webp';
import todoListImg from './images/todo-list.webp';
import weaterAppImg from './images/weather-app.webp';
import restaurantPageImg from './images/restaurant-page.webp';
import ticTacToeImg from './images/tic-tac-toe.webp';
import libraryImg from './images/library.webp';
import adminDashboardImg from './images/admin-dashboard.webp';
import signUpFormImg from './images/sign-up-form.webp';
import rockPaperScissorsImg from './images/rock-paper-scissors.webp';
import calculatorImg from './images/calculator.webp';
import etchASketchImg from './images/etch-a-sketch.webp';
import landingPageImg from './images/landing-page.webp';

const projects = {
  cvApplication: {
    name: 'CV Application',
    description: 'A simple CV/résumé generator built with React.',
    image: cvApplicationImage,
    repository: 'https://github.com/Lemuller04/odin-cv-application',
    liveview: 'https://cheery-bavarois-f65673.netlify.app/',
  },
  battleship: {
    name: 'Battleship Game',
    description: 'An implementation of the classic battleship game using JavaScript.',
    image: battleshipImg,
    repository: 'https://github.com/Lemuller04/odin-battleship',
    liveview: 'https://lemuller04.github.io/odin-battleship/',
  },
  todoList: {
    name: 'Todo List',
    description: 'A simple todo list app with lots of options for creating custom todos.',
    image: todoListImg,
    repository: 'https://github.com/Lemuller04/odin-todo-list',
    liveview: 'https://lemuller04.github.io/odin-todo-list/',
  },
  weatherApp: {
    name: 'Weather App',
    description: 'A simple app that displays weather info and allows for location search.',
    image: weaterAppImg,
    repository: 'https://github.com/Lemuller04/odin-weather-app',
    liveview: 'https://lemuller04.github.io/odin-weather-app/',
  },
  ticTacToe: {
    name: 'Tic Tac Toe game',
    description: 'An implementation of the classic Tic Tac Toe game using JavaScript.',
    image: ticTacToeImg,
    repository: 'https://github.com/Lemuller04/odin-tic-tac-toe',
    liveview: 'https://lemuller04.github.io/odin-tic-tac-toe/',
  },
  restaurantPage: {
    name: 'Restaurant Page',
    description: 'A restaurant page fully rendered using Javscript and DOM manipulation.',
    image: restaurantPageImg,
    repository: 'https://github.com/Lemuller04/odin-restaurant-page',
    liveview: 'https://lemuller04.github.io/odin-restaurant-page/',
  },
  library: {
    name: 'Library',
    description: 'A minimalist virtual bookshelf.',
    image: libraryImg,
    repository: 'https://github.com/Lemuller04/odin-library',
    liveview: 'https://lemuller04.github.io/odin-library/',
  },
  adminDashboard: {
    name: 'Admin Dashboard',
    description: 'A simple admin dashboard to practice css layouts.',
    image: adminDashboardImg,
    repository: 'https://github.com/Lemuller04/odin-admin-dashboard',
    liveview: 'https://lemuller04.github.io/odin-admin-dashboard/',
  },
  signUpForm: {
    name: 'Sign Up Form',
    description: 'A sign up form with simple html validation.',
    image: signUpFormImg,
    repository: 'https://github.com/Lemuller04/odin-sign-up-form',
    liveview: 'https://lemuller04.github.io/odin-sign-up-form/',
  },
  rockPaperScissors: {
    name: 'Rock Paper Scissors Game',
    description: 'An implementation of the classic Rock Paper Scissors game using JavaScript',
    image: rockPaperScissorsImg,
    repository: 'https://github.com/Lemuller04/odin-rock-paper-scissors',
    liveview: 'https://lemuller04.github.io/odin-rock-paper-scissors/',
  },
  calculator: {
    name: 'Calculator',
    description: 'A calculator made with Javascript capable of doing the four basic operations.',
    image: calculatorImg,
    repository: 'https://github.com/Lemuller04/odin-calculator',
    liveview: 'https://lemuller04.github.io/odin-calculator/',
  },
  etchASketch: {
    name: 'Etch a Sketch',
    description: 'A grid in which you can set custom sizes and draw with random colors.',
    image: etchASketchImg,
    repository: 'https://github.com/Lemuller04/odin-etch-a-sketch',
    liveview: 'https://lemuller04.github.io/odin-etch-a-sketch/',
  },
  landingPage: {
    name: 'Landing Page',
    description: 'A simple landing page for flexbox layout practicing.',
    image: landingPageImg,
    repository: 'https://github.com/Lemuller04/odin-landing-page',
    liveview: 'https://lemuller04.github.io/odin-landing-page/',
  },
  // Projects with no live view
  knightsTravails: {
    name: 'Knights Travails',
    description: 'A algorithm to find the shortest path on a 8x8 board.',
    repository: 'https://github.com/Lemuller04/odin-knights-travails',
  },
  binarySearchTree: {
    name: 'Balanced Binary Search Tree',
    description: 'A Balanced BST implementation using JavaScript.',
    repository: 'https://github.com/Lemuller04/odin-binary-search-trees',
  },
  hashmap: {
    name: 'Hashmap',
    description: 'A hashmap implementation using javascript.',
    repository: 'https://github.com/Lemuller04/odin-hashmap',
  },
  linkedList: {
    name: 'Linked List',
    description: 'A Linked List implementation using JavaScript.',
    repository: 'https://github.com/Lemuller04/odin-linked-list',
  },
};

export default projects;
