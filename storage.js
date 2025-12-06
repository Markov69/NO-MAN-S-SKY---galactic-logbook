// storage.js — FINAL

const STORAGE_KEY = "nms_planets_archive_v1";

// Взима планети
function loadPlanets() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (e) {
    console.error("LocalStorage ERROR:", e);
    return [];
  }
}

// Записва масива
function savePlanets(arr) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    return true;
  } catch (e) {
    console.error("SAVE ERROR:", e);
    return false;
  }
}

// Добавя една планета
function addPlanet(entry) {
  const list = loadPlanets();
  list.push(entry);
  return savePlanets(list);
}
