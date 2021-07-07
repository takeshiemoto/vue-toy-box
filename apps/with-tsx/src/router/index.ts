import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { TaskPage } from '../views/TaskPage';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TaskPage',
    component: TaskPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
