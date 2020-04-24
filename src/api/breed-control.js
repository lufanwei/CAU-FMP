import request from '@/utils/request'

export function getRealTimeData(query) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedControl/getRealTimeData',
    method: 'get',
    params: query

  })
}

export function getTodayData(query) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedControl/getTodayData',
    method: 'get',
    params: query
  })
}


