const teams = [
  {
    id: 1,
    name: "Duque de Caxias",
    points: 0,
    image: "../src/img/duque.jpg"
  },
  {
    id: 2,
    name: "Ricardo Coração de Leão",
    points: 0,
    image: "../src/img/richard-the-lionheart-8730.jpg"
  },
  {
    id: 3,
    name: "Belisarius",
    points: 0,
    image: "../src/img/Belisarius_mosaic.jpg"
  },
  {
    id: 4,
    name: "Raposo Tavares",
    points: 0,
    image: "../src/img/raposo-tavares.jpg"
  }
];

const rankingList = document.getElementById("rankingList");

function renderRanking() {
  rankingList.innerHTML = '';
  const sorted = [...teams].sort((a, b) => b.points - a.points);

  sorted.forEach((team, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="team-info">
        <img src="${team.image}" alt="${team.name}">
        <span class="team-name">${index + 1}º - ${team.name}</span>
      </div>
      <input type="number" value="${team.points}" data-id="${team.id}" />
    `;

    const input = li.querySelector("input");
    let tempValue = team.points;

    input.addEventListener("input", e => {
      tempValue = parseInt(e.target.value) || 0;
    });

    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        team.points = tempValue;
        renderRanking();
      }
    });

    input.addEventListener("blur", () => {
      if (team.points !== tempValue) {
        team.points = tempValue;
        renderRanking();
      }
    });

    rankingList.appendChild(li);
  });
}

renderRanking();
``
