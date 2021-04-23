const t1 = [['juventus', 'JUVENTUS'], ['chelsea', 'CHELSEA']]
const t2 = [['inter_milano', 'INTER MILANO'], ['manchester_city', 'MANCHESTER CITY']]
const t3 = [['atalanta', 'ATALANTA'], ['bayern_munchen', 'BAYERN MÜNCHEN']]
const t4 = [['rb_leipzig', 'RB LEIPZIG'], ['liverpool', 'LIVERPOOL']]
const t5 = [['real_madrid', 'REAL MADRID'], ['manchester_united', 'MANCHESTER UNITED']]
const t6 = [['leicester_city', 'LEICESTER CITY'], ['milan', 'MILAN']]
const t7 = [['atletico_madrid', 'ATLÉTICO DE MADRID'], ['arsenal', 'ARSENAL']]
const t8 = [['barcelona', 'BARCELONA'], ['bvb', 'BORUSSIA DORTMUND']]
const t9 = [['tottenham', 'TOTTENHAM HOTSPUR'], ['lille', 'LILLE']]
const t10 = [['sevilla', 'SEVILLA'], ['psg', 'PARIS SAINT-GERMAIN']]


const fixtures = [
    [t1, t2],
    [t3, t4],
[t5, t6],
[t7, t8],
[t9, t10],

[t2, t10],
[t8, t9],
[t6, t7],
[t4, t5],
[t1, t3],

[t3, t2],
[t5, t1],
[t7, t4],
[t9, t6],
[t10, t8],

[t2, t8],
[t6, t10],
[t4, t9],
[t1, t7],
[t3, t5],

[t5, t2],
[t7, t3],
[t9, t1],
[t10, t4],
[t8, t6],

[t2, t6],
[t4, t8],
[t1, t10],
[t3, t9],
[t5, t7],

[t7, t2],
[t9, t5],
[t10, t3],
[t8, t1],
[t6, t4],

[t2, t4],
[t1, t6],
[t3, t8],
[t5, t10],
[t7, t9],

[t9, t2],
[t10, t7],
[t8, t5],
[t6, t3],
[t4, t1],

[t2, t9],
[t7, t10],
[t5, t8],
[t3, t6],
[t1, t4],

[t4, t2],
[t6, t1],
[t8, t3],
[t10, t5],
[t9, t7],

[t2, t7],
[t5, t9],
[t3, t10],
[t1, t8],
[t4, t6],

[t6, t2],
[t8, t4],
[t10, t1],
[t9, t3],
[t7, t5],

[t2, t5],
[t3, t7],
[t1, t9],
[t4, t10],
[t6, t8],

[t8, t2],
[t10, t6],
[t9, t4],
[t7, t1],
[t5, t3],

[t2, t3],
[t1, t5],
[t4, t7],
[t6, t9],
[t8, t10],

[t10, t2],
[t9, t8],
[t7, t6],
[t5, t4],
[t3, t1],

[t2, t1],
[t4, t3],
[t6, t5],
[t8, t7],
[t10, t9]
]

function loadFixtures() {

    
    for (let fx = 0; fx < 90; fx++) {
        let sep = document.getElementById("separator");
        let snode = document.importNode(sep.content, true);

        for (let i = 0; i < 2; i++) {
            let tmplFx = document.getElementById("fixture");
            let node = document.importNode(tmplFx.content, true);

            let f = fixtures[fx];

            let ith = node.getElementById("img-team-home");
            let nth = node.getElementById("name-team-home");
            let ntv = node.getElementById("name-team-visit");
            let itv = node.getElementById("img-team-visit");

            if (ith !== null && ith !== undefined) { 

                let srch = document.createAttribute("src");
                let alth = document.createAttribute("alt");

                srch.value = 'imgs/teams/' + f[0][i][0] + '.png';
                ith.setAttributeNode(srch);
                alth.value = f[0][i][1];
                ith.setAttributeNode(alth);

                nth.innerHTML = f[0][i][1];
                ntv.innerHTML = f[1][i][1];

                let srcv = document.createAttribute("src");
                let altv = document.createAttribute("alt");

                srcv.value = 'imgs/teams/' + f[1][i][0] + '.png';
                itv.setAttributeNode(srcv);
                altv.value = f[1][i][1];
                itv.setAttributeNode(altv);

                document.body.appendChild(node);
            }
        }

        if ((fx + 1) % 5 === 0) {
            document.body.appendChild(snode);
        }
    }
}