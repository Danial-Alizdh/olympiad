var url = 'http://127.0.0.1:8000/results_items/'
fetch(url)
    .then(response => response.json())
    .then(data => {
        appendResults(data);
    });
function appendResults(data) {
    const mainContainer = document.getElementById("results_items");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        const div_tag = document.createElement("div");
        const span_tag = document.createElement("span");
        const i_tag = document.createElement("i");
        const div2_tag = document.createElement("div");
        const div3_tag = document.createElement("div");

        div_tag.setAttribute("class", "elementor-repeater-item-" + data[i].id);
        span_tag.setAttribute("class", "cz_acc_child");
        i_tag.setAttribute("class", "cz-acc-i cz-acc-icon fas " + data[i].game_icon);
        div2_tag.innerHTML = data[i].game_name;

        span_tag.appendChild(i_tag);
        span_tag.appendChild(div2_tag);
        div_tag.appendChild(span_tag);

        div3_tag.setAttribute("class", "cz_acc_child_content clr");
        for (var j = 0; j < data[i].table_title.length; j++) {
            if (data[i].table_title[j] !== "") {
                const p_tag = document.createElement("p");
                const strong_tag = document.createElement("strong");
                strong_tag.innerHTML = data[i].table_title[j] + " :"
                p_tag.appendChild(strong_tag);
                div3_tag.appendChild(p_tag);
            }
            generateTable(div3_tag, data[i].rows[j])
        }
        div_tag.appendChild(div3_tag);
        mainContainer.appendChild(div_tag);
    }
}

function generateTable(div, rows) {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < rows.length; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < rows[i].length; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(rows[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    div.appendChild(tbl);
}