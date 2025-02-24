/* Updated script: conversions script
This has to be like the 12th time its been updated*/
document.addEventListener("DOMContentLoaded", function () {
    const datePick = document.getElementById("date_pick");
    const timeInput = document.getElementById("time1");
    const planetSelect = document.getElementById("planet");
    const submitButton = document.getElementById("submit");
    const resultDiv = document.getElementById("result");

    // Mapping planet names to their corresponding moon select element IDs
    const moonSelectIds = {
        Earth: "earth_moon",
        Mars: "mars_moon",
        Jupiter: "jup_moon",
        Saturn: "sat_moon"
    };

    // Moon time adjustments
    function checkMoon(date) {
        const selectedPlanet = planetSelect.value;
        const moonSelectId = moonSelectIds[selectedPlanet];
        if (!moonSelectId) return null; // If planet has no moons listed, skip

        const moonSelect = document.getElementById(moonSelectId);
        if (!moonSelect) return null;

        const selectedMoon = moonSelect.value;

        var epochTime_years = date.getTime() / 31536000000; //milliseconds since epoch / milliseconds in a year = years since epoch

        const moonAdjustments = {
            Earth: { The_Moon: epochTime_years * 1000 },
            Mars: {
                Deimos: -((30 * 60) + 17) * 60 * 1000, // -30 min 17 sec
                Phobos: ((7 * 60) + 39) * 60 * 1000      // +7 min 39 sec
            },
            Jupiter: {
                Ganymede: -168 * 60 * 60 * 1000, // -168 hours
                Callisto: -408 * 60 * 60 * 1000, // -408 hours
                Io: -1020 * 60 * 60 * 1000      // -1020 hours
            },
            Saturn: {
                Titan: -382 * 60 * 60 * 1000,       // -382 hours
                Hyperion: -(((511 * 60) + 12) * 60 * 1000) // -511 hrs 12 min
            }
        };

        const adjustment = moonAdjustments[selectedPlanet]?.[selectedMoon];
        return adjustment !== undefined ? new Date(date.getTime() + adjustment) : null;
    }

    // Asteroid time adjustments
    function checkAster(date) {
        if (planetSelect.value !== 'None') return null;
        const asteroidSelect = document.getElementById("aster").value;

        // for better calculations test
        var epochTime_hours = date.getTime() / 1600000;   // total milliseconds since epoch / number of milliseconds in a hour = total # of hours since epoch in hours
        var totalBennuTime = (-epochTime_hours / 4.3) + (-epochTime_hours % 4.3); // total time for Bennu date: Days Bennu has since epoch + remaining time in hours. Should be negative number
        var totalCeresTime = (-epochTime_hours / 9) + (-epochTime_hours % 9);
        var totalPallasTime = (-epochTime_hours / 7.8) + (-epochTime_hours % 7.8);
        var totalVestaTime = (-epochTime_hours / 5.34) + (-epochTime_hours % 5.34);

        const asteroidAdjustments = {
            Bennu: totalBennuTime * 60 * 60 * 1000, 
            Ceres: totalCeresTime * 60 * 1000,             
            Pallas: totalPallasTime * 60 * 1000,           
            Vesta: totalVestaTime * 60 * 1000           
        };

        const adjustment = asteroidAdjustments[asteroidSelect];
        return adjustment !== undefined ? new Date(date.getTime() + adjustment) : null;
    }

    // Planetary time adjustments
    function checkPlanet(date) {
        const planetAdjustments = {
            Mercury: -176 * 60 * 60 * 1000,  // -176 hrs
            Venus: -243 * 60 * 60 * 1000,    // -243 hrs all inner planets except Earth are - due to their days being more than 24 hours
            Earth: 0,
            Mars: -1 * 60 * 60 * 1000,       // -1 hr
            Jupiter: 10 * 60 * 60 * 1000,    // +10 hrs. All outer planets are + due to their day being less than 24 hours. Plus, they're farther out
            Saturn: 11 * 60 * 60 * 1000,     // +11 hrs
            Uranus: 17 * 60 * 60 * 1000,     // +17 hrs
            Neptune: 16 * 60 * 60 * 1000     // +16 hrs
        };

        const adjustment = planetAdjustments[planetSelect.value];
        return adjustment !== undefined ? new Date(date.getTime() + adjustment) : null;
    }

    // Main conversion function
    function handleConversion() {
        if (!datePick.value || !timeInput.value) {
            resultDiv.textContent = "Please fill in all fields.";
            return;
        }

        const selectedDate = new Date(`${datePick.value}T${timeInput.value}`);
        let futureDate = selectedDate;

        const moonAdjustment = checkMoon(selectedDate);
        const asterAdjustment = checkAster(selectedDate);
        const planetAdjustment = checkPlanet(selectedDate);

        if (moonAdjustment) {
            futureDate = moonAdjustment;
        } else if (asterAdjustment) {
            futureDate = asterAdjustment;
        } else if (planetAdjustment) {
            futureDate = planetAdjustment;
        } else {
            resultDiv.textContent = "No conversion available for the selected options.";
            return;
        }

        resultDiv.textContent = `Converted Time: ${futureDate.toLocaleString()}`;
    }

    submitButton.addEventListener("click", handleConversion);
});
