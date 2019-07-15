const students = [{
    name: 'Neville Longbottom',
    scores: [90, 95, 100, 95, 100]
  },
  {
    name: 'Hermione Granger',
    scores: [100, 100, 100, 100, 100]
  },
  {
    name: 'Ron Weasley',
    scores: [70, 60, 45, 80, 75]
  },
  {
    name: 'Harry Potter',
    scores: [80, 75, 70, 85, 90]
  },
  {
    name: 'Draco Malfoy',
    scores: [90, 85, 70, 85, 90]
  },
  {
    name: 'Padma Patil',
    scores: [95, 100, 100, 95, 100]
  },
  {
    name: 'Terry Boot',
    scores: [95, 90, 100, 95, 100]
  },
  {
    name: 'Ernie Macmillan',
    scores: [90, 85, 100, 85, 90]
  },
  {
    name: 'Lavender Brown',
    scores: [80, 75, 70, 85, 90]
  },
  {
    name: 'Zacharias Smith',
    scores: [80, 75, 70, 85, 90]
  },
  {
    name: 'Gregory Goyle',
    scores: [0, 45, 30, 35, 20]
  },
  ];
  
  function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
      total += scores[i];
    }
    const avg = total / scores.length;
    return avg;
  }
  
  function createList(students) {
    const superstarList = students
      .filter(student => calculateAverage(student.scores) >= 90)
      .map(student => student.name);
    return superstarList.sort();
  }
  
  function generateHtml(students) {
    const list = createList(students);
    const content = list.map(student => {
      return `<li class"student-name">${student}</li>`;
    }).join(' ');
    return content;
  }
  
  document.querySelector('.student-list').innerHTML = generateHtml(students);