import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/CAUFishPlatform/dataManage/webData/articleManage/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/CAUFishPlatform/dataManage/webData/articleManage/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/CAUFishPlatform/dataManage/webData/articleManage/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/CAUFishPlatform/dataManage/webData/articleManage/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/CAUFishPlatform/dataManage/webData/articleManage/update',
    method: 'post',
    data
  })
}
