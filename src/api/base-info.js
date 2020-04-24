import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/list',
    method: 'get',
    params: query
  })
}

export function fetchBase(id) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/pv',
    method: 'get',
    params: { pv }
  })
}

export function createBase(data) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/create',
    method: 'post',
    params: { data }
  })
}

export function updateBaseInfo(data) {
  return request({
    url: '/CAUFishPlatform/breedManage/breedInfo/baseInfo/update',
    method: 'post',
    params: { data }
  })
}
