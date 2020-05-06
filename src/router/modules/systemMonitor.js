/**
 * Created by YuKai Fan on 2020/4/7
 */
const systemMonitorRouter = {
  path: 'systemMonitor',
  component: () => import('@/views/systemManage/index'),
  name: 'systemMonitor',
  meta: {
    title: 'systemMonitor',
    roles: ['admin', 'customer', 'tenant']
  },
  children: [
    {
      path: 'druidMonitor',
      component: () => import('@/views/systemManage/systemMonitor/druidMonitor'),
      name: 'druidMonitor',
      meta: {
        title: 'druidMonitor',
        roles: ['admin', 'tenant']
      }
    }
  ]
};

export default systemMonitorRouter
