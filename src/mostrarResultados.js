export function mostrarResultados(data, map) {
  const {
    ip,
    utc_offset,
    region_code,
    org,
    city,
    postal,
    latitude,
    longitude,
  } = data;

  document.getElementById("ip").innerText = ip;
  document.getElementById(
    "location"
  ).innerText = `${city}, ${region_code} ${postal}`;
  document.getElementById("isp").innerText = org;
  document.getElementById("timezone").innerText = `UTC ${utc_offset.slice(
    0,
    3
  )}:${utc_offset.slice(3)}`;

  //Mapa Mundi
  map.setView([latitude, longitude], 17);
  L.marker([latitude, longitude]).addTo(map);
}
