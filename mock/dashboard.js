import Mock from 'mockjs'

const staticData = {
  pound_num: [165, 170, 30],
  device_num: [150, 105, 110],
  index_num: [150, 105, 110],
}
const deviceStaticData = [
  ['养殖场景', '鱼菜共生', '水产养殖', '海水稻'],
  ['运行设备', 41.1, 30.4, 65.1],
  ['关机设备', 86.5, 92.1, 85.7]
]

export default [
  {
    url: '/CAUFishPlatform/dashboard/getIotIndexStatic',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: staticData
      }
    }
  },
  {
    url: '/CAUFishPlatform/dashboard/gotDeviceStatusStatic',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: deviceStaticData
      }
    }
  }
]

