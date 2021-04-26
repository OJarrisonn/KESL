let teams = [['arsenal', 'ARSENAL', 'ENG'],
['atalanta', 'ATALANTA', 'ITA'],
['atletico_madrid', 'ATLÉTICO DE MADRID', 'SPA'],
['barcelona', 'BARCELONA', 'SPA'],
['bayern_munchen', 'BAYERN MÜNCHEN', 'GER'],
['bvb', 'BORUSSIA DORTMUND', 'GER'],
['chelsea', 'CHELSEA', 'ENG'],
['inter_milano', 'INTER MILANO', 'ITA'],
['juventus', 'JUVENTUS', 'ITA'],
['leicester_city', 'LEICESTER CITY', 'ENG'],
['lille', 'LILLE', 'FRA'],
['liverpool', 'LIVERPOOL', 'ENG'],
['manchester_city', 'MANCHESTER CITY', 'ENG'],
['manchester_united', 'MANCHESTER UNITED', 'ENG'],
['milan', 'MILAN', 'ITA'],
['psg', 'PARIS SAINT-GERMAIN', 'FRA'],
['rb_leipzig', 'RB LEIPZIG', 'GER'],
['real_madrid', 'REAL MADRID', 'SPA'],
['sevilla', 'SEVILLA', 'SPA'],
['tottenham', 'TOTTENHAM HOTSPUR', 'ENG']]


function loadTeamsCards() {
    let tg = document.getElementById("teams-grid");

    teams.forEach(t => {
        let tmplTC = document.getElementById("template-team-card");
        let tcNode = document.importNode(tmplTC.content, true);


        let its = document.createAttribute("src");
        let ita = document.createAttribute("alt");

        its.value = 'imgs/teams/' + t[0] + '.png';
        ita.value = t[1];
        
        let img = tcNode.getElementById("team-card-image");
        let h2 = tcNode.getElementById("team-card-name");
        let h3 = tcNode.getElementById("team-card-country");

        img.setAttributeNode(its);
        img.setAttributeNode(ita);

        h2.innerHTML = t[1];
        h3.innerHTML = t[2];

        let div = tcNode.getElementById("team-card");
        div.setAttribute('onclick', 'location.href=\"teams-stats.html?team='+t[0]+'\";')

        tg.appendChild(tcNode);
    });
}