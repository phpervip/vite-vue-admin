// src/api/user.js
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data // 参数在body用data
  })
}
// 验证码
export function getCodeImg(params = {}) {
  return request({
    url: '/captcha',
    method: 'get',
    params
  })
}

// 登出
export function logout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}
// 获取用户信息
export function getUserInfo(params) {
  return request({
    url: '/auth/userInfo',
    method: 'get',
    params // 参数在url上用params
  })
}

// 导出表格
export function exportTable(params) {
  return request({
    url: '/xxx/xxxx',
    method: 'get',
    responseType: 'blob', // 自己封装的下载
    params
  })
}
