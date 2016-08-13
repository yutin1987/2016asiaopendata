const request = require('request');
const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

// const url = 'http://1999.taipei.gov.tw/TCGGetFAQ.ASPX?ArchivesID=212286722';

const data = [];

// function fetchList(idx) {
//   if (idx >= 200) {
//     fs.writeFileSync('./1999taipei2.text', data.join(','));
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
// fetchList(100);

const list = [2154104,2154103,2154102,1856827,1856825,1442671,1147002,916031,916023,915959,915958,915956,915955,915954,915953,915952,915951,915950,915949,914561,914548,914547,914546,179189125,179188646,179187689,179187688,179140120,179013120,179013114,179010978,178999879,178999752,178999273,178996855,178988198,178986243,178967558,178966407,178966406,178966403,178960005,149827694,87003065,72145055,28935573,917741,917740,917739,917737,916284,916281,916138,912959,912958,912956,912921,912920,912917,912910,178773647,178770408,178769324,178768248,178768233,178766491,178764108,178764107,178763292,178763290,178762315,178762307,178758096,178753868,178753341,178752857,178752851,178752375,178752374,178751883,178750901,178749828,178724427,178720457,178717248,178716158,178712097,178710788,178709801,178708795,75240082,7886712,7883947,7883365,7882782,7882196,7882189,7881004,7872789,3699239,3699238,3588833,1763058,1253291,1222457,1152310,1140323,1134581,1134579,1134310,1134308,1134306,1134302,1134297,1134269,1134243,1134239,1134130,1134104,1134087,1134081,1134075,1134072,1134064,1134056,1133479,1133477,1133474,1131690,1102992,1095218,1065650,1065642,1020850,1010137,999660,999659,917643,917473,917472,917471,917470,917469,917468,915632,915631,915628,915626,915623,915622,915616,915615,915614,915613,915610,915608,915601,915599,915598,915594,913755,913754,913753,913751,913750,913749,913748,913747,913746,913745,913744,913743,913742,913741,913740,913692,913691,913690,913689,913688,913687,913686,913685,913684,913683,913682,913681,913680,913679,913664,913662,913660,913659,913657,913656,913655,913654,913653,913652,913650,913618,913617,913616,913615,913614,913613,913612,913611,913610,913609,913264,913263,913261,913260,913259,913015,913008,913007,911878,911877,911876,1645118,999697,913020,913019,913018,913017,913016,913013,913012,913011,913010,913009,913006,913005,913004,178192035,63633258,1009895,918611,917699,177867734,177867733,151478122,151478115,151475875,151475872,151474757,151474755,151473642,151473641,151449010,93850506,79006399,79005714,79005380,71402010,58408350,23167515,11391885,11391884,1917133,1917130,1152370,1113181,1007272,1007270,1007266,1006197,917726,917724,917709,917703,917701,917700,917697,917694,917651,917650,917649,915196,915189,177729195,177723718,177672718,7884534,2072273,177540460,177502933,177501967,28060344,15531731,15525551,2072296,2072267,915212,915195,915190,914833,177332052,177332050,177331574,177329172,68661586,43303177,910973,910940,910939,176658612,4515995,176453418,176449509,176449508,176449507,176449506,176449452,176448756,176448350,176448347,176448346,176448344,176448343,176448342,176448341,176448340,176448339,176448338,176448336,176448279,176447716,176447178,176447177,176447176,176447175,176447173,176447172,176446757,176446013,176446012,176377213,915642,3124397,912919,103096059,102798939,911000,910817,174893213,174893212,174893210,174893206,174893203,174893199,174892054,174892050,174890904,174890899,174890897,912895,912892,173273070,173271924,173271923,173270778,173269632,173269628,173268496,173268488,173263762,173220633,2125454,205928058,172536497,1198962,1198959,178752372,171357335,912934,170611254,96897631,96442847,76514583,76514578,76514411,76514409,170123017,170121953,15524946,15525548,168460371,168460369,168456906,1868561,1868462,1151161,914932,914895,914893,914892,1868422,1868401,1151163,1143795,1143764,914896,914891,914887,914886,914883,914881,914880,914879,914876,914873,914872,914869,914863,914860,914854,914852,914851,914849,913597,913596,913594,913593,913589,913588,913587,913554,913552,913551,913550,913549,913547,913546,913545,913544,913543,913542,913540,913539,913538,913537,913536,913535,913534,913533,913532,913531,913530,913523,913522,913502,913449,164741144,164724068,80039960,911003,164535909,164535908,164535907,164535000,164534756,164534755,164531484,164531311,164531310,164531309,164458112,163773026,1151157,1151156,1151155,1151154,1151152,1151149,1151145,1151139,1151136,1143796,1143780,1143765,1132752,1132745,1132741,1132738,1132736,1132705,1059120,910956,163525753,162544258,162183314,162183312,162183145,162182636,162182635,162181959,162181958,162181955,162181281,162180603,162179928,915081,161017123,161016685,161016444,160972488,159788251,159787568,159787564,159786880,159786878,159786190,159781410,159781406,153668581,1917117,917725,917688,159203469,159202824,196499517,196499516,196499514,196499513,911056,918284,918255,156710605,156710584,156709909,156709906,156709215,156709213,156709212,156709211,156709209,156708518,156708517,156708516,156708515,156708513,156706432,156705737,156705728,156705029,156705024,156704332,156700920,156700918,156700915,156700914,156700911,156700909,156700908,156700904,156700900,156700898,156700172,156699479,156638350,156519017,156519013,156518351,156518324,156517991,156517623,156517622,156516941,156516939,156516938,156516255,156516253,156516251,156515567,156293564,156293563,156293562,156293561,156293560,156293558,156292881,156292879,156292878,65842810,912893,155549758,155549159,155497847,155497843,155497170,155495961,155495812,155495809,155495807,155495133,155495132,155495130,155494456,155494453,155493780,155493779,155493775,155493104,155493101,155493099,155492425,155492423,155492420,93337771,93337523,93337519,93337516,93337512,93337262,93337259,93337258,93337038,93337009,93337008,93337007,93336760,93336758,93336757,93336756,93336755,93336508,93335753,93335750,93335250,93335002,188662,154904266,154120088,154120078,154119394,154118715,154118037,154117352,154116670,154115987,154115306,154114629,154113951,154113943,139744496,153971455,153970227,153969384,153968240,153966928,153963639,153962978,153959692,153958360,1797852,999737,914989,914963,153783199,153714775,153713634,153712504,914968,153449896,153445837,913886,152459044,152457909,1184154,1184153,1184146,1184135,1184134,1184122,1184119,1184118,1180787,1143614,1143601,1143598,914803,914802,914800,914799,914786,914779,914778,913929,152147608,152146514,152143240,152142095,152102367,152102365,152102364,152102362,152101247,152101243,152100422,152100129,152093421,152093419,152093418,84478796,84478795,84478792,84478621,84478445,84478443,84478271,84478095,84478093,84478090,84478088,84477741,84477738,84477735,84477561,84477387,84477385,84477329,84475991,84475644,25586996,11563089,11562798,11562489,7285778,7285777,7285775,7285773,7285766,7285763,7285555,7285305,7285180,7285179,7285178,7285176,7285175,7285025,7285023,7285021,7284755,7284433,7284430,7284429,7284426,188688,188674,910930,151520631,151481475,151481473,151480361,151480360,151479240,151479199,151478119,151478118,151476997,151476996,151476991,151475877,151475876,151474758,151474754,151447882,150179893,149797065,1249364,1249336,1249287,148815990,148815252,148814850,148813725,148812597,4515994,4515993,4515992,4515985,4515984,4515652,4515470,69325010,145792802,145525786,106587069,145155961,144886899,143765630,142906257,142905157,142899622,142899488,142898521,142896308,142896304,142895204,142895202,142895201,142895200,142895199,142894098,142894094,142893920,142892988,140965531,140687717,140577040,128608046,128608045,128607312,128607311,128607036,128606609,128606585,10011271,10011269,9974304,9974281,9973694,140330912,140328726,140327623,140326526,140326522,139744495,138768534,138767427,138690053,138479224,138479150,138479149,138478215,138478044,138478043,138478042,138476938,138476937,138476935,138475830,138475829,138474725,138474724,138473620,138473619,138472744,912911,136650510,136301446,136301443,913586,134738082,132779975,132583714,911067,117625,130276281,38164066,8259903,1141556,1141553,129945540,129737487,128789009,128789008,128788312,128788310,128788308,128786901,128786200,128513941,128465503,128443051,53988954,33775373,33775371,33775143,33775135,33775133,33774540,33774538,33774537,33774535,33774214,33773946,33773944,33773943,33773940,33773939,33773935,33773752,33773616,33773010,33772671,33772415,33772412,33772410,33772409,33772406,33772405,33772402,33772401,33772400,33772161,33771807,33771802,33771801,33771799,33771798,5673523,5673514,1143638,1143637,1143635,1143633,915125,915121,915120,915118,911072,911071,911023,125659448,917648,125271514,123204115,123203023,123203022,123203021,123201927,123201849,123137769,46746357,46746029,42024069,29353858,19345971,2098631,1388824,1369430,1369429,1152516,1135628,1105202,1105201,983584,983572,983570,983568,983566,983565,983563,983554,983553,916913,916909,916830,916829,916827,916826,916822,119690947,119682937,119682769,119682764,119682110,119681671,119681670,119681664,119681663,119680568,119680566,119667419,119667412,119666324,119666318,119666317,119665227,119665221,119665216,119664121,119664115,119663023,119663009,119661914,119658744,119372483,119283075,119283074,119277628,118682353,117805690,117804594,117804593];

let total = 0;
function fetchItem(idx) {
  if (idx >= 1000) {
    fs.writeFileSync(`./1999taipei-data5.json`, JSON.stringify(data));
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
fetchItem(500);
