// var url = 'http://127.0.0.1:8000/games_items/'
var url = 'https://olympiad-server.onrender.com/games_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        appendGames(data);
    });
function appendGames(data) {
    let mainContainer = document.getElementById("games_page");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        const article_tag = document.createElement("article");
        const div_tag = document.createElement("div");
        const a_tag = document.createElement("a");
        const img_tag = document.createElement("img");
        const div2_tag = document.createElement("div");
        const a2_tag = document.createElement("a");
        const h3_tag = document.createElement("h3");
        const span_tag = document.createElement("span");
        const div3_tag = document.createElement("div");

        article_tag.setAttribute("class", "cz_default_loop clr cz_default_loop_grid col s4 post-160 portfolio type-portfolio status-publish format-standard has-post-thumbnail hentry portfolio_cat-sixth-olympiad");
        div_tag.setAttribute("class", "clr");
        a_tag.setAttribute("class", "cz_post_image");
        img_tag.setAttribute("width", "360");
        img_tag.setAttribute("height", "320");
        img_tag.setAttribute("src", "data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20width=&#39;360&#39;%20height=&#39;320&#39;%20viewBox%3D&#39;0%200%20360%20320&#39;%2F%3E");
        img_tag.setAttribute("data-src", data[i].img_src);
        img_tag.setAttribute("class", "attachment-codevz_360_320 size-codevz_360_320 wp-post-image");
        img_tag.setAttribute("alt", "");
        img_tag.setAttribute("decoding", "async");
        div2_tag.setAttribute("class", "cz_post_con");
        a2_tag.setAttribute("class", "cz_post_title");
        h3_tag.innerHTML = data[i].name;
        span_tag.setAttribute("class", "cz_post_meta mt10 mb10");
        div3_tag.setAttribute("class", "cz_post_excerpt");
        div3_tag.innerHTML = data[i].description;

        a_tag.appendChild(img_tag);
        a2_tag.appendChild(h3_tag);
        span_tag.appendChild(div3_tag);
        div2_tag.appendChild(a2_tag);
        div2_tag.appendChild(span_tag);
        div_tag.appendChild(a_tag);
        div_tag.appendChild(div2_tag);
        article_tag.appendChild(div_tag);

        mainContainer.appendChild(article_tag);
    }
}