let teamsIds = [
    'arsenal',
    'atalanta',
    'atletico_madrid',
    'barcelona',
    'bayern_munchen',
    'bvb',
    'chelsea',
    'inter_milano',
    'juventus',
    'leicester_city',
    'lille',
    'liverpool',
    'manchester_city',
    'manchester_united',
    'milan',
    'psg',
    'rb_leipzig',
    'real_madrid',
    'sevilla',
    'tottenham'
]

function show(table, list) {
    list.forEach(player => {
        let row = document.createElement('tr');
        
        let cells = [
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td')
        ];

        cells[0].setAttribute('class', 'larger');

        cells[0].innerHTML = player[0];
        cells[1].innerHTML = player[1];
        cells[2].innerHTML = player[2];

        cells.forEach(cell => {
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

function loadTopStats() {
    let all_players = [];

    teamsIds.forEach(tid => {
        teamsStats[tid].players.forEach(player => {
            if (player.games !== 0 || player.goals !== 0 && player.assist !== 0) {
                all_players.push([player.name, player.games, player.goals, player.assist]);
            }
        });
    });

    let tstb = document.getElementById('ts-table');
    let tatb = document.getElementById('ta-table');

    let ts = [...all_players]
    ts = (ts.sort(function(a,b) { if (b[2] - a[2]) return b[2] - a[2]; else return a[1] - b[1]; }));
    let fTs = [];

    let ta = [...all_players]
    ta = (ta.sort(function(a,b) { if (b[3] - a[3]) return b[3] - a[3]; else return a[1] - b[1]; }));
    let fTa = [];

    for (let i = 0; i < 5; i++) {
        if (ts[i][2] !== 0) 
            fTs.push(ts[i]);
        if (ta[i][3] !== 0) {
            fTa.push(ta[i]);
            fTa[i].splice(2,1);
        }
    }

    show(tstb, fTs);
    show(tatb, fTa);
}