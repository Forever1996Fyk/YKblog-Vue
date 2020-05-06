/**
 * Created by YuKai Fan on 2020/4/3
 */
const taskManageRouter = {
  path: 'taskManage',
  component: () => import('@/views/systemManage/index'),
  name: 'taskManage',
  meta: {
    title: 'taskManage',
    roles: ['admin', 'customer', 'tenant']
  },
  children: [
    {
      path: 'taskScheduler',
      component: () => import('@/views/systemManage/taskManage/taskScheduler'),
      name: 'taskScheduler',
      meta: {
        title: 'taskScheduler',
        roles: ['admin', 'tenant']
      }
    },
    {
      path: 'taskLog',
      component: () => import('@/views/systemManage/taskManage/taskLog'),
      name: 'taskLog',
      meta: {
        title: 'taskLog',
        roles: ['admin', 'tenant']
      }
    },
  ]
};

export default taskManageRouter
