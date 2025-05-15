const teams = [
  {
    id: 1,
    name: "",
    points: 0,
    image: "src/img/"
  },
  {
    id: 2,
    name: "",
    points: 0,
    image: "src/img/"
  },
  {
    id: 3,
    name: "",
    points: 0,
    image: "src/img/"
  },
  {
    id: 4,
    name: "",
    points: 0,
    image: "src/img/"
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
