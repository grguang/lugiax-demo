export default {
  '/': {
    render: async () => import('../src/pages/user-list'),
    exact: true,
  },
  '/list': {
    render: async () => import('../src/pages/user-list')
  },
  '/add': {
    render: async () => import('../src/pages/add-user')
  },
  '/404': {
    render: async () => import('../src/access/NotAccess')
  },
}



