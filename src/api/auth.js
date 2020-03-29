import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login/token',
    method: 'post',
    data
  })
}

export function getUserInfo(token) {
  return request({
    url: '/api/systemUserInfo/getUserProfile',
    method: 'get'
  })
}

export function getSystemUserList() {
  return request({
    url: '/api/systemUser/getSystemUsers',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
