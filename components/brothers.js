const execPositions = ['Alpha', 'Beta', 'Pi', 'Iota', 'Sigma', 'Tau', 'Chi'];
const year = new Date().getFullYear();

function onReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

onReady(async () => {
  try {
    const response = await fetch(`/data/brothers_${year}.json`, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const { actives: roster = [] } = await response.json();

    const execList = document.getElementById('exec-list');
    const otherList = document.getElementById('other-list');
    if (!execList || !otherList) {
      console.error('Missing target lists (#exec-list or #other-list).');
      return;
    }

    const byPosition = {};
    for (const person of roster) {
      for (const pos of (person.positions || [])) {
        (byPosition[pos] ||= []).push(person);
      }
    }

    for (const position of Object.keys(byPosition)) {
      for (const person of byPosition[position]) {
        const fullName = `${person.name ?? ''} ${person.lastname ?? ''}`.trim();
        const hasImg = person.hasImg === true || person.hasImg === 'true';
        const imgSrc = hasImg
          ? `/img/Officer_images/${(person.lastname || '').toLowerCase()}.jpg`
          : `/img/Officer_images/placeholder.png`;

        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${fullName || 'Officer'} photo`;
        li.appendChild(img);

        const h3 = document.createElement('h3');
        h3.className = 'heading';
        h3.textContent = position;
        li.appendChild(h3);

        const pName = document.createElement('p');
        pName.textContent = fullName;
        li.appendChild(pName);

        const pMajor = document.createElement('p');
        pMajor.textContent = person.major || '';
        li.appendChild(pMajor);

        if (execPositions.includes(position)) {
          execList.appendChild(li);
        } else {
          // Don’t nest <li> inside <li>.
          otherList.appendChild(li);
        }
      }
    }
  } catch (e) {
    console.error('Failed to load roster:', e);
  }
});