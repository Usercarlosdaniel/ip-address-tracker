import { mostrarErro } from "./mostarErro";
import { mostrarResultados } from "./mostrarResultados";
import "./style.css";

const API = "https://ipapi.co/json/";
fetch(API)
  .then((res) => res.json())
  .then((data) => mostrarResultados(data, map))
  .catch((erro) => mostrarErro(erro));

document.querySelector("#app").innerHTML = `
    <main class="main">
    <h1>IP Address Tracker</h1>
    <form id="form" autocomplete="off">
    <input type="text" placeholder="Search for any IP address or domain" id="ip-input"/>
    <button type="submit" id="submit-btn" ><img src="./icon-arrow.svg" /></button>
    </form>
    <p id="erro"></p>
    <div id="results" class="results">
      <div><span class="information">IP Address</span>
      <p class="result" id="ip"></p></div>
      <div><span class="information">Location</span>
      <p class="result" id="location"></p></div>
      <div>
        <span class="information">Timezone</span>
        <p class="result" id="timezone"></p>
      </div>
      <div><span class="information">ISP</span>
      <p class="result" id="isp"></p></div>
    </div>
    </main>
    <div id="map"div>

`;

let map = L.map("map");
// Não permite que saia da borda
var bounds = L.latLngBounds(
  L.latLng(-90, -180), // Canto inferior esquerdo
  L.latLng(90, 180) // Canto superior direito
);
map.setMaxBounds(bounds);
map.options.maxBoundsViscosity = 1.0;
L.tileLayer(
  "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=8AFw6UOpvEpz65tUWxWc",
  {
    maxZoom: 20,
    minZoom: 2,
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

// Variaveis abaixo para que sejam renderizadas depois das tags

const ipInput = document.getElementById("ip-input");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(`https://ipapi.co/${ipInput.value}/json`)
    .then((res) => res.json())
    .then((data) => mostrarResultados(data, map))
    .catch((erro) => mostrarErro(erro));

  e.target.reset();
});
