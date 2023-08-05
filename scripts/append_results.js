// var url = 'http://127.0.0.1:8000/results_items/'
var url = 'https://olympiad-server.onrender.com/results_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        appendResults(data);
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

    let div_tag = "";
    for (let i = 0; i < data.length; i++) {
        div_tag += "<section class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-d322779 elementor-section-boxed elementor-section-height-default elementor-section-height-default\" data-id=\"d322779\" data-element_type=\"section\">\n" +
            "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9c95992\" data-id=\"9c95992\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-c289af1 elementor-widget elementor-widget-cz_accordion\" data-id=\"c289af1\" data-element_type=\"widget\" data-widget_type=\"cz_accordion.default\">\n" +
            "                    <div class=\"elementor-widget-container\">\n" +
            "                        <div data-arrows='{\"open\":\"fa czico-187-up-arrow-1\",\"close\":\"fa czico-194-download\"}' class=\"cz_acc clr cz_acc_toggle\">\n" +
            "                            <div>\n" +
            "                                <div class=\"elementor-repeater-item-" + data[i].id + "\">\n" +
            "                                    <span class=\"cz_acc_child\">\n" +
            "                                        <i class=\"cz-acc-i cz-acc-icon fas " + data[i].game_icon + "\"></i>\n" +
            "                                        <div>\n" +
                                                        data[i].game_name +
            "                                        </div>\n" +
            "                                    </span>\n" +
            "                                    <div class=\"cz_acc_child_content clr\">\n" +
                                                    generateTable(data[i]) +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</section>\n";
    }

    mainContainer.innerHTML += div_tag;
}

function generateTable(data) {
    let table_tag = "";

    for (let i = 0; i < data.table_titles.length; i++) {
        let title_tag = "";
        if (data.table_titles[i] !== "") {
            title_tag = "<p><strong>" + data.table_titles[i]  + " :" + "</strong></p>";
        }

        let tr_tag = "";
        for (let j = 0; j < data.rows[i].length; j++) {
            let td_tag = "";
            for (let z = 0; z < data.rows[i][j].length; z++) {
                td_tag += "<td>" + data.rows[i][j][z] + "</td>\n";
            }
            tr_tag += "<tr>\n" +
                            td_tag +
                "    </tr>";
        }

        table_tag += title_tag +
            "<table>\n" +
            "    <tbody>\n" +
                    tr_tag +
            "    </tbody>\n" +
            "</table>";
    }
    return table_tag;
}