var lastRow = null;

function addTeam(position, name, aanvoerder, klas, coach, imgUrl) {
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

    var h1 = document.createElement("h1");
    h1.innerHTML = "#" + position + " " + name;
    article.appendChild(h1);

    var content = document.createElement("div");
    content.className = "content";
    article.appendChild(content);

    var img = document.createElement("img");
    img.className = "logo";
    img.src = imgUrl;
    content.appendChild(img);

    var list = document.createElement("div");
    list.className = "list"
    content.appendChild(list);

    var itemImg = document.createElement("img");
    itemImg.src = "img/list-ball.png";

    var aanvoerderItem = document.createElement("span");
    aanvoerderItem.className = "item";
    list.appendChild(aanvoerderItem);
    aanvoerderItem.appendChild(itemImg);

    var aanvoerderNode = document.createElement("span");
    aanvoerderNode.innerHTML = aanvoerder;
    aanvoerderItem.appendChild(aanvoerderNode);

    itemImg = document.createElement("img");
    itemImg.src = "img/list-ball.png";

    var klasItem = document.createElement("span");
    klasItem.className = "item";
    list.appendChild(klasItem);
    klasItem.appendChild(itemImg);

    var klasNode = document.createElement("span");
    klasNode.innerHTML = klas;
    klasItem.appendChild(klasNode);

    itemImg = document.createElement("img");
    itemImg.src = "img/list-ball.png";

    var coachItem = document.createElement("span");
    coachItem.className = "item";
    list.appendChild(coachItem);
    coachItem.appendChild(itemImg);

    var coachNode = document.createElement("span");
    coachNode.innerHTML = coach;
    coachItem.appendChild(coachNode);

    if (islast) {
        lastRow = null;
    } else  {
        tbody.appendChild(lastRow);
    }
}

function hasChildClass(node, className) {
    var childs = node.childNodes;
    for (var i = 0; i < childs.length; i++) {
        var child = childs[i];
        if  (child.classList.contains(className)) return true;
    }
    return false;
}

function hasChildNode(node, nodeName) {
    var childs = node.childNodes;
    for (var i = 0; i < childs.length; i++) {
        var child = childs[i];
        if  (child.nodeName.toLocaleLowerCase() === nodeName.toLowerCase()) return true;
    }
    return false;
}