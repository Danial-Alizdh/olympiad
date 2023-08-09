var url = API + 'news_items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data['data'].length > 0) {
            appendNews(data['data']);
        }
    });
function appendNews(data) {
    let mainContainer = document.getElementById("news_page");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        data[i] = data[i]['attributes'];
        let article_tag = document.createElement("article");
        let div_tag = document.createElement("div");
        let div2_tag = document.createElement("div");
        let div3_tag = document.createElement("div");
        let a_tag = document.createElement("a");
        let a2_tag = document.createElement("a");
        let a3_tag = document.createElement("a");
        let img_tag = document.createElement("img");
        let h3_tag = document.createElement("h3");
        let span_tag = document.createElement("span");

        article_tag.setAttribute("class", "cz_default_loop clr cz_post_odd post-5180 post type-post status-publish format-standard has-post-thumbnail hentry category-sixth");
        div_tag.setAttribute("class", "clr");

        a_tag.setAttribute("class", "cz_post_image");
        a_tag.setAttribute("href", "./news/");
        img_tag.setAttribute("decoding", "async");
        img_tag.setAttribute("src", "data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20width=&#39;360&#39;%20height=&#39;320&#39;%20viewBox%3D&#39;0%200%20360%20320&#39;%2F%3E");
        img_tag.setAttribute("data-src",  data[i].image);
        img_tag.setAttribute("title", "");
        img_tag.setAttribute("alt", "");
        img_tag.setAttribute("loading", "lazy");
        img_tag.setAttribute("class", "attachment-codevz_360_320 size-codevz_360_320 wp-post-image");
        img_tag.setAttribute("width", "360");
        img_tag.setAttribute("height", "320");

        div2_tag.setAttribute("class", "cz_post_con");
        a2_tag.setAttribute("class", "cz_post_title");
        a2_tag.setAttribute("href", "./news/");
        h3_tag.innerHTML = data[i].title;

        span_tag.setAttribute("class", "cz_post_inner_meta cz_post_meta mt10 mb10 cz_post_date");
        a3_tag.innerHTML = data[i].date;

        div3_tag.setAttribute("class", "cz_post_excerpt");
        div3_tag.innerHTML = data[i].description;

        span_tag.appendChild(a3_tag);
        a2_tag.appendChild(h3_tag);

        div2_tag.appendChild(a2_tag);
        div2_tag.appendChild(span_tag);
        div2_tag.appendChild(div3_tag);

        a_tag.appendChild(img_tag);
        div_tag.appendChild(a_tag);
        div_tag.appendChild(div2_tag);
        article_tag.appendChild(div_tag);

        mainContainer.appendChild(article_tag);
    }
}