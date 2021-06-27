import {lazy} from "react";

const Login = lazy(() => import('../views/login').then(Login => ({default: Login})));
const Page404 = lazy(() => import('../views/errors').then(({Page404}) => ({default: Page404})));
const Page500 = lazy(() => import('../views/errors').then(({Page500}) => ({default: Page500})));
const ExamDetail = lazy(() => import('../views/exam-details').then(ExamDetail => ExamDetail));

export const RootPath = {
    PAGE_LOGIN: `/login`,
    EXAM_DETAILS: '/exam-detail',
    PAGE_404: '/404',
    PAGE_500: '/500'
}

const routes = [
    {
        path: RootPath.PAGE_LOGIN,
        component: Login,
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
        isPrivate: false
    },
    {
        path: RootPath.PAGE_500,
        component: Page500,
        exact: false,
        name: '500 Internal Server Error',
        isPrivate: false
    }
];

export default routes;