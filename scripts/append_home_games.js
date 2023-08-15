// var url = API + 'games_items/';
//
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         if ((typeof data['data'] !== 'undefined') && (data['data'].length > 0)) {
//             appendHomeGames(data['data']);
//         }
//     });

data = {
    "data": [
        {
            "type": "Game",
            "id": "1",
            "attributes": {
                "name": "واترپلو",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/waterpolo.jpg"
            }
        },
        {
            "type": "Game",
            "id": "2",
            "attributes": {
                "name": "اسکیت",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D8%A7%D8%B3%DA%A9%DB%8C%D8%AA.jpg"
            }
        },
        {
            "type": "Game",
            "id": "3",
            "attributes": {
                "name": "شیرجه",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D8%B4%DB%8C%D8%B1%D8%AC%D9%87.jpg"
            }
        },
        {
            "type": "Game",
            "id": "4",
            "attributes": {
                "name": "تنیس روی میز",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D8%AA%D9%86%DB%8C%D8%B3_%D8%B1%D9%88%DB%8C_%D9%85%DB%8C%D8%B2.jpg"
            }
        },
        {
            "type": "Game",
            "id": "5",
            "attributes": {
                "name": "تیراندازی",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D8%AA%DB%8C%D8%B1%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C.jpg"
            }
        },
        {
            "type": "Game",
            "id": "6",
            "attributes": {
                "name": "جودو",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D8%AC%D9%88%D8%AF%D9%88.jpg"
            }
        },
        {
            "type": "Game",
            "id": "7",
            "attributes": {
                "name": "دوومیدانی",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D8%AF%D9%88%D9%88%D9%85%DB%8C%D8%AF%D8%A7%D9%86%DB%8C.jpg"
            }
        },
        {
            "type": "Game",
            "id": "8",
            "attributes": {
                "name": "شنا",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D8%B4%D9%86%D8%A7.jpg"
            }
        },
        {
            "type": "Game",
            "id": "9",
            "attributes": {
                "name": "قایقرانی",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%D9%82%D8%A7%DB%8C%D9%82%D8%B1%D8%A7%D9%86%DB%8C.jpg"
            }
        },
        {
            "type": "Game",
            "id": "10",
            "attributes": {
                "name": "گلف",
                "description": null,
                "image": "http://79.127.120.164:2699/uploads/%DA%AF%D9%84%D9%81.jpg"
            }
        }
    ]
};

appendHomeGames(data['data']);


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