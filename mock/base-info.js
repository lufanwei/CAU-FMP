import Mock from 'mockjs'

const List = []
const count = 5

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    charge_people: '@first',
    reviewer: '@first',
    base_name: '@title(1, 4)',
    content_short: 'mock data',
    content: baseContent,
    telphone: '@float(0, 100, 2, 2)',
    'scene|1': ['海水稻', '循环水', '鱼菜共生'],
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['正在使用', '未使用'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }))
}

export default [
  {
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/list',
    type: 'get',
    response: config => {
      const { scene, type, base_name, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (scene && item.scene !== scene) return false
        if (type && item.type !== type) return false
        if (base_name && item.base_name.indexOf(base_name) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

