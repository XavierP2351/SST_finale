//script for showing or not showing certain select statements 

document.addEventListener("DOMContentLoaded", function () {
    const planetSelect = document.getElementById("planet");
    const asterSelect = document.getElementById("aster");
    const asterLabel = document.getElementById("aster_label");
    const moonsLabel = document.getElementById("moons_label");

    const moonSelects = {
        Earth: document.getElementById("earth_moon"),
        Mars: document.getElementById("mars_moon"),
        Jupiter: document.getElementById("jup_moon"),
        Saturn: document.getElementById("sat_moon"),
    };

    function hideAllMoonSelects() {
        Object.values(moonSelects).forEach(select => select.style.display = "none");
    }

    function showRelevantMoonSelect() {
        const selectedPlanet = planetSelect.value;

        hideAllMoonSelects();
        asterSelect.style.display = "none";
        asterLabel.style.display = "none";
        moonsLabel.style.display = "inline";

        if (moonSelects[selectedPlanet]) {
            moonSelects[selectedPlanet].style.display = "inline";
        } else {
            moonsLabel.style.display = "none";
        }
        if (selectedPlanet === "None") {
            asterSelect.style.display = "inline";
            asterLabel.style.display = "inline";
        }
    }

    planetSelect.addEventListener("change", showRelevantMoonSelect);
    showRelevantMoonSelect(); 
});
