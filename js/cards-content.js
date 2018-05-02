var names = [
  'Ade',
  'Amandeep',
  'Carmen',
  'Charlie',
  'Leisi',
  'Makara',
  'Joon',
  'Shun',
  'Soo-jin',
  'Stevie',
  'Tasyha'
];

function makePersona(options) {
  options.img = 'img/' + options.id + '.png';
  return options;
}

var personas = [
  makePersona({
    id: 'adult',
    description: 'is a young professional'
  }),
  makePersona({
    id: 'adult-alt',
    description: 'has been homeless for 3 years'
  }),
  makePersona({
    id: 'assisted-tech',
    description: 'uses a wheelchair'
  }),
  makePersona({
    id: 'blind',
    description: 'is blind'
  }),
  makePersona({
    id: 'college',
    description: 'is an international college student'
  }),
  makePersona({
    id: 'kid',
    description: 'has high functioning autism'
  }),
  makePersona({
    id: 'parent',
    description: 'is a single parent'
  }),
  makePersona({
    id: 'parent-alt',
    description: 'has two young kids'
  }),
  makePersona({
    id: 'non-verbal',
    description: 'is an engineer from Syria'
  }),
  makePersona({
    id: 'senior',
    description: 'is a monolingual senior'
  }),
    makePersona({
    id: 'teen-alt',
    description: 'is a student at Britannia Secondary'
  }),
  makePersona({
    id: 'teen',
    description: 'is an international high school student'
  })
];

var userContext = [
  'at home',
  'at the library',
  'at the grocery store',
  'on a bus',
  'in a car',
  'at the city center'
];

var colors = [
  '#F8BBCF',
  '#C5C9E6',
  '#B6E3EB',
  '#DCECC8',
  '#B5E4FA',
  '#FBCBBD'
]

function newMessage() {
  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  var persona = getRandomItem(personas);
  var message = getRandomItem(names) + ' ';
  message += persona.description; // Run getRandomItem twice
  message += ' ' + 'and is' + ' ';
  message += getRandomItem(userContext) + '.';
  return {
    html: message,
    persona: persona
  };
}

document.body.onload = addElement;

function addElement() {
  // create a new div element
  // and give it some content
  var message = newMessage();
  var listItem = document.createElement('li');
  listItem.className = 'stack__item';
  // listItem.setAttribute('aria-hidden', true);
  var imageSrc = message.persona.img;
  var heading = document.createElement('p');
  heading.className = 'stack__item-text';
  heading.innerHTML = message.html; // add the message to the newly created div.

  listItem.appendChild(heading);
  listItem.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  listItem.style.backgroundImage = 'url("' + imageSrc + '")';

  // add the newly created element and its content into the DOM
  var list = document.getElementById('stack_yuda');
  // document.body.insertBefore(listItem, list);
  list.appendChild(listItem);
}

// Create 100 cards
var times = 100;
for(var i=0; i < times; i++) {
  addElement();
}