function addResults(position, naam, gespeeld, winst, gelijk, verloren, doelpuntenplus, doelpuntenmin, doelsaldo, punten) {
    var table = document.getElementsByClassName("table-results")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    var tr = document.createElement("tr");
    var naamNode = document.createElement("td");
    naamNode.innerHTML = naam;
    var positionNode = document.createElement("td");
    positionNode.innerHTML = position;
    var gespeeldNode = document.createElement("td");
    gespeeldNode.innerHTML = gespeeld;
    gespeeldNode.className = "number";
    var winstNode = document.createElement("td");
    winstNode.innerHTML = winst;
    winstNode.className = "number";
    var gelijkNode = document.createElement("td");
    gelijkNode.innerHTML = gelijk;
    gelijkNode.className = "number";
    var verlorenNode = document.createElement("td");
    verlorenNode.innerHTML = verloren;
    verlorenNode.className = "number";
    var doelpuntenplusNode = document.createElement("td");
    doelpuntenplusNode.innerHTML = doelpuntenplus;
    doelpuntenplusNode.className = "number";
    var doelpuntenminNode = document.createElement("td");
    doelpuntenminNode.innerHTML = doelpuntenmin;
    doelpuntenminNode.className = "number";
    var doelsaldoNode = document.createElement("td");
    doelsaldoNode.innerHTML = doelsaldo;
    doelsaldoNode.className = "number";
    var puntenNode = document.createElement("td");
    puntenNode.innerHTML = punten;
    puntenNode.className = "number";
    tr.appendChild(positionNode);
    tr.appendChild(naamNode);
    tr.appendChild(gespeeldNode);
    tr.appendChild(winstNode);
    tr.appendChild(gelijkNode);
    tr.appendChild(verlorenNode);
    tr.appendChild(doelpuntenplusNode);
    tr.appendChild(doelpuntenminNode);
    tr.appendChild(doelsaldoNode);
    tr.appendChild(puntenNode);
    tbody.appendChild(tr);
}

function addGame(team1, team1score, team2score, team2, datum) {
    var table = document.getElementsByClassName("table-games")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    var tr = document.createElement("tr");
    var team1Node = document.createElement("td");
    team1Node.innerHTML = team1;
    var team1scoreNode = document.createElement("td");
    team1scoreNode.innerHTML = team1score;
    team1scoreNode.className = "number";
    var team2scoreNode = document.createElement("td");
    team2scoreNode.innerHTML = team2score;
    team2scoreNode.className = "number";
    var team2Node = document.createElement("td");
    team2Node.innerHTML = team2;
    var datumNode = document.createElement("td");
    datumNode.innerHTML = datum;
    datumNode.className = "number";
    tr.appendChild(team1Node);
    tr.appendChild(team2Node);
    tr.appendChild(team1scoreNode);
    tr.appendChild(team2scoreNode);
    tr.appendChild(datumNode);
    tbody.appendChild(tr);
}

function addRowGame(text) {
    var table = document.getElementsByClassName("table-games")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.colSpan = 5;
    td.innerText = text;
    td.className = "round";
    tr.appendChild(td);
    tbody.appendChild(tr);
}