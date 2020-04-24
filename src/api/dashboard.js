import request from '@/utils/request'

export function getIotIndexStatic() {
  return request({
    url: '/CAUFishPlatform/dashboard/getIotIndexStatic',
    method: 'get',
  })
}

export function getDeviceStatusStatic() {
  return request({
    url: '/CAUFishPlatform/dashboard/gotDeviceStatusStatic',
    method: 'get',
  })
}


