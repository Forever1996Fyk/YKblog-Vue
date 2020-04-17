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

export function logout(token) {
  return request({
    url: '/api/logout/token?token=' + token,
    method: 'post'
  })
}

export function emailRegistered(data) {
  return request({
    url: '/api/registered/emailRegistered',
    method: 'post',
    data
  })
}

export function sendRegisterEmail(email, userName) {
  return request({
    url: '/api/registered/sendRegisterEmail?email=' + email + '&userName=' + userName,
    method: 'post',
  })
}
