const execPositions = ["Alpha", "Beta", "Pi", "Iota", "Sigma", "Tau", "Chi"];
const year = new Date().getFullYear();

function onReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
}

export function initBrothers() {
  onReady(async () => {
    const execList = document.getElementById("exec-list");
    const otherList = document.getElementById("other-list");
    if (!execList || !otherList) return;

    try {
      const res = await fetch(`/data/brothers_${year}.json`, {
        cache: "no-cache",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { actives: roster = [] } = await res.json();

      const byPosition = {};
      for (const p of roster) {
        for (const pos of p.positions || []) (byPosition[pos] ||= []).push(p);
      }

      const makeCard = (person, position) => {
        const fullName = `${person.name ?? ""} ${person.lastname ?? ""}`.trim();
        const hasImg = person.hasImg === true || person.hasImg === "true";
        const imgSrc = hasImg
          ? `/img/Officer_images/${(person.lastname || "").toLowerCase()}.jpg`
          : `/img/Officer_images/placeholder.png`;

        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${fullName || "Officer"} photo`;
        img.onerror = () => {
          img.src = "/img/Officer_images/placeholder.png";
        };
        li.appendChild(img);

        const h3 = document.createElement("h3");
        h3.className = "heading";
        h3.textContent = position;
        li.appendChild(h3);

        const pName = document.createElement("p");
        pName.textContent = fullName;
        li.appendChild(pName);

        const pMajor = document.createElement("p");
        pMajor.textContent = person.major || "";
        li.appendChild(pMajor);

        return li;
      };

      const fragExec = document.createDocumentFragment();
      const fragOther = document.createDocumentFragment();

      for (const [position, people] of Object.entries(byPosition)) {
        for (const person of people) {
          (execPositions.includes(position) ? fragExec : fragOther).appendChild(
            makeCard(person, position)
          );
        }
      }
      execList.appendChild(fragExec);
      otherList.appendChild(fragOther);
    } catch (e) {
      console.error("Failed to load roster:", e);
    }
  });
}
