var url=API+"championship_items/";function appendChampionship(e){let i=document.getElementById("championship_page");i.innerHTML="";for(var a=0;a<e.length;a++){e[a]=e[a].attributes;let t="",n=e[a].images;for(let e=0;e<n.length;e++)t+='<div class="cz_grid_item ">\n    <div>\n        <a class="cz_grid_link "\n           href="'+n[e].image+'"\n           data-xtra-lightbox>\n            <img width="512"\n                 height="512"\n                 src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20width=&#39;512&#39;%20height=&#39;512&#39;%20viewBox%3D&#39;0%200%20512%20512&#39;%2F%3E"\n                 data-czlz\n                 data-src="'+n[e].image+'"\n                 class="attachment-codevz_600_600 size-codevz_600_600 wp-image-1606"\n                 alt=""\n                 decoding="async"\n                 data-srcset="'+n[e].image+' 512w"\n                 data-sizes="(max-width: 512px) 100vw, 512px"/>\n            <div class="cz_grid_details"></div>\n        </a>\n    </div>\n</div>\n';i.innerHTML+='<section\n        class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-67b29aa elementor-section-boxed elementor-section-height-default elementor-section-height-default"\n        data-id="67b29aa" data-element_type="section">\n    <div class="elementor-container elementor-column-gap-wide">\n        <div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7c3ca69"\n             data-id="7c3ca69" data-element_type="column">\n            <div class="elementor-widget-wrap elementor-element-populated">\n                <div class="elementor-element elementor-element-c4c8dc2 elementor-widget elementor-widget-cz_title"\n                     data-id="c4c8dc2" data-element_type="widget"\n                     data-widget_type="cz_title.default">\n                    <div class="elementor-widget-container">\n\n                        <div>\n                            <div class="cz_title clr cz_smart_fs cz_title_pos_inline tac">\n                                <div class="cz_title_content">\n                                    <div class="cz_wpe_content">\n                                        <p style="text-align: center;">\n                                            <span style="color: #000000;font-size: 20px;">'+e[a].title+'</span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="elementor-element elementor-element-b2b242c elementor-widget elementor-widget-cz_gallery"\n                     data-id="b2b242c" data-element_type="widget"\n                     data-widget_type="cz_gallery.default">\n                    <div class="elementor-widget-container">\n                        <div class="slick arrows_mlr no_dots is_center"\n                             data-slick=\'{"selector":"","slidesToShow":5,"slidesToScroll":1,"rows":1,"fade":false,"vertical":false,"verticalSwiping":false,"infinite":true,"speed":1000,"swipeToSlide":true,"centerMode":true,"centerPadding":{"unit":"px","size":10,"sizes":[]},"variableWidth":false,"autoplay":true,"autoplaySpeed":1000,"dots":true,"counts":false,"adaptiveHeight":false,"responsive":[{"breakpoint":769,"settings":{"slidesToShow":1,"slidesToScroll":2,"touchMove":true}},{"breakpoint":481,"settings":{"slidesToShow":1,"slidesToScroll":1,"touchMove":true}}]}\'\n                             data-slick-prev="fa fa-chevron-left"\n                             data-slick-next="fa fa-chevron-right">\n                            <div class="cz_grid_p">\n                                <div class="cz_grid cz_grid_1 clr cz_grid_carousel cz_grid_1_no_hover cz_grid_overlay_5px cz_grid_disable_links">\n                                    <div class="cz_grid_item cz_grid_first"></div>\n'+t+"                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"}}fetch(url).then(e=>e.json()).then(e=>{void 0!==e.data&&0<e.data.length&&appendChampionship(e.data)});