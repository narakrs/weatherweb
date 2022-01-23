import { AdminHomePage, TaskBoardPage, HomePage,SubjectPage } from './../index';

export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Trang Quản Trị',
    exact: true,
    component: AdminHomePage,
  },
  {
    path: '/subject',
    name: 'Trang Chủ Đề',
    exact: true,
    component: SubjectPage,
  },
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: HomePage,
  },
  {
    path: '/admin/task-board',
    name: 'Quản Lý Công Việc',
    exact: true,
    component: TaskBoardPage,
  },
];
export const ADMIN_LINK = [
  {
    to: '/admin',
    name: 'Trang Quản Trị',
  },
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/admin/task-board',
    name: 'Quản Lý Công Việc',
  },
];
