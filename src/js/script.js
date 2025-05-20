const teams = [
  {
    id: 1,
    name: "Duque de Caxias",
    points: 150,
    image: "src/img/duque.jpg"
  },
  {
    id: 2,
    name: "Balduino IV",
    points: 128,
    image: "src/img/Balduino IV.png"
  },
  {
    id: 3,
    name: "Ricardo Coração de Leão",
    points: 111,
    image: "src/img/richard-the-lionheart-8730.jpg"
  },
  {
    id: 4,
    name: "Aldo Chioratto",
    points: 109,
    image: "src/img/Aldo_Chioratto_9_years_old_in_1932.jpg"
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
