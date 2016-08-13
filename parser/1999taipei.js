const request = require('request');
const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

// const url = 'http://1999.taipei.gov.tw/TCGGetFAQ.ASPX?ArchivesID=212286722';

const data = [];

// function fetchList(idx) {
//   if (idx >= 100) {
//     fs.writeFileSync('./1999taipei.text', data.join(','));
//     return;
//   }
//
//   request(`http://1999.taipei.gov.tw/TCGGetSearch.ASPX?CategoryID=0&CategoryType=Key&KeyList=&PageNo=${idx}&SortOrder=CreateDate%20DESC,%20Subject&adv=N`, function (error, response, body) {
//     console.log('error', error);
//
//     if (!error && response.statusCode == 200) {
//       const list = body
//       .match(/javascript:ShowArchives\('(\d+)'\)/gi)
//       .map(item => {
//         const id = /\d+/gi.exec(item)[0];
//         data.push(id);
//       });
//     }
//
//     setTimeout(() => fetchList(idx + 1), 200);
//   });
// }
// fetchList(0);

const list = [212286722,211933568,211915136,1187030,1187026,1082432,915396,915390,915387,915386,915385,915380,915379,915378,915377,915376,912884,912883,915957,915507,915502,915501,3916859,910934,78236767,72047139,915518,209510168,199573336,131030355,127715392,127715391,127715390,127715389,127715388,111349717,86799941,915494,915452,209171209,209137594,154971221,128464798,128464797,127566885,123175714,107276122,99569717,99569716,99569715,99569714,99569713,99569712,92205581,91865084,91298207,87827873,87010354,87010353,84383115,84383114,84383113,84383112,84383111,84383110,84383109,84383108,84383107,84383106,84383104,84383103,84383102,84383101,84383100,84383099,84383098,84383097,69070681,56575136,45619535,17891976,17887188,915337,915336,915335,915334,915333,915332,915331,915330,915329,915328,915327,915326,915325,915322,915321,915320,915319,915318,915313,208931037,208929866,208929864,208925164,208832283,208832151,208831097,208826958,208826384,208825208,208825205,208824029,208824025,208822853,166327251,166327250,98042223,98042219,98042218,98042217,98042216,98042215,208523375,204939456,204938688,169059176,169059175,166327248,166327247,166327246,166327245,163758780,163758777,111972778,111972777,101497441,96900313,95764486,95764485,95764484,95764483,95764482,95764481,95764480,94782092,92803191,84485410,82352529,78236766,78236765,77556735,76716430,76716429,76716424,68602972,68602971,46508454,1398964,1323719,1006196,915451,915446,915298,915297,915296,915287,915281,915278,915277,915265,915264,915262,207936621,207936620,207852544,207852543,207852542,207852541,207852540,207852539,207852538,161930616,7150736,7150735,7150734,207636958,207636957,207635777,207635775,207581102,199214663,169384050,169384049,169384048,66848348,66848346,66848345,66848337,66848334,66848333,66848330,66848328,66848327,910951,207289709,207273266,207273265,207273264,207273262,207273261,207273260,207273259,207273258,207273257,207273256,207273255,207273254,207273248,207273247,207273246,207273245,207273244,207273243,199552253,199552252,153723748,153723747,153723746,153723745,153723744,153723743,153723742,153723741,153723740,153723739,153723738,153723737,153723736,153492010,153492009,153492008,66848344,66848342,66848340,66848339,66848331,17536604,17536603,17536602,7151557,7150988,7150976,7150732,7150730,7150729,7150728,7150599,7130077,911063,207273263,207273253,207273252,207273251,207273250,207273249,182356937,144601937,144601936,144601933,144601930,144601928,144601926,144601925,144601757,143766753,143766752,143766751,143766750,143766748,143766575,143765677,143765628,143765627,143763407,143763405,143763404,143763403,143763400,143763399,143763398,143763396,143762288,143762286,199214665,184145455,184145454,176190950,166474125,166474124,166474123,166474122,166474121,166474120,166474119,85200623,7129959,206344866,206344865,206344864,206243331,913580,190195699,190111273,187751587,170736761,170736760,170736759,170736758,170736756,170736755,170736754,170736753,170736752,170736751,170736750,170736749,170736748,170736747,170736746,170736745,170736744,170736743,170736742,170736741,170736740,170736739,159257662,159257660,159257659,157314829,189106396,87511414,83900807,83900804,204913684,204660070,151784853,141331845,92124264,87852939,86906015,85225915,85225913,85225912,85225911,85225910,84818744,84818743,84818742,74925598,74925597,74925596,74925595,74925594,74925593,74925592,74925591,74925590,74925589,74925588,74925587,74925586,74925585,74574844,54503855,53857037,53857035,53857034,49681414,49681413,49681412,49681411,49681410,49681409,49681408,49681407,49681406,49681405,49681404,49681403,49681401,49681400,49681399,49681398,49681397,49681396,49681395,49681394,49681393,49681392,49525008,49525007,49525006,49525005,49525004,49525003,49525002,49525001,49525000,49524999,49524998,49524997,49524996,49524995,49524994,49524993,49524992,49524991,49524990,49524989,49193119,49193118,49193117,40791010,40470270,40470268,40470264,40271482,40271479,40271476,26389023,26338332,18367849,18367847,18367846,18367845,18367844,18367843,18367842,18367841,18367839,15209969,15209968,7150866,196839442,196839441,186064655,161787211,161787210,110860809,203999975,188851784,188851783,188851782,188089403,188089402,188089401,188089400,188089399,188089398,188089397,185809052,185809051,185809050,185809049,185809048,185809047,185809046,185809045,185809044,185809043,185809042,185809041,185809040,185809039,185809037,185809036,185809035,185809034,178798634,178731300,178731299,178731298,178731297,178731296,162177904,159210611,159210610,159017093,159017066,159017065,157314830,155167997,102014795,102014794,102014793,95764490,87433530,87433527,87433526,87433524,87433523,87433522,87433518,87433517,87433516,87433515,85927434,85407214,85407213,85407212,85407211,85407209,85407208,85407207,85407205,85407204,85200624,66848336,66260089,46508457,46508453,46508452,36726878,36512464,1323694,915459,915457,915456,915455,915453,68183810,45441644,7150951,204929431,204906646,202652510,179156982,173201123,173201122,162129836,162129835,159404006,159017087,97860036,95764491,95764488,95764487,74537281,74537280,74537279,74537278,74537277,74537276,74537275,74537274,74537273,16638527,16638526,7150654,7150602,202259812,202258684,202207235,159768418,135000393,128110829,116860244,109123027,91865081,91442404,81675723,81675722,65915384,58253282,58253280,53962666,53137847,48056578,36250299,22189003,22189002,19557027,19557026,19557025,19557024,19557023,18227445,18227444,7151355,7151054,7151019,7151018,7151017,7151016,7151014,7151013,7151011,7151010,7151008,7151007,7151006,7151005,7151001,7150608,7150607,201949466,162585040,159017094,159017091,159017090,159017089,159017088,159017086,159017084,159017083,159017078,159017077,159017076,159017071,101842090,184145456,61494443,44407012,1248317,912931,912923,912886,199601374,199601372,199601286,199600198,199569797,1098607,918286,918280,918279,918271,918270,918223,917975,196798935,196797778,196777826,196777824,196777823,196777309,196776654,162330005,123175713,123175711,123098579,86133173,51792520,51792514,915556,196839440,196839439,195847507,195819349,195819348,174427038,174427037,174427036,174427035,174427034,195194441,195194438,195193263,195193261,195192087,195192086,195190910,195190908,195189739,195189738,195188570,174357785,138705550,135630029,68665749,44740917,44740916,44740915,194877158,194876108,194875997,194874830,98509241,98509240,95764489,87852940,59959371,50368866,47124442,194537225,159257661,159017101,159017100,159017098,159017085,159017082,159017081,159017079,159017073,159017072,159017070,158293480,158293479,158293475,158293474,138705551,138705549,138705547,138705546,135630038,135630037,135630036,135630035,135630034,135630030,911024,910993,910990,910989,910979,910935,910929,192846388,192844037,189736959,189736957,189736956,189736955,189736954,189736951,189735792,189735791,189734635,189734634,189734632,189733529,188743602,188742445,96978071,96978070,96978068,96978067,96978066,95983635,95983634,22349876,57538587,57538582,57538573,57538572,57464731,57464717,57464716,4644597,188145873,111683849,912953,187805041,187805038,187804468,187803873,187802712,187800380,187799729,187799217,187793403,187792238,187792230,187498530,187497842,187497841,187495522,917647,917646,917645,917644,38407733,179453213,36016346,36015632,913724,913723,913722,913721,70975545,70975300,1693754,910995,184038806,184038801,184037635,184037633,184037628,184037024,184036456,1143979,184105009,183769642,159210612,135944770,135944769,135944768,120271827,111683858,111683855,111683853,111683850,180668403,69701244,69701114,69700988,69700862,69700860,69700857,69700599,69699702,183002513,1868234,181730286,181399054,181395450,181058722,180704465,180704229,180704225,180703076,180702597,180701921,180701919,180700765,180699610,180697299,180696202,180696145,180693846,180693804,180692693,180691621,180691540,180690340,180688088,162345435,162344757,162342729,911516,179786128,179784994,179784909,179783859,179783858,179782725,179782724,179782722,179770737,179770261,179770260,179770257,179764581,179763693,179763448,179756613,179698489,1152311,917440,917439,917438,917437,917436,917435,917434,917433,917432,917431,917430,917429,917428,917427,917426,917425,917424,917423,917422,917421,917420,917419,917418,917417,917407,917406,917404,917403,917402,917401,917399,917397,917396,917395,917394,917393,917392,917391,917390,917389,917388,917387,917386,917385,917384,917383,917382,917381,917380,917379,917378,917377,917376,917375,917374,917373,917372,917371,917370,917369,917368,917367,917365,917363,917362,917360,917359,917358,917357,917356,917355,917354,917353,917352,917351,917350,917349,917348,917347,917346,917345,917344,917343,917342,917341,917340,917339,917338,917337,917336,917335,917334,917333,917332,917331,917288,179457857,179405359,179405042,179351355,179350205,179350087,179349068,179332664,61493805,38295535,28888277,28888270,27701046,22070597,9339881,9339877,9339874,9338074,9337466,9336854,9336244,9336237,9335633,9335486,9335024,9335019,9334069,7285095,7285017,2154110,2154109,2154108,2154107,2154105];

let total = 0;
function fetchItem(idx) {
  if (idx >= 1000) {
    fs.writeFileSync(`./1999taipei-data4.json`, JSON.stringify(data));
    return;
  }

  request(`http://1999.taipei.gov.tw/TCGGetFAQ.ASPX?ArchivesID=${list[idx]}`, function (error, response, body) {
    console.log('error', error);

    if (!error && response.statusCode == 200) {
      const xml = new DOMParser({
        errorHandler: {
          warning: () => {},
          error: () => {},
          fatalError: () => {},
        },
      }).parseFromString(body);

      const question = xml.getElementById('Label5').textContent;
      const answer = xml.getElementById('Label6').textContent;
      if (question && answer) {
        console.log(list[idx], question);
        total += 1;

        data.push({
          question: question.replace(/\s/gi, ''),
          answer: answer.replace(/\<br\ ?\/>/gi, '\n').replace(/(\r|\n)+/gi, '\n'),
        });
      }
    }

    setTimeout(() => fetchItem(idx + 1), 100);
  });
}
fetchItem(800);
