var url=API+"games_items/";function appendGames(t){let e=document.getElementById("games_page");e.innerHTML="";for(var a=0;a<t.length;a++){t[a]=t[a].attributes;let s=document.createElement("article"),i=document.createElement("div"),l=document.createElement("a"),n=document.createElement("img"),r=document.createElement("div"),p=document.createElement("a"),d=document.createElement("h3"),c=document.createElement("span"),o=document.createElement("div");s.setAttribute("class","cz_default_loop clr cz_default_loop_grid col s4 post-160 portfolio type-portfolio status-publish format-standard has-post-thumbnail hentry portfolio_cat-sixth-olympiad"),i.setAttribute("class","clr"),l.setAttribute("class","cz_post_image"),n.setAttribute("width","360"),n.setAttribute("height","320"),n.setAttribute("src",t[a].image.replace("http://","https://")),n.setAttribute("class","attachment-codevz_360_320 size-codevz_360_320 wp-post-image"),n.setAttribute("alt",""),n.setAttribute("decoding","async"),r.setAttribute("class","cz_post_con"),p.setAttribute("class","cz_post_title"),d.innerHTML=t[a].name,c.setAttribute("class","cz_post_meta mt10 mb10"),o.setAttribute("class","cz_post_excerpt"),o.innerHTML=t[a].description,l.appendChild(n),p.appendChild(d),c.appendChild(o),r.appendChild(p),r.appendChild(c),i.appendChild(l),i.appendChild(r),s.appendChild(i),e.appendChild(s)}}fetch(url).then(t=>t.json()).then(t=>{void 0!==t.data&&t.data.length>0&&appendGames(t.data)});