/**
 * Created by YuKai Fan on 2020/3/16
 */
import Layout from '@/layout'

const workflowRouter = {
  path: '/workflowManage',
  component: Layout,
  redirect: '/workflowManage/workflow/modelList',
  alwaysShow: true,
  name: 'WorkflowManage',
  meta: {
    title: 'WorkflowManage',
    icon: 'workflow',
    roles: ['admin', 'customer', 'register']
  },
  children: [
    {
      path: 'workflow',
      component: () => import('@/views/workflowManage/index'),
      name: 'workflow',
      meta: {
        title: 'workflow'
      },
      children: [
        {
          path: 'modelerDesign/:id(\\d+)',
          component: () => import('@/views/workflowManage/workflow/modelerDesign'),
          name: 'modelerDesign',
          meta: {
            title: 'modelerDesign',
            roles: ['admin', 'customer', 'register']
          },
          hidden: true
        },
        {
          path: 'modelList',
          component: () => import('@/views/workflowManage/workflow/modelList'),
          name: 'modelList',
          meta: {
            title: 'modelList',
            roles: ['admin', 'customer', 'register']
          }
        },
        {
          path: 'processList',
          component: () => import('@/views/workflowManage/workflow/processList'),
          name: 'processList',
          meta: {
            title: 'processList',
            roles: ['admin', 'customer', 'register']
          }
        },
        // {
        //   path: 'runningProcessList',
        //   component: () => import('@/views/workflowManage/workflow/runningProcessList'),
        //   name: 'runningProcessList',
        //   meta: {
        //     title: 'runningProcessList',
        //     roles: ['admin']
        //   }
        // },
        {
          path: 'historyProcessList',
          component: () => import('@/views/workflowManage/workflow/historyProcessList'),
          name: 'historyProcessList',
          meta: {
            title: 'historyProcessList',
            roles: ['admin', 'customer', 'register']
          }
        }
      ]
    },
    {
      path: 'taskManage',
      component: () => import('@/views/workflowManage/index'),
      name: 'taskManage',
      meta: {
        title: 'taskManage'
      },
      children: [
        {
          path: 'upcomingTask',
          component: () => import('@/views/workflowManage/taskManage/upcomingTask'),
          name: 'upcomingTask',
          meta: {
            title: 'upcomingTask',
            roles: ['admin', 'customer', 'register']
          }
        },
        {
          path: 'doneTask',
          component: () => import('@/views/workflowManage/taskManage/doneTask'),
          name: 'doneTask',
          meta: {
            title: 'doneTask',
            roles: ['admin', 'customer', 'register']
          }
        },
        {
          path: 'handleTask',
          component: () => import('@/views/workflowManage/taskManage/handleTask'),
          name: 'handleTask',
          meta: {
            title: 'handleTask',
            roles: ['admin', 'customer', 'register']
          },
          hidden: true
        }
      ]
    },
    {
      path: 'applyApprove',
      component: () => import('@/views/workflowManage/index'),
      name: 'applyApprove',
      meta: {
        title: 'applyApprove'
      },
      children: [
        {
          path: 'userLeave',
          component: () => import('@/views/workflowManage/applyApprove/userLeave'),
          name: 'userLeave',
          meta: {
            title: 'userLeave',
            roles: ['admin', 'customer', 'register']
          }
        },
        {
          path: 'userLeave1',
          component: () => import('@/views/workflowManage/applyApprove/userLeave1'),
          name: 'userLeave',
          meta: {
            title: 'userLeave',
            roles: ['admin', 'customer', 'register']
          }
        }
      ]
    }
  ]
}

export default workflowRouter
