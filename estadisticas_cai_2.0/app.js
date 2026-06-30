const players = {
  bochini: { name: "Ricardo Bochini", position: "Mediocampista", matches: 714, goals: 108, titles: 13, average: "0,15", era: "1972—1991", bio: "Ricardo Enrique Bochini, conocido como “El Bocha”, es el máximo ídolo en la historia de Independiente. Surgido de las inferiores del club, jugó toda su carrera profesional con la camiseta roja entre 1972 y 1991. Se destacó por su técnica, visión de juego y pases decisivos, y conquistó 13 títulos con el club." },
  erico: { name: "Arsenio Erico", position: "Delantero", matches: 325, goals: 295, titles: 4, average: "0,91", era: "1934—1946", bio: "Arsenio Erico fue un delantero paraguayo y una de las grandes leyendas de Independiente. Conocido como “El Saltarín Rojo”, se convirtió en el máximo goleador histórico del fútbol argentino, con 295 goles. Su capacidad goleadora fue fundamental para los campeonatos obtenidos por Independiente en las décadas de 1930 y 1940." },
  sa: { name: "Francisco Sá", position: "Defensor", matches: 236, goals: 6, titles: 9, average: "0,03", era: "1971—1978", bio: "Francisco “Pancho” Sá fue un defensor polifuncional y una figura clave de la época más exitosa de Independiente. Con el Rojo ganó cuatro Copas Libertadores consecutivas, entre 1972 y 1975, además de conquistar la Copa Intercontinental de 1973. Es el futbolista que más veces ganó la Copa Libertadores, con seis títulos en total." },
  delamata: { name: "Vicente de la Mata", position: "Delantero", matches: 362, goals: 151, titles: 8, average: "0,42", era: "1937—1950", bio: "Vicente de la Mata, apodado “Capote”, fue uno de los grandes delanteros de la historia de Independiente. Integró una delantera legendaria junto a Arsenio Erico y Antonio Sastre, y se destacó por su gambeta, habilidad y capacidad goleadora. Con el club marcó 151 goles y fue campeón de los torneos de 1938, 1939 y 1948." },
  seoane: { name: "Manuel Seoane", position: "Delantero", matches: 278, goals: 240, titles: 3, average: "0,86", era: "1921—1933", bio: "Manuel Seoane fue una de las máximas figuras de Independiente durante la era amateur. Delantero de gran poder goleador, se convirtió en el máximo anotador de ese período para el club y dejó una huella decisiva en sus primeros años de grandeza. También fue una figura importante de la Selección Argentina." },
  santoro: { name: "Miguel A. Santoro", position: "Arquero", matches: 343, goals: 0, cleanSheets: 124, titles: 10, average: "-", era: "1962—1974", bio: "Miguel Ángel “Pepé” Santoro es el arquero más ganador de la historia de Independiente. Defendió el arco del club en 343 partidos y fue protagonista de una etapa llena de títulos nacionales e internacionales. Ganó cuatro Copas Libertadores y la Copa Intercontinental de 1973, consolidándose como una leyenda del Rojo." },
  bertoni: { name: "Daniel Bertoni", position: "Delantero", matches: 179, goals: 80, titles: 5, average: "0,45", era: "1973—1977" },
  pastoriza: { name: "José Omar Pastoriza", position: "Mediocampista", matches: 184, goals: 40, titles: 6, average: "0,22", era: "1966—1972" }
};

const searchData = [
  { label: "Inicio", type: "Sección", target: "#inicio", keywords: "home portada principal" },
  { label: "Jugadores", type: "Sección", target: "jugadores/", keywords: "perfiles historicos idolos" },
  { label: "Partidos", type: "Sección", target: "partidos/", keywords: "finales resultados torneos historicos" },
  { label: "Estadísticas", type: "Sección", target: "estadisticas/", keywords: "datos tablas records posiciones goleadores" },
  { label: "Historia", type: "Sección", target: "historia/", keywords: "linea de tiempo titulos copas" },
  { label: "Plantel actual", type: "Sección", target: "plantel-actual/", keywords: "formacion equipo fichas jugadores 2026" },
  { label: "Consultá una estadística", type: "Formulario", target: "#consulta", keywords: "contacto consulta formulario mensaje" },
  { label: "Nuestra casa", type: "Estadio", target: "#nuestra-casa", keywords: "estadio libertadores de america ricardo enrique bochini avellaneda cancha" },

  { label: "Ricardo Bochini", type: "Jugador histórico", target: "jugadores/#bochini", keywords: "bocha maximo idolo presencias" },
  { label: "Arsenio Erico", type: "Jugador histórico", target: "jugadores/#erico", keywords: "goleador historico saltarin rojo" },
  { label: "Francisco Sá", type: "Jugador histórico", target: "jugadores/#sa", keywords: "pancho sa defensor libertadores" },
  { label: "Vicente de la Mata", type: "Jugador histórico", target: "jugadores/#delamata", keywords: "capote delantero" },
  { label: "Manuel Seoane", type: "Jugador histórico", target: "jugadores/#seoane", keywords: "goleador era amateur" },
  { label: "Miguel A. Santoro", type: "Jugador histórico", target: "jugadores/#santoro", keywords: "pepe arquero vallas" },
  { label: "Daniel Bertoni", type: "Jugador histórico", target: "jugadores/#comparador", keywords: "delantero comparador" },
  { label: "José Omar Pastoriza", type: "Jugador histórico", target: "jugadores/#comparador", keywords: "pato mediocampista comparador" },
  { label: "Ranking de presencias", type: "Jugadores", target: "jugadores/#ranking-presencias", keywords: "mas partidos bochini santoro delamata erico" },
  { label: "Comparador de jugadores", type: "Jugadores", target: "jugadores/#comparador", keywords: "comparar estadisticas partidos goles titulos" },

  { label: "Partidos históricos", type: "Partidos", target: "partidos/#historicos", keywords: "finales inolvidables" },
  { label: "Final Libertadores 1972", type: "Partido", target: "partidos/#historicos", keywords: "universitario copa libertadores 1972" },
  { label: "Intercontinental 1973", type: "Partido", target: "partidos/#historicos", keywords: "juventus copa intercontinental 1973" },
  { label: "Libertadores 1984", type: "Partido", target: "partidos/#historicos", keywords: "liverpool intercontinental 1984 copa libertadores" },
  { label: "Intercontinental 1984", type: "Partido", target: "partidos/#historicos", keywords: "liverpool copa intercontinental 1984" },
  { label: "Sudamericana 2010", type: "Partido", target: "partidos/#historicos", keywords: "goias copa sudamericana 2010" },
  { label: "Sudamericana 2017", type: "Partido", target: "partidos/#historicos", keywords: "flamengo maracana copa sudamericana 2017" },

  { label: "Tabla anual", type: "Estadísticas", target: "estadisticas/#posiciones", keywords: "liga profesional argentina posiciones" },
  { label: "Tabla histórica", type: "Estadísticas", target: "estadisticas/#tabla-historica", keywords: "ranking historico puntos campeonatos" },
  { label: "Goleadores históricos", type: "Estadísticas", target: "estadisticas/#goleadores", keywords: "erico seoane delamata bochini goles" },
  { label: "Récords del club", type: "Estadísticas", target: "estadisticas/#records", keywords: "mayor goleada platense mas libertadores presencias" },
  { label: "Mayor goleada", type: "Récord", target: "estadisticas/#records", keywords: "independiente 11 1 platense" },
  { label: "Más Libertadores", type: "Récord", target: "estadisticas/#records", keywords: "7 conquistas copas libertadores" },

  { label: "Línea de tiempo", type: "Historia", target: "historia/#linea-tiempo", keywords: "historia fechas etapas" },
  { label: "Copas y títulos", type: "Historia", target: "historia/#titulos", keywords: "titulos palmares trofeos copas" },
  { label: "Nace Independiente", type: "Historia", target: "historia/#linea-tiempo", keywords: "1905 fundacion club" },
  { label: "Primer campeonato profesional", type: "Historia", target: "historia/#linea-tiempo", keywords: "1938 torneo" },
  { label: "Primera Libertadores", type: "Historia", target: "historia/#linea-tiempo", keywords: "1964 copa libertadores" },
  { label: "Campeón del mundo", type: "Historia", target: "historia/#linea-tiempo", keywords: "1973 intercontinental" },
  { label: "Sudamericana en el Maracaná", type: "Historia", target: "historia/#linea-tiempo", keywords: "2017 flamengo maracana" },
  { label: "Copa Sudamericana", type: "Título", target: "historia/#titulos", keywords: "titulos internacionales" },
  { label: "Copa Libertadores", type: "Título", target: "historia/#titulos", keywords: "7 libertadores rey de copas" },
  { label: "Supercopa Sudamericana", type: "Título", target: "historia/#titulos", keywords: "titulos internacionales" },
  { label: "Copa Suruga Bank", type: "Título", target: "historia/#titulos", keywords: "titulos internacionales" },
  { label: "Copa Intercontinental", type: "Título", target: "historia/#titulos", keywords: "campeon del mundo" },
  { label: "Recopa Sudamericana", type: "Título", target: "historia/#titulos", keywords: "titulos internacionales" },
  { label: "Campeón de Argentina", type: "Título", target: "historia/#titulos", keywords: "torneos nacionales" },

  { label: "Formación del equipo", type: "Plantel actual", target: "plantel-actual/#formacion", keywords: "equipo inicial once titular" },
  { label: "Plantel Profesional 2026", type: "Plantel actual", target: "plantel-actual/#fichas", keywords: "fichas jugadores actuales" },
  { label: "Arqueros", type: "Plantel actual", target: "plantel-actual/#fichas", keywords: "rey lavagnino blazquez morro" },
  { label: "Defensores", type: "Plantel actual", target: "plantel-actual/#fichas", keywords: "arias closter godoy zabala bordon valdez lomonaco de irastorza" },
  { label: "Mediocampistas", type: "Plantel actual", target: "plantel-actual/#fichas", keywords: "cedres malcorra mancuello cabral marcone perez curci millan parmo" },
  { label: "Delanteros", type: "Plantel actual", target: "plantel-actual/#fichas", keywords: "gutierrez viollaz abaldo pussetto montiel avalos" },
  { label: "Rodrigo Rey", type: "Plantel actual", target: "plantel-actual/#ficha-rey", keywords: "arquero" },
  { label: "Lucas Lavagnino", type: "Plantel actual", target: "plantel-actual/#ficha-lavagnino", keywords: "arquero" },
  { label: "Joaquín Blázquez", type: "Plantel actual", target: "plantel-actual/#ficha-blazquez", keywords: "arquero" },
  { label: "Mateo Morro", type: "Plantel actual", target: "plantel-actual/#ficha-morro", keywords: "arquero" },
  { label: "Santiago Arias", type: "Plantel actual", target: "plantel-actual/#ficha-arias", keywords: "defensor" },
  { label: "Fernando Closter", type: "Plantel actual", target: "plantel-actual/#ficha-closter", keywords: "defensor" },
  { label: "Leonardo Godoy", type: "Plantel actual", target: "plantel-actual/#ficha-godoy", keywords: "defensor" },
  { label: "Facundo Zabala", type: "Plantel actual", target: "plantel-actual/#ficha-zabala", keywords: "defensor" },
  { label: "Gonzalo Bordón", type: "Plantel actual", target: "plantel-actual/#ficha-bordon", keywords: "defensor" },
  { label: "Sebastián Valdéz", type: "Plantel actual", target: "plantel-actual/#ficha-valdez", keywords: "defensor" },
  { label: "Kevin Lomónaco", type: "Plantel actual", target: "plantel-actual/#ficha-lomonaco", keywords: "defensor" },
  { label: "Jonathan De Irastorza", type: "Plantel actual", target: "plantel-actual/#ficha-de-irastorza", keywords: "defensor" },
  { label: "Rodrigo F. Cedrés", type: "Plantel actual", target: "plantel-actual/#ficha-cedres", keywords: "volante mediocampista" },
  { label: "Ignacio Malcorra", type: "Plantel actual", target: "plantel-actual/#ficha-malcorra", keywords: "volante mediocampista" },
  { label: "Federico Mancuello", type: "Plantel actual", target: "plantel-actual/#ficha-mancuello", keywords: "volante mediocampista" },
  { label: "Luciano Cabral", type: "Plantel actual", target: "plantel-actual/#ficha-cabral", keywords: "volante mediocampista" },
  { label: "Iván Marcone", type: "Plantel actual", target: "plantel-actual/#ficha-marcone", keywords: "volante mediocampista" },
  { label: "Mateo Pérez Curci", type: "Plantel actual", target: "plantel-actual/#ficha-perez-curci", keywords: "volante mediocampista" },
  { label: "Lautaro Millán", type: "Plantel actual", target: "plantel-actual/#ficha-millan", keywords: "volante mediocampista" },
  { label: "Tomás Parmo", type: "Plantel actual", target: "plantel-actual/#ficha-parmo", keywords: "volante mediocampista" },
  { label: "Maximiliano José Gutiérrez", type: "Plantel actual", target: "plantel-actual/#ficha-gutierrez", keywords: "delantero" },
  { label: "Santino Viollaz", type: "Plantel actual", target: "plantel-actual/#ficha-viollaz", keywords: "delantero" },
  { label: "Matías Abaldo", type: "Plantel actual", target: "plantel-actual/#ficha-abaldo", keywords: "delantero" },
  { label: "Ignacio Pussetto", type: "Plantel actual", target: "plantel-actual/#ficha-pussetto", keywords: "delantero" },
  { label: "Santiago Montiel", type: "Plantel actual", target: "plantel-actual/#ficha-montiel", keywords: "delantero" },
  { label: "Gabriel Ávalos", type: "Plantel actual", target: "plantel-actual/#ficha-avalos", keywords: "avalos delantero" }
];

document.querySelectorAll('a[href$="#idolos"]').forEach((link) => {
  if (link.textContent.toLowerCase().includes("ídolo")) link.textContent = "Nuestra casa";
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navGroups = document.querySelectorAll(".nav-group");
const navSubmenuToggles = document.querySelectorAll(".nav-submenu-toggle");

function closeNavGroups(except = null) {
  navGroups.forEach((group) => {
    if (group === except) return;
    group.classList.remove("open");
    group.querySelector(".nav-submenu-toggle")?.setAttribute("aria-expanded", "false");
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      closeNavGroups();
    });
  });
}

navSubmenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const group = toggle.closest(".nav-group");
    const willOpen = !group.classList.contains("open");
    closeNavGroups(group);
    group.classList.toggle("open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
});

navGroups.forEach((group) => {
  group.addEventListener("pointerenter", () => {
    if (window.matchMedia("(min-width: 1101px)").matches) closeNavGroups(group);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-group")) closeNavGroups();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavGroups();
});

function goToTarget(target) {
  if (!target) return;
  if (target.startsWith("#")) {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  window.location.href = target;
}

const searchForm = document.querySelector("#smart-search");
const searchInput = document.querySelector("#search-input");
const suggestions = document.querySelector("#search-suggestions");

function normalizeSearch(value) {
  return String(value)
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getSearchText(item) {
  return normalizeSearch(`${item.label} ${item.type} ${item.keywords ?? ""}`);
}

function getSearchResults(value, limit = 6) {
  const term = normalizeSearch(value.trim());
  if (!term) return [];

  return searchData
    .map((item) => {
      const text = getSearchText(item);
      if (!text.includes(term)) return null;
      const label = normalizeSearch(item.label);
      const type = normalizeSearch(item.type);
      const score = label.startsWith(term) ? 0 : label.includes(term) ? 1 : type.includes(term) ? 2 : 3;
      return { ...item, score };
    })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score || a.label.localeCompare(b.label, "es"))
    .slice(0, limit);
}

function showSearchResults(value) {
  if (!suggestions) return;
  const results = getSearchResults(value);
  suggestions.innerHTML = results.map((item) =>
    `<button type="button" data-target="${item.target}" data-label="${item.label}"><strong>${item.label}</strong><span>${item.type}</span></button>`
  ).join("");
  suggestions.classList.toggle("show", results.length > 0);
}

if (searchForm && searchInput && suggestions) {
  searchInput.addEventListener("input", (event) => showSearchResults(event.target.value));
  searchInput.addEventListener("focus", () => showSearchResults(searchInput.value));

  suggestions.addEventListener("click", (event) => {
    const option = event.target.closest("button");
    if (!option) return;
    searchInput.value = option.dataset.label;
    suggestions.classList.remove("show");
    goToTarget(option.dataset.target);
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = getSearchResults(searchInput.value, 1)[0];
    suggestions.classList.remove("show");
    if (result) {
      showToast(`Resultado encontrado: ${result.label}`);
      goToTarget(result.target);
    } else {
      showToast("Probá con Bochini, Libertadores 1984, Nuestra casa o Plantel actual.");
    }
  });
}

document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!searchInput || !searchForm) return;
    searchInput.value = button.dataset.search;
    searchForm.requestSubmit();
  });
});

function comparisonValue(player) {
  return player.cleanSheets ?? player.goals;
}

function renderComparison() {
  const playerOne = document.querySelector("#player-one");
  const playerTwo = document.querySelector("#player-two");
  const result = document.querySelector("#comparison-result");
  if (!playerOne || !playerTwo || !result) return;

  const first = players[playerOne.value];
  const second = players[playerTwo.value];
  const rows = [
    ["Partidos", first.matches, second.matches],
    ["Goles / vallas", comparisonValue(first), comparisonValue(second)],
    ["Títulos", first.titles, second.titles],
    ["Promedio de gol", first.average, second.average]
  ];

  result.innerHTML = `
    <div class="versus-head"><strong>${first.name}</strong><span>VS</span><strong>${second.name}</strong></div>
    ${rows.map(([label, a, b]) => {
      const numberA = Number(String(a).replace(",", "."));
      const numberB = Number(String(b).replace(",", "."));
      const winnerA = Number.isFinite(numberA) && Number.isFinite(numberB) && numberA > numberB;
      const winnerB = Number.isFinite(numberA) && Number.isFinite(numberB) && numberB > numberA;
      return `<div class="compare-row"><strong class="${winnerA ? "winner" : ""}">${a}</strong><span>${label}</span><strong class="${winnerB ? "winner" : ""}">${b}</strong></div>`;
    }).join("")}
  `;
}

document.querySelector("#player-one")?.addEventListener("change", renderComparison);
document.querySelector("#player-two")?.addEventListener("change", renderComparison);
renderComparison();

const dialog = document.querySelector("#info-dialog");
const dialogContent = document.querySelector("#dialog-content");

document.querySelectorAll(".player-profile").forEach((button) => {
  button.addEventListener("click", () => {
    const player = Object.values(players).find((item) => item.name === button.dataset.player);
    if (!player || !dialog || !dialogContent) return;
    const secondMetricLabel = player.cleanSheets ? "Vallas invictas" : "Goles";
    const secondMetricValue = player.cleanSheets ?? player.goals;
    dialogContent.innerHTML = `
      <span class="modal-kicker">${player.era} · ${player.position}</span>
      <h2>${player.name}</h2>
      <p class="player-biography">${player.bio ?? "Perfil histórico resumido con partidos, rendimiento, títulos y etapa principal en Independiente."}</p>
      <dl><div><dt>Partidos</dt><dd>${player.matches}</dd></div><div><dt>${secondMetricLabel}</dt><dd>${secondMetricValue}</dd></div><div><dt>Títulos</dt><dd>${player.titles}</dd></div><div><dt>Promedio</dt><dd>${player.average}</dd></div></dl>
    `;
    dialog.showModal();
  });
});

document.querySelectorAll(".match-detail").forEach((button) => {
  const target = document.querySelector(button.dataset.detail);
  const card = button.closest(".match-card");
  if (!target || !card) return;

  card.insertAdjacentElement("afterend", target);
  target.hidden = true;
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", target.id);

  button.addEventListener("click", () => {
    const willOpen = target.hidden;

    document.querySelectorAll(".match-detail-panel").forEach((panel) => {
      panel.hidden = true;
    });
    document.querySelectorAll(".match-detail").forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
      otherButton.textContent = "Ver detalle →";
    });

    target.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "Ocultar detalle ↑" : "Ver detalle →";

    if (willOpen) {
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
});

document.querySelector(".dialog-close")?.addEventListener("click", () => dialog?.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll(".decade-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".decade-tabs button").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll(".timeline article").forEach((item) => {
      item.hidden = item.dataset.decade !== button.dataset.decade;
    });
  });
});

const titleAccordionButtons = document.querySelectorAll(".title-accordion-trigger");

titleAccordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    if (!panel) return;
    const willOpen = panel.hidden;

    titleAccordionButtons.forEach((otherButton) => {
      const otherPanel = document.querySelector(`#${otherButton.getAttribute("aria-controls")}`);
      otherButton.setAttribute("aria-expanded", "false");
      if (otherPanel) otherPanel.hidden = true;
    });

    button.setAttribute("aria-expanded", String(willOpen));
    panel.hidden = !willOpen;
  });
});

const squadPlayers = {
  Rey: { number: 33, name: "Rodrigo Rey", age: 35, position: "Arquero", nationality: "Argentina", image: "../Imagenes%20CAI/Plantel%20actual/rodrigo-rey.jpg" },
  Arias: { number: 4, name: "Santiago Arias", age: 34, position: "Defensor", nationality: "Colombiana", image: "../Imagenes%20CAI/Plantel%20actual/santiago-arias.jpg" },
  Lomónaco: { number: 26, name: "Kevin Lomónaco", age: 24, position: "Defensor", nationality: "Argentina", image: "../Imagenes%20CAI/Plantel%20actual/kevin-lomonaco.jpg" },
  Valdéz: { number: 36, name: "Sebastián Valdéz", age: 30, position: "Defensor", nationality: "Argentina", image: "../Imagenes%20CAI/Plantel%20actual/sebastian-valdez.jpg" },
  Zabala: { number: 22, name: "Facundo Zabala", age: 27, position: "Defensor", nationality: "Argentina", image: "../Imagenes%20CAI/Plantel%20actual/facundo-zabala.jpg" },
  "Pérez Curci": { number: 16, name: "Mateo Pérez Curci", age: 20, position: "Volante", nationality: "Argentina", image: "../Imagenes%20CAI/Plantel%20actual/mateo-perez-curci.jpg" },
  Marcone: { number: 23, name: "Iván Marcone", age: 36, position: "Volante", nationality: "Argentina", image: "../Imagenes%20CAI/Plantel%20actual/ivan-marcone.jpg" },
  Malcorra: { number: 40, name: "Ignacio Malcorra", age: 38, position: "Volante", nationality: "Argentina", image: "../Imagenes%20CAI/Plantel%20actual/ignacio-malcorra.jpg" },
  Gutiérrez: { number: 28, name: "Maximiliano Gutiérrez", age: 22, position: "Delantero", nationality: "Chilena", image: "../Imagenes%20CAI/Plantel%20actual/maxiliano-gutierrez.jpg" },
  Ávalos: { number: 9, name: "Gabriel Ávalos", age: 34, position: "Delantero", nationality: "Paraguaya", image: "../Imagenes%20CAI/Plantel%20actual/gabriel-avalos.jpg" },
  Abaldo: { number: 19, name: "Matías Abaldo", age: 22, position: "Delantero", nationality: "Uruguaya", image: "../Imagenes%20CAI/Plantel%20actual/matias-abaldo.jpg" }
};

function renderSelectedSquadPlayer(key) {
  const player = squadPlayers[key];
  const selected = document.querySelector("#selected-player");
  if (!player || !selected) return;
  selected.innerHTML = `<div class="selected-player-photo-wrap"><img class="selected-player-photo" src="${player.image}" alt="${player.name}"><span>${player.number}</span></div><div><small>${player.position.toUpperCase()}</small><strong>${player.name}</strong><em>${player.age} años · ${player.nationality}</em></div>`;
}

document.querySelectorAll(".pitch button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".pitch button").forEach((item) => item.classList.toggle("active", item === button));
    renderSelectedSquadPlayer(button.dataset.name);
  });
});

renderSelectedSquadPlayer("Ávalos");

const contactForm = document.querySelector("#stats-contact-form");
const contactSuccess = document.querySelector("#contact-success");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      contactSuccess?.classList.add("d-none");
      showToast("Revisá los campos marcados antes de enviar.");
      return;
    }

    contactForm.classList.remove("was-validated");
    contactForm.reset();
    contactSuccess?.classList.remove("d-none");
    showToast("Consulta enviada correctamente.");
  });

  contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      if (field.checkValidity()) field.classList.remove("is-invalid");
    });
  });
}

const toast = document.querySelector("#toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

const observedSections = [...document.querySelectorAll("main section[id]")];
const navLinks = document.querySelectorAll(".nav-link[href^='#']");
if ("IntersectionObserver" in window && observedSections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-30% 0px -60%", threshold: [0, .25, .6] });
  observedSections.forEach((section) => observer.observe(section));
}
