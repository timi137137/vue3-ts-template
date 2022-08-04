import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/index',
    component: Layout,
    name: 'HomeLayout',
    meta: { title: '首页' },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
];
