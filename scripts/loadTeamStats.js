function loadPlayesStats() {
    let team = getQueryVariable('team');
    let players_table = document.getElementById('players-table');
    let players_data = teams[team].players;

    let table_header_row = document.createElement('tr');
    table_header_row.setAttribute('class', 'header');

    let table_header = [];

    for (let i = 0; i < 6; i++) table_header.push(document.createElement('th'));

    table_header[0].innerHTML = 'NAME';
    table_header[1].innerHTML = 'GAMES'
    table_header[2].innerHTML = 'GOALS';
    table_header[3].innerHTML = 'ASSISTS';
    table_header[4].innerHTML = 'YC';
    table_header[5].innerHTML = 'RC';

    table_header[0].setAttribute('class', 'larger');

    for (let j = 0; j < 6; j++) table_header_row.appendChild(table_header[j]);

    players_table.appendChild(table_header_row);

    players_data.forEach(player => {
        let table_row = document.createElement('tr');
        let table_row_data = [];

        for (let k = 0; k < 6; k++) table_row_data.push(document.createElement('td'));

        table_row_data[0].innerHTML = player.name;
        table_row_data[1].innerHTML = player.games;
        table_row_data[2].innerHTML = player.goals;
        table_row_data[3].innerHTML = player.assist;
        table_row_data[4].innerHTML = player.yc;
        table_row_data[5].innerHTML = player.rc;

        table_row_data[0].setAttribute('class', 'larger');

        for (let l = 0; l < 6; l++) table_row.appendChild(table_row_data[l]);

        players_table.appendChild(table_row);
    });

}

function loadTeamStats() {
    let title = document.getElementsByTagName('title')[0];
    let team = getQueryVariable('team');
    let teamIcon = document.getElementById("team-icon");
    let teamName = document.getElementById("team-name");
    let countryName = document.getElementById("country-name");
    let team_stats = [
        document.getElementById("team-goals-scored"),
        document.getElementById("team-goals-conceded"),
        document.getElementById("team-wins"),
        document.getElementById("team-draws"),
        document.getElementById("team-loses"),
        document.getElementById("team-yc"),
        document.getElementById("team-rc")
    ];

    title.innerHTML = "KESL " + teams[team].name + " Statistics";
    
    teamIcon.setAttribute('src', 'imgs/teams/'+team+'.png');
    teamIcon.setAttribute('alt', team);

    teamName.innerHTML = teams[team].name;
    countryName.innerHTML = teams[team].country;

    team_stats[0].innerHTML = teams[team].team_stats.goals_scored;
    team_stats[1].innerHTML = teams[team].team_stats.goals_conceded;
    team_stats[2].innerHTML = teams[team].team_stats.wins;
    team_stats[3].innerHTML = teams[team].team_stats.draws;
    team_stats[4].innerHTML = teams[team].team_stats.loses;
    team_stats[5].innerHTML = teams[team].team_stats.yc;
    team_stats[6].innerHTML = teams[team].team_stats.rc;

    loadPlayesStats();

}