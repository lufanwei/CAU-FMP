import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/workshopInfo/list',
    method: 'get',
    params: query
  })
}

export function fetchWorkshop(id) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/workshopInfo/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/workshopInfo/pv',
    method: 'get',
    params: { pv }
  })
}

export function createWorkshop(data) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/workshopInfo/create',
    method: 'post',
    data
  })
}

export function updateWorkshopInfo(data) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/workshopInfo/update',
    method: 'post',
    data
  })
}
