const teams = {
    'arsenal': 'ARSENAL - ENG',
    'atalanta': 'ATALANTA - ITA',
    'atletico_madrid': 'ATLÉTICO DE MADRID - SPA',
    'barcelona': 'BARCELONA - SPA',
    'bayern_munchen': 'BAYERN MÜNCHEN - GER',
    'bvb': 'BORUSSIA DORTMUND - GER',
    'chelsea': 'CHELSEA - ENG',
    'inter_milano': 'INTER MILANO - ITA',
    'juventus': 'JUVENTUS - ITA',
    'leicester_city': 'LEICESTER CITY - ENG',
    'lille': 'LILLE - FRA',
    'liverpool': 'LIVERPOOL - ENG',
    'manchester_city': 'MANCHESTER CITY - ENG',
    'manchester_united': 'MANCHESTER UNITED - ENG',
    'milan': 'MILAN - ITA',
    'psg': 'PARIS SAINT-GERMAIN - FRA',
    'rb_leipzig': 'RB LEIPZIG - GER',
    'real_madrid': 'REAL MADRID - SPA',
    'sevilla': 'SEVILLA - SPA',
    'tottenham': 'TOTTENHAM HOTSPUR - ENG'
}


const stands = [
    {
        "name": "GROUP A",
        "type": "group",
        "stands": [
            {
                "id": "juventus",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "inter_milano",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "atalanta",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "rb_leipzig",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "real_madrid",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "leicester_city",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "atletico_madrid",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "barcelona",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "tottenham",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "sevilla",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        "name": "GROUP B",
        "type": "group",
        "stands": [
            {
                "id": "chelsea",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "manchester_city",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "bayern_munchen",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "liverpool",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "manchester_united",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "milan",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "arsenal",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "bvb",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "lille",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            },
            {
                "id": "psg",
                "stats": [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    }
]

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

    table_header[0].setAttribute('class', 'larger')

    let table_header_row = document.createElement('tr');
    table_header_row.setAttribute('class', 'header')

    table_header.forEach(h => {
        table_header_row.appendChild(h);    
    });

    table.appendChild(table_header_row);

    group_stands.forEach(st => {
        console.log(st);
        let row = document.createElement('tr');

        let table_row = [];

        for (let i = 0; i < 8; i++) {
            table_row.push(document.createElement('td'))
        }
    
        table_row[0].innerHTML = teams[st.id];
        table_row[0].setAttribute('class', 'larger')

        for (let j = 0; j < 7; j++) {
            table_row[j+1].innerHTML = st.stats[j];
        }

        for (let k = 0; k < 8; k++) {
            row.appendChild(table_row[k]);
        }
        table.appendChild(row);

    });

    board.appendChild(table);
}

function loadStandings() {
    let sName = document.getElementById("stand-name");
    sName.innerHTML = stands[page].name;

    let stb = document.getElementById("stands-board");
    stb.innerHTML = ''

    if (stands[page].type == "group") loadGroupStandings(stands[page].stands.sort(function(a, b) { return b-a; }), stb);
}