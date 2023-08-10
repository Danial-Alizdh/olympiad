var url = API + 'timing_competitions_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if ((typeof data['data'] !== 'undefined') && (data['data'].length > 0)) {
            appendCompetitions(data['data']);
        }
    });

function appendCompetitions(data) {
    let mainContainer = document.getElementById("timing_competitions_page");
    mainContainer.setAttribute("style", "");
    mainContainer.innerHTML = "<section class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-a6774dd elementor-section-boxed elementor-section-height-default elementor-section-height-default\" data-id=\"a6774dd\" data-element_type=\"section\">\n" +
        "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
        "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-02cb327\" data-id=\"02cb327\" data-element_type=\"column\">\n" +
        "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
        "                <div class=\"elementor-element elementor-element-38e0eb3 elementor-widget elementor-widget-cz_title\" data-id=\"38e0eb3\" data-element_type=\"widget\" data-widget_type=\"cz_title.default\">\n" +
        "                    <div class=\"elementor-widget-container\">\n" +
        "                        <div>\n" +
        "                            <div class=\"cz_title clr cz_title_pos_inline tac\">\n" +
        "                                <div class=\"cz_title_content\">\n" +
        "                                    <div class=\"cz_wpe_content\">\n" +
        "                                        <p style=\"text-align: center;\">برنامه دقیق مسابقات چهارمین المپیاد ورزش های همگانی</p>\n" +
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

    mainContainer.innerHTML += "<article\n" +
        "        class=\"cz_default_loop clr cz_post_odd post-5180 post type-post status-publish format-standard has-post-thumbnail hentry category-sixth\">\n" +
        "    <div class=\"clr\">\n" +
        "        <a class=\"cz_post_image\">\n" +
        "            <img\n" +
        "                width=\"360\" height=\"320\"\n" +
        "                src=\"data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20width=&#39;360&#39;%20height=&#39;320&#39;%20viewBox%3D&#39;0%200%20360%20320&#39;%2F%3E\"\n" +
        "                data-czlz\n" +
        "                data-src=\"../wp-content/uploads/2023/06/games.jpg\"\n" +
        "                class=\"attachment-codevz_360_320 size-codevz_360_320 wp-post-image\" alt=\"\"\n" +
        "                decoding=\"async\"/>\n" +
        "            <i class=\"cz_post_icon fa czico-107-web-link\" aria-hidden=\"true\"></i>\n" +
        "        </a>\n" +
        "    </div>\n" +
        "</article>";

    // for (let i = 0; i < data.length; i++) {
    //     let div_tag = "";
    //     if (data[i].coming) {
    //         div_tag = "<div class=\"cz_acc_child_content clr\">\n" +
    //             "                                        <h3>\n" +
    //             "                                            <span style=\"font-size: 20px;\">به زودی ...</span>\n" +
    //             "                                        </h3>\n" +
    //             "                                    </div>";
    //     }
    //     else {
    //         if (data[i].pdf_titles.length > 0) {
    //             let link = "";
    //             for (let j = 0; j < data[i].pdf_titles.length; j++) {
    //                 link += "<p><a href=\"" + data[i].pdf_link[j] + "\">" + data[i].pdf_titles[j] + "</a></p>\n";
    //             }
    //             if (data[i].attention !== "") {
    //                 link += "                                        <p>\n" +
    //                     "                                            <span style=\"color: #ff0000;\">\n" +
    //                     "                                                <strong>" + data[i].attention + "</strong>\n" +
    //                     "                                            </span>\n" +
    //                     "                                        </p>\n";
    //             }
    //             if (data[i].description !== "") {
    //                 link += "                                        <p>" + data[i].description + "</p>\n";
    //             }
    //
    //             div_tag = "<div class=\"cz_acc_child_content clr\">\n" +
    //                             link +
    //                         "                                    </div>";
    //         }
    //         else if (data[i].bullets_titles.length > 0) {
    //             let bullet = "";
    //             for (let j = 0; j < data[i].bullets_titles.length; j++) {
    //                 let ul = "";
    //                 for (let z = 0; z < data[i].bullets[j].length; z++) {
    //                     ul += "<li>" + data[i].bullets[j][z] + "</li>\n";
    //                 }
    //                 bullet += "<h4>" + data[i].bullets_titles[j] + "</h4>\n" +
    //                     "                                        <ul>\n" +
    //                                                                     ul +
    //                     "                                        </ul>";
    //             }
    //             div_tag = "<div class=\"cz_acc_child_content clr\">\n" +
    //                                 bullet +
    //                 "                                    </div>";
    //         }
    //     }
    //
    //     let section = "<section class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-7120e4b elementor-section-boxed elementor-section-height-default elementor-section-height-default\" data-id=\"7120e4b\" data-element_type=\"section\">\n" +
    //         "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
    //         "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-16f380f\" data-id=\"16f380f\" data-element_type=\"column\">\n" +
    //         "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
    //         "                <div class=\"elementor-element elementor-element-d10af96 elementor-widget elementor-widget-cz_accordion\" data-id=\"d10af96\" data-element_type=\"widget\" data-widget_type=\"cz_accordion.default\">\n" +
    //         "                    <div class=\"elementor-widget-container\">\n" +
    //         "                        <div data-arrows='{\"open\":\"fa czico-187-up-arrow-1\",\"close\":\"fa czico-194-download\"}' class=\"cz_acc clr cz_acc_toggle\">\n" +
    //         "                            <div>\n" +
    //         "                                <div class=\"elementor-repeater-item-" + data[i].id + "\">\n" +
    //         "                                    <span class=\"cz_acc_child\">\n" +
    //         "                                        <i class=\"cz-acc-i cz-acc-icon fas " + icons[data[i].name] + "\"></i>\n" +
    //         "                                        <div>" + data[i].game_name + "</div>\n" +
    //         "                                    </span>\n" +
    //                                                 div_tag +
    //         "                                    \n" +
    //         "                                </div>\n" +
    //         "                            </div>\n" +
    //         "                        </div>\n" +
    //         "                    </div>\n" +
    //         "                </div>\n" +
    //         "            </div>\n" +
    //         "        </div>\n" +
    //         "    </div>\n" +
    //         "</section>";
    //
    //     mainContainer.innerHTML += section;
    // }
}