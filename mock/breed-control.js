import Mock from 'mockjs'

function randomData() {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  };
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}

export default [
  {
    url: '/CAUFishPlatform/breedManage/breedControl/getTodayData',
    type: 'get',
    response: config => {
      const {indexName, todayDate} = config.query

      console.log('服务端收到的参数')
      console.log(indexName)
      console.log(todayDate)
      const lineData = [];

      if (indexName === 'Temperature' || indexName === 'Oxygen') {
        now = +new Date(1997, 9, 3);
        oneDay = 24 * 3600 * 1000;
        value = Math.random() * 1000;
        for (let i = 0; i < 1000; i++) {
          lineData.push(randomData());
        }
      }
      console.log('服务端返回的数据')
      console.log(lineData)
      return {
        code: 20000,
        data: lineData
      }
    }
  },

]

