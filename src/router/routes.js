import {lazy} from "react";

import {Page404, Page500} from '../views/errors';

const Login = lazy(() => import('../views/login').then(Login => ({default: Login})));
const ExamDetail = lazy(() => import('../views/exam-details').then(ExamDetail => ExamDetail));
const ListExams = lazy(() => import('../views/list-exams').then(ListExams => ListExams));

export const RootPath = {
    PAGE_LOGIN: `/login`,
    LIST_EXAMS: '/list-exams',
    EXAM_DETAILS: '/exam-details',
    PAGE_404: '/404',
    PAGE_500: '/500'
}

const routes = [
    {
        path: RootPath.PAGE_LOGIN,
        component: Login,
        exact: true,
        name: 'Exam',
        isPrivate: false
    },
    {
        path: RootPath.LIST_EXAMS,
        component: ListExams,
        exact: true,
        name: 'Exam',
        isPrivate: true
    },
    {
        path: RootPath.EXAM_DETAILS,
        component: ExamDetail,
        exact: true,
        name: 'Exam',
        isPrivate: true
    },
    {
        path: RootPath.PAGE_404,
        component: Page404,
        exact: false,
        name: 'Page Not Found',
        isPrivate: true
    },
    {
        path: RootPath.PAGE_500,
        component: Page500,
        exact: false,
        name: '500 Internal Server Error',
        isPrivate: true
    }
];

export default routes;
