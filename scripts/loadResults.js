const team_names = {
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

function loadResults(all) {
    let rBoard = document.getElementById("result-board");
    rBoard.innerHTML = ''

    let toShow = [];

    if (results.length > 5 && !all) {
        toShow.push(results[results.length-5]);
        toShow.push(results[results.length-4]);
        toShow.push(results[results.length-3]);
        toShow.push(results[results.length-2]);
        toShow.push(results[results.length-1]);
    }else{
        toShow = results;
    }
    
    for (let i = toShow.length - 1; i > -1; i--) {
        let result = toShow[i];

        let tmplRr = document.getElementById("result-row");
        let rrNode = document.importNode(tmplRr.content, true);

        let team1 = [
                rrNode.getElementById("img-team1"),
                rrNode.getElementById("name-team1"),
                rrNode.getElementById("goals-team1"),
                rrNode.getElementById("who-team1")
            ];

        let team2 = [
                rrNode.getElementById("img-team2"),
                rrNode.getElementById("name-team2"),
                rrNode.getElementById("goals-team2"),
                rrNode.getElementById("who-team2")
            ];

        team1[0].setAttribute('src', 'imgs/teams/' + result.team1.id + '.png');
        team1[0].setAttribute('alt', team_names[result.team1.id]);
        team1[1].innerHTML = team_names[result.team1.id];
        team1[2].innerHTML = result.team1.goals;
    
        result.team1.who.forEach(guy => {
            team1[3].innerHTML += guy + "; "
        });

        team2[0].setAttribute('src', 'imgs/teams/' + result.team2.id + '.png');
        team2[0].setAttribute('alt', team_names[result.team2.id]);
        team2[1].innerHTML = team_names[result.team2.id];
        team2[2].innerHTML = result.team2.goals;
    
        result.team2.who.forEach(guy => {
            team2[3].innerHTML += guy + "; "
        });

        rBoard.appendChild(rrNode);
    };
}