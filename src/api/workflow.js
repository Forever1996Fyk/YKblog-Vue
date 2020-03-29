/**
 * Created by YuKai Fan on 2020/1/13
 */
import request from '@/utils/request'

/**
 * 新增系统用户表
 * @param data
 * @returns {AxiosPromise}
 */
export function createNewModel(data) {
  return request({
    url: '/workflow/api/activiti/createNewModel',
    method: 'post',
    data
  })
}

/**
 * 根据id删除系统用户表
 * @param data
 */
export function delModel(id) {
  return request({
    url: '/workflow/api/activiti/delModel',
    method: 'delete',
    params: { id }
  })
}

/**
 * 根据id删除系统用户表
 * @param data
 */
export function delModelByIds(ids) {
  return request({
    url: '/workflow/api/activiti/delModel/' + ids,
    method: 'delete'
  })
}

/**
 * 获取所有的模型列表(不分页)
 * @param data
 * @returns {*}
 */
export function getModelsNoPage(data) {
  return request({
    url: '/workflow/api/activiti/getModels/noPage',
    method: 'get',
    params: data
  })
}

/**
 * 获取所有的模型列表(分页)
 * @param data
 * @returns {*}
 */
export function getModels(data) {
  return request({
    url: '/workflow/api/activiti/getModels',
    method: 'get',
    params: data
  })
}

/**
 * 同步数据到activit表中
 * @returns {AxiosPromise}
 */
export function synchronizeData() {
  return request({
    url: '/workflow/api/activiti/synchronizeData',
    method: 'post'
  })
}

/**
 * 根据模型id部署
 * @param data
 * @returns {AxiosPromise}
 */
export function deployByModelId(data) {
  return request({
    url: '/workflow/api/activiti/deployByModelId/' + data,
    method: 'post'
  })
}

/**
 * 流程管理列表
 * @param data
 * @returns {AxiosPromise}
 */
export function getActProcessDeploys(data) {
  return request({
    url: '/workflow/api/activiti/getProcessDeploys',
    method: 'get',
    params: data
  })
}

/**
 * 根据流程部署id启动流程
 * @param deploymentId
 * @returns {AxiosPromise}
 */
export function startProcess(deploymentId) {
  return request({
    url: '/workflow/api/activiti/startProcess/' + deploymentId,
    method: 'post'
  })
}

/**
 * 根据流程实例id激活流程
 * @param deploymentId
 * @returns {AxiosPromise}
 */
export function activateProcess(processInstanceId) {
  return request({
    url: '/workflow/api/activiti/activateProcess/' + processInstanceId,
    method: 'post'
  })
}

/**
 * 根据流程实例id挂起流程
 * @param deploymentId
 * @returns {AxiosPromise}
 */
export function pendProcess(processInstanceId) {
  return request({
    url: '/workflow/api/activiti/pendProcess/' + processInstanceId,
    method: 'post'
  })
}

/**
 * 根据流程实例id删除流程示例
 * @param deploymentId
 * @returns {AxiosPromise}
 */
export function deleteProcessInstance(data) {
  return request({
    url: '/workflow/api/activiti/deleteProcessInstance',
    method: 'delete',
    params: data
  })
}

/**
 * 历史流程管理列表
 * @param data
 * @returns {AxiosPromise}
 */
export function getHistoryProcess(data) {
  return request({
    url: '/workflow/api/activiti/getHistoryProcess',
    method: 'get',
    params: data
  })
}
