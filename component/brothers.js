const execPositions = ['Alpha', 'Beta', 'Pi', 'Iota', 'Sigma', 'Tau', 'Chi'];

let year = new Date().getFullYear();

async function load() {
  try {
    const response = await fetch(`../data/brothers_${year}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const roster = data.actives;

    const execList = document.getElementById('exec-list');
    const otherList = document.getElementById('other-list');

    const positionMap = {};

    roster.forEach((person) => {
      person.positions.forEach((position) => {
        if (!positionMap[position]) positionMap[position] = [];
        positionMap[position].push(person);
      });
    });

    Object.keys(positionMap).forEach((position) => {
      positionMap[position].forEach((person) => {
        const li = document.createElement('li');
        const fullName = `${person.name} ${person.lastname}`;
        li.innerHTML = `
      ${
        person.hasImg === 'true'
          ? `<img src='../img/Officer_images/${person.lastname.toLowerCase()}.jpg'/>`
          : `<img src='../img/Officer_images/placeholder.png'/>`
      }
      <h3 class="heading">${position}</h3>
      <p>${fullName}</p>
      <p>${person.major}</p>
    `;

        if (execPositions.includes(position)) {
          execList.appendChild(li);
        } else {
          const pLi = document.createElement('li');
          pLi.appendChild(li);
          otherList.appendChild(pLi);
        }
      });
    });
  } catch (e) {
    console.error('Failed to load roster:', e);
  }
}

load();
