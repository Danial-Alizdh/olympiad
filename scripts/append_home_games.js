var url = API + 'games_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data['data'].length > 0) {
            appendHomeGames(data['data']);
        }
    });
function appendHomeGames(data) {
    let mainContainer = document.getElementById("home_games");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        data[i] = data[i]['attributes'];
        const li_tag = document.createElement("li");
        const a_tag = document.createElement("a");
        const div_tag = document.createElement("div");
        const i_tag = document.createElement("i");
        const div2_tag = document.createElement("div");
        const span_tag = document.createElement("span");

        li_tag.setAttribute("class", "elementor-repeater-item-9aa4d5c clr");
        a_tag.setAttribute("href", "./games/");
        div_tag.setAttribute("class", "cz_sl_icon");
        i_tag.setAttribute("class", "mr10 " + icons[data[i].name]);
        span_tag.innerHTML = data[i].name;

        div_tag.appendChild(i_tag);
        a_tag.appendChild(div_tag);
        div2_tag.appendChild(span_tag);
        a_tag.appendChild(div2_tag);
        li_tag.appendChild(a_tag);

        mainContainer.appendChild(li_tag);
    }
}