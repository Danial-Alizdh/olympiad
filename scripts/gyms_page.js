var url = API + 'gyms_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if ((typeof data['data'] !== 'undefined') && (data['data'].length > 0)) {
            appendGyms(data['data']);
        }
    });

function appendGyms(data) {
    let mainContainer = document.getElementById("gyms_page");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        data[i] = data[i]['attributes'];
        var section = "<section\n" +
            "        class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-3c6fb14d elementor-section-boxed elementor-section-height-default elementor-section-height-default\"\n" +
            "        data-id=\"3c6fb14d\" data-element_type=\"section\">\n" +
            "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1fb57a2a elementor-hidden-desktop elementor-hidden-tablet\"\n" +
            "             data-id=\"1fb57a2a\" data-element_type=\"column\"\n" +
            "             data-settings=\"{&quot;background_background&quot;:&quot;classic&quot;}\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-4f66f2d2 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-cz_title\"\n" +
            "                     data-id=\"4f66f2d2\" data-element_type=\"widget\"\n" +
            "                     data-widget_type=\"cz_title.default\">\n" +
            "                    <div class=\"elementor-widget-container\">\n" +
            "                        <div>\n" +
            "                            <div class=\"cz_title clr cz_title_pos_inline tac\">\n" +
            "                                <div class=\"cz_title_content\">\n" +
            "                                    <div class=\"cz_wpe_content\">\n" +
            "                                        <p style=\"text-align: center;\">\n" +
                                                        data[i].name +
            "                                        </p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-131dc8b8\"\n" +
            "             data-id=\"131dc8b8\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-7783556c elementor-widget elementor-widget-image\"\n" +
            "                     data-id=\"7783556c\" data-element_type=\"widget\"\n" +
            "                     data-widget_type=\"image.default\">\n" +
            "                    <link rel=\"stylesheet\" href=\"../wp-content/uploads/elementor/css/dg_item.css\">\n" +
            "                    <div class=\"elementor-widget-container elementor-widget-image\">\n" +
            "                        <img decoding=\"async\"\n" +
            "                             src=\"data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20width=&#39;_w_&#39;%20height=&#39;_h_&#39;%20viewBox%3D&#39;0%200%20_w_%20_h_&#39;%2F%3E\"\n" +
            "                             data-czlz\n" +
            "                             data-src=" + data[i].image + "\n" +
            "                             title=\"IMG_2627-scaled-1\" alt=\"IMG_2627-scaled-1\"\n" +
            "                             loading=\"lazy\"/>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4b380245\"\n" +
            "             data-id=\"4b380245\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-62d854c7 elementor-widget elementor-widget-cz_title\"\n" +
            "                     data-id=\"62d854c7\" data-element_type=\"widget\"\n" +
            "                     data-widget_type=\"cz_title.default\">\n" +
            "                    <div class=\"elementor-widget-container\">\n" +
            "                        <div>\n" +
            "                            <div class=\"cz_title clr cz_title_pos_inline\">\n" +
            "                                <div class=\"cz_title_content\">\n" +
            "                                    <div class=\"cz_wpe_content\">\n" +
            "                                        <p style=\"text-align: justify;\">\n" +
            (data[i].description == null ? data[i].name : data[i].description) +
            "                                        </p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-354edd81 elementor-hidden-desktop elementor-hidden-tablet\"\n" +
            "             data-id=\"354edd81\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <section\n" +
            "                        class=\"has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-4a02a46 elementor-section-boxed elementor-section-height-default elementor-section-height-default\"\n" +
            "                        data-id=\"4a02a46\" data-element_type=\"section\">\n" +
            "                    <div class=\"elementor-container elementor-column-gap-default\">\n" +
            "                        <div class=\"has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1d2174e5\"\n" +
            "                             data-id=\"1d2174e5\" data-element_type=\"column\">\n" +
            "                            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                                <div class=\"elementor-element elementor-element-6044242e elementor-widget elementor-widget-cz_button\"\n" +
            "                                     data-id=\"6044242e\" data-element_type=\"widget\"\n" +
            "                                     data-widget_type=\"cz_button.default\">\n" +
            "                                    <div class=\"elementor-widget-container\">\n" +
            "                                        <div class=\"cz_btn_block\">\n" +
            "                                            <div>\n" +
            "                                                <a href=" + (data[i].direction_link === null ? "#" : data[i].direction_link) + "\n" +
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
            "</section>\n"

        var separator =  "<section\n" +
            "        class=\"has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-77d072cf elementor-section-boxed elementor-section-height-default elementor-section-height-default\"\n" +
            "        data-id=\"77d072cf\" data-element_type=\"section\">\n" +
            "    <div class=\"elementor-container elementor-column-gap-default\">\n" +
            "        <div class=\"has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-56afd1f5\"\n" +
            "             data-id=\"56afd1f5\" data-element_type=\"column\">\n" +
            "            <div class=\"elementor-widget-wrap elementor-element-populated\">\n" +
            "                <div class=\"elementor-element elementor-element-4a801b32 elementor-widget elementor-widget-cz_free_line\"\n" +
            "                     data-id=\"4a801b32\" data-element_type=\"widget\"\n" +
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