let teamsNames = {
    'arsenal': 'ARSENAL',
    'atalanta': 'ATALANTA',
    'atletico_madrid': 'ATLÉTICO DE MADRID',
    'barcelona': 'BARCELONA',
    'bayern_munchen': 'BAYERN MÜNCHEN',
    'bvb': 'BORUSSIA DORTMUND',
    'chelsea': 'CHELSEA',
    'inter_milano': 'INTER MILANO',
    'juventus': 'JUVENTUS',
    'leicester_city': 'LEICESTER CITY',
    'lille': 'LILLE',
    'liverpool': 'LIVERPOOL',
    'manchester_city': 'MANCHESTER CITY',
    'manchester_united': 'MANCHESTER UNITED',
    'milan': 'MILAN',
    'psg': 'PARIS SAINT-GERMAIN',
    'rb_leipzig': 'RB LEIPZIG',
    'real_madrid': 'REAL MADRID',
    'sevilla': 'SEVILLA',
    'tottenham': 'TOTTENHAM HOTSPUR'
}

var page = 0;

function changePage(value) {
    page += value;
    if (page < 0) page = 0;

    if (page > stands.length - 1) page = stands.length - 1;
}

function loadGroupStandings(group_stands, board) {
    let table = document.createElement('table');

    let table_header = [];

    for (let i = 0; i < 8; i++) {
        table_header.push(document.createElement('th'));
    }

    table_header[0].innerHTML = "NAME";
    table_header[1].innerHTML = "G";
    table_header[2].innerHTML = "W";
    table_header[3].innerHTML = "D";
    table_header[4].innerHTML = "L";
    table_header[5].innerHTML = "GS";
    table_header[6].innerHTML = "GC";
    table_header[7].innerHTML = "PTS";

    table_header[0].setAttribute('class', 'larger');

    let table_header_row = document.createElement('tr');
    table_header_row.setAttribute('class', 'header');

    table_header.forEach(h => {
        table_header_row.appendChild(h);    
    });

    table.appendChild(table_header_row);

    group_stands.forEach(st => {
        let row = document.createElement('tr');

        let table_row = [];

        for (let i = 0; i < 8; i++) {
            table_row.push(document.createElement('td'));
        }
    
        table_row[0].innerHTML = teamsNames[st.id];
        table_row[0].setAttribute('class', 'larger');

        let cts = teamsStats[st.id].team_stats; // Gets current team stats

        let team_stats = [
            cts.wins + cts.draws + cts.loses, // Gets the amount of games
            cts.wins,
            cts.draws,
            cts.loses,
            cts.goals_scored,
            cts.goals_conceded,
            cts.wins * 3 + cts.draws // Gets the amount of points
        ];

        for (let j = 0; j < 7; j++) {
            table_row[j+1].innerHTML = team_stats[j];
        }

        for (let k = 0; k < 8; k++) {
            row.appendChild(table_row[k]);
        }
        table.appendChild(row);

    });

    board.appendChild(table);
}

function loadKnockoutStandings(ko_stands, board) {
    ko_stands.forEach(stand => {
        let tmplKOS = document.getElementById("knockout-standing");
        let KOSNode = document.importNode(tmplKOS.content, true);

        let t1img = KOSNode.getElementById("img-team1");
        let t1name = KOSNode.getElementById("name-team1");
        let t1goals = KOSNode.getElementById("goals-team1");
        let t2goals = KOSNode.getElementById("goals-team2");
        let t2name = KOSNode.getElementById("name-team2");
        let t2img = KOSNode.getElementById("img-team2");

        t1img.setAttribute('src', 'imgs/teams/' + stand.team1.id + '.png');
        t2img.setAttribute('src', 'imgs/teams/' + stand.team2.id + '.png');

        t1img.setAttribute('alt', teamsNames[stand.team1.id]);
        t2img.setAttribute('alt', teamsNames[stand.team2.id]);

        t1name.innerHTML = teamsNames[stand.team1.id];
        t2name.innerHTML = teamsNames[stand.team2.id];

        t1goals.innerHTML = stand.team1.goals;
        t2goals.innerHTML = stand.team2.goals;

        board.appendChild(KOSNode);
    });
}

function loadStandings() {
    let sName = document.getElementById("stand-name");
    sName.innerHTML = stands[page].name;

    let stb = document.getElementById("stands-board");
    stb.innerHTML = ''

    if (stands[page].type == "group") loadGroupStandings(stands[page].stands.sort(function(a, b) { return b.pts-a.pts; }), stb);
    else if (stands[page].type == "knockout") loadKnockoutStandings(stands[page].stands, stb);
}