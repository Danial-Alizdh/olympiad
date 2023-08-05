var url = 'http://127.0.0.1:8000/timing_competitions_items/'
fetch(url)
    .then(response => response.json())
    .then(data => {
        appendCompetitions(data);
    });

function appendCompetitions(data) {
    let mainContainer = document.getElementById("timing_competitions_page");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var section = ""

        var separator =  ""

        mainContainer.innerHTML += section
        mainContainer.innerHTML += separator
    }
}