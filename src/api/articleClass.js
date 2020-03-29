/**
 * Created by YuKai Fan on 2020/1/13
 */
import request from '@/utils/request'

/**
 * 新增文章分类管理表
 * @param data
 * @returns {AxiosPromise}
 */
export function addArticleClass(data) {
  return request({
    url: '/api/articleClass/addArticleClass',
    method: 'post',
    data
  })
}

/**
 * 根据id查询文章分类管理表
 * @param data
 * @returns {*}
 */
export function getArticleClassById(id) {
  return request({
    url: '/api/articleClass/getArticleClassById',
    method: 'get',
    params: { id }
  })
}

/**
 * 更新文章分类管理表
 * @param data
 */
export function editArticleClass(data) {
  return request({
    url: '/api/articleClass/editArticleClass',
    method: 'put',
    data
  })
}

/**
 * 根据id删除文章分类管理表
 * @param data
 */
export function delArticleClass(id) {
  return request({
    url: '/api/articleClass/delArticleClass',
    method: 'delete',
    params: { id }
  })
}

/**
 * 根据ids批量删除文章分类管理表
 * @param data
 */
export function delArticleClassByIds(ids) {
  return request({
    url: '/api/articleClass/delArticleClass/' + ids,
    method: 'delete'
  })
}

/**
 * 获取所有的文章分类管理表(不分页)
 * @param data
 * @returns {*}
 */
export function getArticleClassesNoPage(data) {
  return request({
    url: '/api/articleClass/getArticleClasses/noPage',
    method: 'get',
    params: data
  })
}

/**
 * 获取所有文章分类管理表
 * @param data
 * @returns {*}
 */
export function getArticleClasses(data) {
  return request({
    url: '/api/articleClass/getArticleClasses',
    method: 'get',
    params: data
  })
}
