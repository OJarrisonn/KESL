const t1 = ['juventus', 'JUVENTUS']
const t11 =['chelsea', 'CHELSEA']
const t2 = ['inter_milano', 'INTER MILANO']
const t12 = ['manchester_city', 'MANCHESTER CITY']
const t3 = ['atalanta', 'ATALANTA']
const t13 = ['bayern_munchen', 'BAYERN MÜNCHEN']
const t4 = ['rb_leipzig', 'RB LEIPZIG']
const t14 = ['liverpool', 'LIVERPOOL']
const t5 = ['real_madrid', 'REAL MADRID']
const t15 = ['manchester_united', 'MANCHESTER UNITED']
const t6 = ['leicester_city', 'LEICESTER CITY']
const t16 = ['milan', 'MILAN']
const t7 = ['atletico_madrid', 'ATLÉTICO DE MADRID']
const t17 = ['arsenal', 'ARSENAL']
const t8 = ['barcelona', 'BARCELONA']
const t18 = ['bvb', 'BORUSSIA DORTMUND']
const t9 = ['tottenham', 'TOTTENHAM HOTSPUR']
const t19 = ['lille', 'LILLE']
const t10 = ['sevilla', 'SEVILLA']
const t20 = ['psg', 'PARIS SAINT-GERMAIN']


const gs_fixtures = [
[1,
[t7, t8],
[t17, t18],
[t9, t10],
[t19, t20]],

[2, [t2, t10],
[t12, t20],
[t8, t9],
[t18, t19],
[t6, t7],
[t16, t17],
[t4, t5],
[t14, t15],
[t1, t3],
[t11, t13]],

[3, [t3, t2],
[t13, t12],
[t5, t1],
[t15, t11],
[t7, t4],
[t17, t14],
[t9, t6],
[t19, t16],
[t10, t8],
[t20, t18]],

[4, [t2, t8],
[t12, t18],
[t6, t10],
[t16, t20],
[t4, t9],
[t14, t19],
[t1, t7],
[t11, t17],
[t3, t5],
[t13, t15]],

[5, [t5, t2],
[t15, t12],
[t7, t3],
[t17, t13],
[t9, t1],
[t19, t11],
[t10, t4],
[t20, t14],
[t8, t6],
[t18, t16]],

[6, [t2, t6],
[t12, t16],
[t4, t8],
[t14, t18],
[t1, t10],
[t11, t20],
[t3, t9],
[t13, t19],
[t5, t7],
[t15, t17]],

[7, [t7, t2],
[t17, t12],
[t9, t5],
[t19, t15],
[t10, t3],
[t20, t13],
[t8, t1],
[t18, t11],
[t6, t4],
[t16, t14]],

[8, [t2, t4],
[t12, t14],
[t1, t6],
[t11, t16],
[t3, t8],
[t13, t18],
[t5, t10],
[t15, t20],
[t7, t9],
[t17, t19]],

[9, [t9, t2],
[t19, t12],
[t10, t7],
[t20, t17],
[t8, t5],
[t18, t15],
[t6, t3],
[t16, t13],
[t4, t1],
[t14, t11]],

[10, [t2, t9],
[t12, t19],
[t7, t10],
[t17, t20],
[t5, t8],
[t15, t18],
[t3, t6],
[t13, t16],
[t1, t4],
[t11, t14]],

[11, [t4, t2],
[t14, t12],
[t6, t1],
[t16, t11],
[t8, t3],
[t18, t13],
[t10, t5],
[t20, t15],
[t9, t7],
[t19, t17]],

[12, [t2, t7],
[t12, t17],
[t5, t9],
[t15, t19],
[t3, t10],
[t13, t20],
[t1, t8],
[t11, t18],
[t4, t6],
[t14, t16]],

[13, [t6, t2],
[t16, t12],
[t8, t4],
[t18, t14],
[t10, t1],
[t20, t11],
[t9, t3],
[t19, t13],
[t7, t5],
[t17, t15]],

[14, [t2, t5],
[t12, t15],
[t3, t7],
[t13, t17],
[t1, t9],
[t11, t19],
[t4, t10],
[t14, t20],
[t6, t8],
[t16, t18]],

[15, [t8, t2],
[t18, t12],
[t10, t6],
[t10, t16],
[t9, t4],
[t19, t14],
[t7, t1],
[t17, t11],
[t5, t3],
[t15, t13]],

[16, [t2, t3],
[t12, t13],
[t1, t5],
[t11, t15],
[t4, t7],
[t14, t17],
[t6, t9],
[t16, t19],
[t8, t10],
[t18, t20]],

[17, [t10, t2],
[t20, t12],
[t9, t8],
[t19, t18],
[t7, t6],
[t17, t16],
[t5, t4],
[t15, t14],
[t3, t1],
[t13, t11]],

[18, [t2, t1],
[t12, t11],
[t4, t3],
[t14, t13],
[t6, t5],
[t16, t15],
[t8, t7],
[t18, t17],
[t10, t9],
[t20, t19]
]]

var round = 1;

function changeRound(value) {
    round += value;
    if (round < 1) {
        round = 1;
    }
    else if (round > gs_fixtures.length) {
        round = gs_fixtures.length
    }
}

function loadGroupStageFixtures() {
    let rn = document.getElementById("round-name");
    let rb = document.getElementById("round-board");
    rb.innerHTML = ''

    for (let fx = 1; fx < 11; fx++) {
        
            let tmplFx = document.getElementById("fixture");
            let node = document.importNode(tmplFx.content, true);

            let f = gs_fixtures[round-1][fx];

            let ith = node.getElementById("img-team-home");
            let nth = node.getElementById("name-team-home");
            let ntv = node.getElementById("name-team-visit");
            let itv = node.getElementById("img-team-visit");

        if (ith !== null && ith !== undefined) { 

            let srch = document.createAttribute("src");
            let alth = document.createAttribute("alt");

            srch.value = 'imgs/teams/' + f[0][0] + '.png';
            ith.setAttributeNode(srch);
            alth.value = f[0][1];
            ith.setAttributeNode(alth);

            nth.innerHTML = f[0][1];
            ntv.innerHTML = f[1][1];

            let srcv = document.createAttribute("src");
            let altv = document.createAttribute("alt");

            srcv.value = 'imgs/teams/' + f[1][0] + '.png';
            itv.setAttributeNode(srcv);
            altv.value = f[1][1];
            itv.setAttributeNode(altv);

            rb.appendChild(node);
        }
    }
    rn.innerHTML = "Round " + gs_fixtures[round-1][0]
}
