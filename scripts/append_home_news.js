var url=API+"news_items/";function appendHomeNews(t){let e=document.getElementById("home_news");e.innerHTML="";for(var i=t.length-1;i>=0;i--){t[i]=t[i].attributes;let l=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),n=document.createElement("div"),r=document.createElement("a"),d=document.createElement("a"),c=document.createElement("a"),p=document.createElement("img"),u=document.createElement("i"),h=document.createElement("h3"),o=document.createElement("small"),m=document.createElement("span");l.setAttribute("class","cz_grid_item  cz_posts_list_even post-5180 post type-post status-publish format-standard has-post-thumbnail hentry category-sixth"),l.setAttribute("style","position: absolute; right: 0%; top: 0px;"),a.setAttribute("class","clr"),r.setAttribute("class","cz_grid_link cz_grid_zoom_in"),r.setAttribute("href",null===t[i].link?"#":t[i].link),r.setAttribute("title",t[i].title),p.setAttribute("decoding","async"),p.setAttribute("src",t[i].image.replace("http://","https://")),p.setAttribute("loading","lazy"),s.setAttribute("class","cz_grid_details"),u.setAttribute("class","fa czico-109-link-symbol-1 cz_grid_icon"),s.appendChild(u),p.appendChild(s),r.appendChild(p),a.appendChild(r),n.setAttribute("class","cz_grid_details cz_grid_details_outside"),d.setAttribute("class","cz_grid_title"),d.setAttribute("href",null===t[i].link?"#":t[i].link),h.innerHTML=t[i].title,d.appendChild(h),n.appendChild(d),o.setAttribute("class","clr"),m.setAttribute("class","cz_post_data cz_data_date"),c.setAttribute("href",null===t[i].link?"#":t[i].link),c.innerHTML=t[i].date,m.appendChild(c),o.appendChild(m),n.appendChild(o),a.appendChild(n),l.appendChild(a),e.appendChild(l)}}fetch(url).then(t=>t.json()).then(t=>{void 0!==t.data&&t.data.length>0&&appendHomeNews(t.data)});