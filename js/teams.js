var lastRow = null;

function addTeam(position, name, aanvoerder, klas, coach, punten, imgUrl) {
    var teamList = document.getElementsByClassName("teamsList")[0];

    var table;
    if (!hasChildNode(teamList, "table")) {
        table = document.createElement("table");
        teamList.appendChild(table);
    } else {
        table = teamList.getElementsByTagName("table")[0];
    }

    var tbody;
    if (!hasChildNode(table, "tbody")) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    } else {
        tbody = table.getElementsByTagName("tbody")[0];
    }

    var islast = lastRow !== null;
    if (!islast) {
        lastRow = document.createElement("tr");
    }

    var td = document.createElement("td");
    lastRow.appendChild(td);

    var article = document.createElement("article");
    td.appendChild(article);

    var h2 = document.createElement("h2");
    h2.innerHTML = "#" + position + " " + name;
    article.appendChild(h2);

    var content = document.createElement("div");
    content.className = "content";
    article.appendChild(content);

    var img = document.createElement("img");
    img.className = "logo";
    img.src = imgUrl;
    content.appendChild(img);

    var list = document.createElement("ul");
    list.className = "list";
    content.appendChild(list);

    var aanvoerderItem = document.createElement("li");
    aanvoerderItem.innerHTML = "Aanvoerder: " + aanvoerder;
    list.appendChild(aanvoerderItem);

    var klasItem = document.createElement("li");
    klasItem.innerHTML = "Klas: " + klas;
    list.appendChild(klasItem);

    var coachItem = document.createElement("li");
    if (coach !== "") {
        coachItem.innerHTML = "Coach: " + coach;
    } else {
        coachItem.innerHTML = "Coach: -";
    }
    list.appendChild(coachItem);

    var puntenItem = document.createElement("li");
    puntenItem.innerHTML = "Punten: " + punten;
    list.appendChild(puntenItem);

    if (islast) {
        lastRow = null;
    } else {
        tbody.appendChild(lastRow);
    }
}

function hasChildNode(node, nodeName) {
    var childs = node.childNodes;
    for (var i = 0; i < childs.length; i++) {
        var child = childs[i];
        if (child.nodeName.toLocaleLowerCase() === nodeName.toLowerCase()) return true;
    }
    return false;
}