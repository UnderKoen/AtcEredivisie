<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Atc Eredivisie - Teams</title>
        <script src="js/main.js"></script>
        <script src="js/teams.js"></script>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/menu.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
              rel="stylesheet">
        <link rel="icon" type="image/png" href="img/cursor.png">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>
            section.teams .content .teamsList table tbody tr td {
                width: 40%;
            }

            img.logo {
                max-width: 20%;
                padding: 20px;
            }

            section.teams article .content {
                position: relative;
                height: 175px;
            }

            .list {
                position: absolute;
                top: calc(0.83em + 10px);
                margin-left: 30%;
                width: 70%;
            }
        </style>
    </head>
    <body>
        <header class="top">
            <h1>Atc Eredivisie</h1>
            <div class="menu">
                <a href="home.html">Home</a>
                <a class="current" href="teams.php">Teams</a>
                <a href="results.php">Resultaten</a>
            </div>
        </header>
        <main>
            <span class="spacing"></span>
            <section>
                <h1>Team Foto's</h1>
                <div class="content">
                    <div class="slideshow">
                        <div class="items">
                            <div class="item active">
                                <div class="popup">
                                    <img src="img/Borussia%20Dortmund%20kopie.jpg">
                                    <div class="popup-full">
                                        <i class="material-icons close">clear</i>
                                        <div class="popup-img">
                                            <img src="img/Borussia%20Dortmund%20kopie.jpg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="popup">
                                    <img src="img/FC%20Barcelona%20kopie.jpg">
                                    <div class="popup-full">
                                        <i class="material-icons close">clear</i>
                                        <div class="popup-img">
                                            <img src="img/FC%20Barcelona%20kopie.jpg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="popup">
                                    <img src="img/Real%20Madrid%20kopie.jpg">
                                    <div class="popup-full">
                                        <i class="material-icons close">clear</i>
                                        <div class="popup-img">
                                            <img src="img/Real%20Madrid%20kopie.jpg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="popup">
                                    <img src="img/VVV%20Venlo%20kopie.jpg">
                                    <div class="popup-full">
                                        <i class="material-icons close">clear</i>
                                        <div class="popup-img">
                                            <img src="img/VVV%20Venlo%20kopie.jpg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <i class="material-icons previous" onclick="previousSlideShow(this)">chevron_left</i>
                        <i class="material-icons next" onclick="nextSlideShow(this)">chevron_right</i>
                    </div>
                </div>
            </section>
            <section class="teams">
                <h1>Teams</h1>
                <div class="content">
                    <div class="teamsList">
                    </div>
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
    SELECT Teams.naam, Teams.aanvoerder, Teams.klas, Teams.coach, Scores.punten, Teams.img
    FROM Scores
      JOIN Teams ON Teams.nummer = Scores.teamNummer
    ORDER BY -Scores.punten, -Scores.doelsaldo";
$result = $conn->query($sql);

$pos = 0;
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $pos = $pos+1;
        $naam = $row["naam"];
        $aanvoerder = $row["aanvoerder"];
        $klas = $row["klas"];
        $coach = $row["coach"];
        $punten = $row["punten"];
        $img = $row["img"];
        echo "<script>addTeam($pos, \"$naam\", \"$aanvoerder\", \"$klas\", \"$coach\", $punten, \"$img\")</script>";
    }
}
$conn->close();
?>