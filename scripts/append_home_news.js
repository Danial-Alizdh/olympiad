var url = API + 'news_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if ((typeof data['data'] !== 'undefined') && (data['data'].length > 0)) {
            appendHomeNews(data['data']);
        }
    });

function appendHomeNews(data) {
    let mainContainer = document.getElementById("home_news");
    mainContainer.innerHTML = "";
    for (var i = data.length-1; i > 0; i--) {
        data[i] = data[i]['attributes'];
        let div_tag = document.createElement("div");
        let div2_tag = document.createElement("div");
        let div3_tag = document.createElement("div");
        let div4_tag = document.createElement("div");
        let a_tag = document.createElement("a");
        let a2_tag = document.createElement("a");
        let a3_tag = document.createElement("a");
        let img_tag = document.createElement("img");
        let i_tag = document.createElement("i");
        let h3_tag = document.createElement("h3");
        let small_tag = document.createElement("small");
        let span_tag = document.createElement("span");

        div_tag.setAttribute("class", "cz_grid_item  cz_posts_list_even post-5180 post type-post status-publish format-standard has-post-thumbnail hentry category-sixth");
        div_tag.setAttribute("style", "position: absolute; right: 0%; top: 0px;");
        div2_tag.setAttribute("class", "clr");
        a_tag.setAttribute("class", "cz_grid_link cz_grid_zoom_in");
        a_tag.setAttribute("href", "./news/");
        a_tag.setAttribute("title", data[i].title);
        img_tag.setAttribute("decoding", "async");
        img_tag.setAttribute("src", "data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20width=&#39;_w_&#39;%20height=&#39;_h_&#39;%20viewBox%3D&#39;0%200%20_w_%20_h_&#39;%2F%3E");
        img_tag.setAttribute("data-src", data[i].image);
        img_tag.setAttribute("title", "");
        img_tag.setAttribute("alt", "");
        img_tag.setAttribute("loading", "lazy");
        div3_tag.setAttribute("class", "cz_grid_details");
        i_tag.setAttribute("class", "fa czico-109-link-symbol-1 cz_grid_icon");
        div3_tag.appendChild(i_tag);
        img_tag.appendChild(div3_tag);
        a_tag.appendChild(img_tag);
        div2_tag.appendChild(a_tag);

        div4_tag.setAttribute("class", "cz_grid_details cz_grid_details_outside");
        a2_tag.setAttribute("class", "cz_grid_title");
        a2_tag.setAttribute("href", "./news/");
        h3_tag.innerHTML = data[i].title;
        a2_tag.appendChild(h3_tag);
        div4_tag.appendChild(a2_tag);

        small_tag.setAttribute("class", "clr");
        span_tag.setAttribute("class", "cz_post_data cz_data_date");
        a3_tag.setAttribute("href", "./news/");
        a3_tag.innerHTML = data[i].date;
        span_tag.appendChild(a3_tag);
        small_tag.appendChild(span_tag);
        div4_tag.appendChild(small_tag);

        div2_tag.appendChild(div4_tag);
        div_tag.appendChild(div2_tag);

        mainContainer.appendChild(div_tag);
    }
}