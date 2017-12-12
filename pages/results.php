<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Atc Eredivisie - Results</title>
        <script src="../js/main.js"></script>
        <script src="../js/results.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <link rel="stylesheet" type="text/css" href="../css/menu.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
              rel="stylesheet">
        <link rel="icon" type="image/png" href="../img/logo_page.png">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>
            table {
                display: block;
                margin: 0 25px;
                border-collapse: collapse;
            }

            tbody {
                display: table;
                width: 100%;
            }

            tbody td, tbody th {
                padding: 5px;
                border-bottom: #311B92 3px solid;
                text-align: left;
            }

            tbody tr:first-child th {
                position: sticky;
                top: 126px;
                padding: 10px 0 0;
                background-color: #E0E0E0;
                border-bottom: 0;
            }

            tbody tr:first-child th div {
                background-color: #AD1457;
                color: white;
                padding: 10px;
            }

            tbody th.number, tbody td.number {
                text-align: right;
            }

            tbody tr:hover {
                background-color: #BDBDBD;
            }

            tr td.round {
                border-bottom: #311B92 3px solid;
                text-align: center;
                font-weight: bold;
                padding: 15px;
            }

            tr:hover td.round {
                background-color: #E0E0E0;
            }
        </style>
    </head>
    <body>
        <header class="top">
            <h1>Atc Eredivisie</h1>
            <div class="menu">
                <a href="home.html">Home</a>
                <a href="teams.php">Teams</a>
                <a class="current" href="results.php">Resultaten</a>
                <a href="cursor.html">Cursor</a>
                <a href="box-shadow.html.html">Box Shadow</a>
            </div>
            <div class="logos">
                <img class="logo_atc" src="../img/logo_atc.jpg">
                <img class="logo_eredivisie" src="../img/logo_eredivisie.jpg">
            </div>
        </header>
        <main>
            <span class="spacing"></span>
            <section>
                <h1>Resultaten</h1>
                <div class="content">
                    <table class="table-results">
                        <tbody>
                            <tr>
                                <th>
                                    <div>Positie</div>
                                </th>
                                <th>
                                    <div>Naam</div>
                                </th>
                                <th class="number">
                                    <div>Gespeeld</div>
                                </th>
                                <th class="number">
                                    <div>Winst</div>
                                </th>
                                <th class="number">
                                    <div>Gelijk</div>
                                </th>
                                <th class="number">
                                    <div>Verloren</div>
                                </th>
                                <th class="number">
                                    <div>Doelpunten+</div>
                                </th>
                                <th class="number">
                                    <div>Doelpunten-</div>
                                </th>
                                <th class="number">
                                    <div>DoelSaldo</div>
                                </th>
                                <th class="number">
                                    <div>Punten</div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h1>Webstrijden</h1>
                <div class="content">
                    <table class="table-games">
                        <tbody>
                            <tr>
                                <th>
                                    <div>Team 1</div>
                                </th>
                                <th>
                                    <div>Team 2</div>
                                </th>
                                <th class="number">
                                    <div>Team 1 Score</div>
                                </th>
                                <th class="number">
                                    <div>Team 2 Score</div>
                                </th>
                                <th class="number">
                                    <div>Datum</div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
        <footer>
            <aside class="left">© Copyright 2017 test123</aside>
            <aside class="right">Made by: Jaspor Majoor, <a href="https://underkoen.nl/">Koen van Staveren</a></aside>
        </footer>
    </body>
</html>
<?php
$servername = "underkoen.nl:3306";
$username = "u22301p18105_test";
$password = "test123";
$dbname = "u22301p18105_atcEredivisie";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "
    SELECT
      Teams.naam,
      Scores.gespeeld,
      Scores.winst,
      Scores.gelijk,
      Scores.verloren,
      Scores.`doelpunten+`,
      Scores.`doelpunten-`,
      Scores.doelsaldo,
      Scores.punten
    FROM Scores
      JOIN Teams ON Teams.nummer = Scores.teamNummer
    ORDER BY -Scores.punten, -Scores.doelsaldo
";

$sql2 = "
    SELECT
      t1.naam AS team1naam,
      g.uitslagTeam1,
      t2.naam AS team2naam,
      g.uitslagTeam2,
      g.datum
    FROM Games g
      JOIN Teams t1 ON t1.nummer = g.team1
      JOIN Teams t2 ON t2.nummer = g.team2
    ORDER BY g.datum
";
$result = $conn->query($sql);
$result2 = $conn->query($sql2);

$pos = 0;
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $naam = $row["naam"];
        $pos = $pos + 1;
        $gespeeld = $row["gespeeld"];
        $winst = $row["winst"];
        $gelijk = $row["gelijk"];
        $verloren = $row["verloren"];
        $doelpuntenplus = $row["doelpunten+"];
        $doelpuntenmin = $row["doelpunten-"];
        $doelsaldo = $row["doelsaldo"];
        $punten = $row["punten"];

        echo "<script>addResults(\"#\"+\"$pos\",\"$naam\", \"$gespeeld\", \"$winst\", \"$gelijk\", \"$verloren\", 
\"$doelpuntenplus\", \"$doelpuntenmin\", \"$doelsaldo\", \"$punten\")</script>";
    }
}

$round = 0;
$i = 3;
if ($result2->num_rows > 0) {
    // output data of each row
    while ($row = $result2->fetch_assoc()) {
        $team1 = $row["team1naam"];
        $team1score = $row["uitslagTeam1"];
        $team2score = $row["uitslagTeam2"];
        $team2 = $row["team2naam"];
        $datum = $row["datum"];

        if ($team1score == null || $team2score == null) {
            $team1score = "-";
            $team2score = "-";
        }

        if ($i == 3) {
            $round = $round + 1;
            $i = 0;
            echo "<script>addRowGame(\"Speelronde $round\")</script>";
        } else {
            $i = $i + 1;
        }

        echo "<script>addGame(\"$team1\", \"$team1score\", \"$team2score\", \"$team2\", \"$datum\")</script>";
    }
}
$conn->close();
?>