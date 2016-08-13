const fs = require('fs');

const data = [].concat(
  require('./1999taipei-data1.json'),
  require('./1999taipei-data2.json'),
  require('./1999taipei-data3.json'),
  require('./1999taipei-data4.json'),
  require('./1999taipei-data5.json')
);

fs.writeFileSync(`./taipei1999.json`, JSON.stringify(data));
