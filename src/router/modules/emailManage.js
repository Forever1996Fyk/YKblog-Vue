/**
 * Created by YuKai Fan on 2020/3/30
 */
const emailManageRouter = {
  path: 'emailManage',
  component: () => import('@/views/systemManage/index'),
  name: 'emailManage',
  meta: {
    title: 'emailManage',
    roles: ['admin', 'customer', 'tenant']
  },
  children: [
    {
      path: 'emailConfig',
      component: () => import('@/views/systemManage/emailManage/emailConfig'),
      name: 'emailConfig',
      meta: {
        title: 'emailConfig',
        roles: ['admin', 'tenant']
      }
    },
    {
      path: 'emailTemplate',
      component: () => import('@/views/systemManage/emailManage/emailTemplate'),
      name: 'emailTemplate',
      meta: {
        title: 'emailTemplate',
        roles: ['admin', 'tenant']
      }
    },
    {
      path: 'emailLog',
      component: () => import('@/views/systemManage/emailManage/emailLog'),
      name: 'emailLog',
      meta: {
        title: 'emailLog',
        roles: ['admin', 'tenant']
      }
    }
  ]
};

export default emailManageRouter
