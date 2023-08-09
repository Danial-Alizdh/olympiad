var url = API + 'dormitories_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data['data'].length > 0) {
            appendDormitories(data['data']);
        }
    });

function appendDormitories(data) {
    let mainContainer = document.getElementById("dormitories_page");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        data[i] = data[i]['attributes'];
        var section = "<section\n" +
            "        class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-44e7da60 elementor-section-boxed elementor-section-height-default elementor-section-height-default\"\n" +
            "        data-id=\"44e7da60\" data-element_type=\"section\">\n" +
            "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5ce16524 elementor-hidden-desktop elementor-hidden-tablet\"\n" +
            "             data-id=\"5ce16524\" data-element_type=\"column\"\n" +
            "             data-settings=\"{&quot;background_background&quot;:&quot;classic&quot;}\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-6a804597 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-cz_title\"\n" +
            "                     data-id=\"6a804597\" data-element_type=\"widget\"\n" +
            "                     data-widget_type=\"cz_title.default\">\n" +
            "                    <div class=\"elementor-widget-container\">\n" +
            "                        <div>\n" +
            "                            <div class=\"cz_title clr cz_title_pos_inline tac\">\n" +
            "                                <div class=\"cz_title_content\">\n" +
            "                                    <div class=\"cz_wpe_content\">\n" +
            "                                        <p style=\"text-align: center;\">" +
                                                        data[i].name+
            "                                        </p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-9794908\"\n" +
            "             data-id=\"9794908\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-60791776 elementor-widget elementor-widget-image\"\n" +
            "                     data-id=\"60791776\" data-element_type=\"widget\"\n" +
            "                     data-widget_type=\"image.default\">\n" +
            "                    <link rel=\"stylesheet\" href=\"../wp-content/uploads/elementor/css/dg_item.css\">\n" +
            "                    <div class=\"elementor-widget-container elementor-widget-image\">\n" +
            "                        <img decoding=\"async\"\n" +
            "                             src=\"data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20width=&#39;_w_&#39;%20height=&#39;_h_&#39;%20viewBox%3D&#39;0%200%20_w_%20_h_&#39;%2F%3E\"\n" +
            "                             data-czlz\n" +
            "                             data-src=" + data[i].image + "\n" +
            "                             title=\"shahid-fakhrizadeh-1-scaled-2048&#215;2048\"\n" +
            "                             alt=\"shahid-fakhrizadeh-1-scaled-2048x2048\"\n" +
            "                             loading=\"lazy\"/>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-63039256\"\n" +
            "             data-id=\"63039256\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-18030703 elementor-widget elementor-widget-cz_title\"\n" +
            "                     data-id=\"18030703\" data-element_type=\"widget\"\n" +
            "                     data-widget_type=\"cz_title.default\">\n" +
            "                    <div class=\"elementor-widget-container\">\n" +
            "                        <div>\n" +
            "                            <div class=\"cz_title clr cz_title_pos_inline\">\n" +
            "                                <div class=\"cz_title_content\">\n" +
            "                                    <div class=\"cz_wpe_content\">\n" +
            "                                        <p style=\"text-align: justify;\">\n" +
                                                        data[i].description +
            "                                        </p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3a8315f elementor-hidden-desktop elementor-hidden-tablet\"\n" +
            "             data-id=\"3a8315f\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <section class=\"has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-439e33bd elementor-section-boxed elementor-section-height-default elementor-section-height-default\"\n" +
            "                        data-id=\"439e33bd\" data-element_type=\"section\">\n" +
            "                    <div class=\"elementor-container elementor-column-gap-default\">\n" +
            "                        <div class=\"has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3d7ba48b\"\n" +
            "                             data-id=\"3d7ba48b\" data-element_type=\"column\">\n" +
            "                            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                                <div class=\"elementor-element elementor-element-4a288208 elementor-widget elementor-widget-cz_button\"\n" +
            "                                     data-id=\"4a288208\" data-element_type=\"widget\"\n" +
            "                                     data-widget_type=\"cz_button.default\">\n" +
            "                                    <div class=\"elementor-widget-container\">\n" +
            "                                        <div class=\"cz_btn_block\">\n" +
            "                                            <div>\n" +
            "                                                <a href=" + data[i].direction_link + "\n" +
            "                                                   target=\"_blank\"\n" +
            "                                                   class=\"cz_btn cz_btn_txt_no_fx cz_btn_no_fx\">\n" +
            "                                                    <span>\n" +
            "                                                        <i class=\"fas fa-location-arrow\"></i>\n" +
            "                                                        <strong>مسیر یابی</strong>\n" +
            "                                                    </span>\n" +
            "                                                    <b class=\"cz_btn_onhover\">\n" +
            "                                                        <i class=\"fas fa-location-arrow\"></i>\n" +
            "                                                        <strong>مسیر یابی </strong>\n" +
            "                                                    </b>\n" +
            "                                                </a>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </section>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</section>"

        var separator =  "<section\n" +
            "        class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-ec1809c elementor-section-boxed elementor-section-height-default elementor-section-height-default\"\n" +
            "        data-id=\"ec1809c\" data-element_type=\"section\">\n" +
            "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-19be5939\"\n" +
            "             data-id=\"19be5939\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-23edaa5e elementor-widget elementor-widget-cz_free_line\"\n" +
            "                     data-id=\"23edaa5e\" data-element_type=\"widget\"\n" +
            "                     data-widget_type=\"cz_free_line.default\">\n" +
            "                    <div class=\"elementor-widget-container\">\n" +
            "                        <div class=\"relative\">\n" +
            "                            <div class=\"cz_line tac\"></div>\n" +
            "                        </div>\n" +
            "                        <div class=\"clr\"></div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</section>"

        mainContainer.innerHTML += section
        mainContainer.innerHTML += separator
    }
}