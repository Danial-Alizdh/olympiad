var url = API + 'results_items/';
var url2 = API + 'games_items/';

fetch(url2)
    .then(response => response.json())
    .then(game_data => {
        if ((typeof game_data['data'] !== 'undefined') && (game_data['data'].length > 0)) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if ((typeof data['data'] !== 'undefined') && (data['data'].length > 0)) {
                        const games = game_data.data;
                        const schedules = data.data;
                        const gameSchedulesMap = {};

                        schedules.forEach(schedule => {
                            const gameId = schedule.relationships.game_id.data.id;
                            if (!gameSchedulesMap[gameId]) {
                                gameSchedulesMap[gameId] = [];
                            }
                            gameSchedulesMap[gameId].push(schedule);
                        });

                        const groupedSchedules = Object.values(gameSchedulesMap);

                        groupedSchedules.forEach(schedulesGroup => {
                            schedulesGroup.sort((a, b) => a.attributes.rate.localeCompare(b.attributes.rate));
                        });

                        const result = groupedSchedules.map(schedulesGroup => {
                            const game = games.find(g => g.id === schedulesGroup[0].relationships.game_id.data.id);
                            const gameName = game.attributes.name;

                            const citiesRatesMap = {};

                            schedulesGroup.forEach(schedule => {
                                const city = schedule.attributes.city;
                                citiesRatesMap[city] = schedule.attributes.rate;
                            });

                            const cities = {};

                            Object.keys(citiesRatesMap).forEach(city => {
                                cities[city] = Array.from(citiesRatesMap[city]);
                            });

                            return {
                                gameName,
                                cities,
                                file_title: schedulesGroup[0].attributes.file_title,
                                file_link: schedulesGroup[0].attributes.file_link,
                                attention: schedulesGroup[0].attributes.attention,
                                title: schedulesGroup[0].attributes.title,
                            };
                        });

                        appendResults(result);
                    }
                });
        }
    });
function appendResults(data) {
    const mainContainer = document.getElementById("results_items");
    mainContainer.setAttribute("style", "");
    mainContainer.innerHTML = "<section class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-1c68f0b elementor-section-boxed elementor-section-height-default elementor-section-height-default\" data-id=\"1c68f0b\" data-element_type=\"section\">\n" +
        "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
        "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3cd7d50\" data-id=\"3cd7d50\" data-element_type=\"column\">\n" +
        "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
        "                <div class=\"elementor-element elementor-element-27600c0 elementor-widget elementor-widget-cz_title\" data-id=\"27600c0\" data-element_type=\"widget\" data-widget_type=\"cz_title.default\">\n" +
        "                    <div class=\"elementor-widget-container\">\n" +
        "                        <div>\n" +
        "                            <div class=\"cz_title clr cz_title_pos_inline tac\">\n" +
        "                                <div class=\"cz_title_content\">\n" +
        "                                    <div class=\"cz_wpe_content\">\n" +
        "                                        <p style=\"text-align: center;\">\n" +
        "                                            نتایج زنده مسابقات چهارمین المپیاد استعدادهای برتر ورزشی\n" +
        "                                        </p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</section>";

    for (let i = 0; i < data.length; i++) {
        let div_tag = "";
        if (data[i].file_title !== null) {
            let link = "";
            for (let j = 0; j < data[i].file_title.length; j++) {
                link += "<p><a href=\"" + data[i].file_link[j] + "\">" + data[i].file_title[j] + "</a></p>\n";
            }
            if (data[i].attention !== null) {
                link += "                                        <p>\n" +
                    "                                            <span style=\"color: #ff0000;\">\n" +
                    "                                                <strong>" + data[i].attention + "</strong>\n" +
                    "                                            </span>\n" +
                    "                                        </p>\n";
            }

            div_tag = "<div class=\"cz_acc_child_content clr\">\n" +
                link +
                "                                    </div>";
        }
        else if (Object.entries(data[i].cities).length > 0) {
            cities = Object.entries(data[i].cities)
            let ul = "";
            for (let j = 0; j < cities.length; j++) {
                ul += "<li>" + cities[j][0] + " : " + cities[j][1][0] + "</li>\n";
            }

            let bullet = "";
            if (data[i].title !== null) {
                bullet = "<h4>" + data[i].title + "</h4>\n" +
                    "                                        <ul>\n" +
                    ul +
                    "                                        </ul>";
            } else {
                bullet = "                                        <ul>\n" +
                    ul +
                    "                                        </ul>";
            }

            div_tag = "<div class=\"cz_acc_child_content clr\">\n" +
                bullet +
                "                                    </div>";
        }

        let section = "<section class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-d322779 elementor-section-boxed elementor-section-height-default elementor-section-height-default\" data-id=\"d322779\" data-element_type=\"section\">\n" +
                "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
                "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9c95992\" data-id=\"9c95992\" data-element_type=\"column\">\n" +
                "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
                "                <div class=\"elementor-element elementor-element-c289af1 elementor-widget elementor-widget-cz_accordion\" data-id=\"c289af1\" data-element_type=\"widget\" data-widget_type=\"cz_accordion.default\">\n" +
                "                    <div class=\"elementor-widget-container\">\n" +
                "                        <div data-arrows='{\"open\":\"fa czico-187-up-arrow-1\",\"close\":\"fa czico-194-download\"}' class=\"cz_acc clr cz_acc_toggle\">\n" +
                "                            <div>\n" +
                "                                <div class=\"elementor-repeater-item-" + "a9cd979" + "\">\n" +
                "                                    <span class=\"cz_acc_child\">\n" +
                "                                        <i class=\"cz-acc-i cz-acc-icon fas " + icons[data[i].gameName] + "\"></i>\n" +
                "                                        <div>\n" +
                                                            data[i].gameName +
                "                                        </div>\n" +
                "                                    </span>\n" +
                                                            div_tag +
                // "                                    <div class=\"cz_acc_child_content clr\">\n" +
                //                                         div_tag +
                // "                                    </div>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</section>\n";

        mainContainer.innerHTML += section;
    }

    // let div_tag = "";
    // for (let i = 0; i < data.length; i++) {
    //     div_tag += "<section class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-d322779 elementor-section-boxed elementor-section-height-default elementor-section-height-default\" data-id=\"d322779\" data-element_type=\"section\">\n" +
    //         "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
    //         "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9c95992\" data-id=\"9c95992\" data-element_type=\"column\">\n" +
    //         "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
    //         "                <div class=\"elementor-element elementor-element-c289af1 elementor-widget elementor-widget-cz_accordion\" data-id=\"c289af1\" data-element_type=\"widget\" data-widget_type=\"cz_accordion.default\">\n" +
    //         "                    <div class=\"elementor-widget-container\">\n" +
    //         "                        <div data-arrows='{\"open\":\"fa czico-187-up-arrow-1\",\"close\":\"fa czico-194-download\"}' class=\"cz_acc clr cz_acc_toggle\">\n" +
    //         "                            <div>\n" +
    //         "                                <div class=\"elementor-repeater-item-" + "\">\n" +
    //         "                                    <span class=\"cz_acc_child\">\n" +
    //         "                                        <i class=\"cz-acc-i cz-acc-icon fas " + icons[data[i].name] + "\"></i>\n" +
    //         "                                        <div>\n" +
    //                                                     data[i].name +
    //         "                                        </div>\n" +
    //         "                                    </span>\n" +
    //         "                                    <div class=\"cz_acc_child_content clr\">\n" +
    //                                                 generateTable(data[i]) +
    //         "                                    </div>\n" +
    //         "                                </div>\n" +
    //         "                            </div>\n" +
    //         "                        </div>\n" +
    //         "                    </div>\n" +
    //         "                </div>\n" +
    //         "            </div>\n" +
    //         "        </div>\n" +
    //         "    </div>\n" +
    //         "</section>\n";
    // }

    // mainContainer.innerHTML += div_tag;
}

// function generateTable(data) {
//     let table_tag = "";
//
//     for (let i = 0; i < data.table_titles.length; i++) {
//         data[i] = data[i]['attributes'];
//         let title_tag = "";
//         if (data.table_titles[i] !== null) {
//             title_tag = "<p><strong>" + data.table_titles[i]  + " :" + "</strong></p>";
//         }
//
//         let tr_tag = "";
//         for (let j = 0; j < data.rows[i].length; j++) {
//             let td_tag = "";
//             for (let z = 0; z < data.rows[i][j].length; z++) {
//                 td_tag += "<td>" + data.rows[i][j][z] + "</td>\n";
//             }
//             tr_tag += "<tr>\n" +
//                             td_tag +
//                 "    </tr>";
//         }
//
//         table_tag += title_tag +
//             "<table>\n" +
//             "    <tbody>\n" +
//                     tr_tag +
//             "    </tbody>\n" +
//             "</table>";
//     }
//     return table_tag;
// }