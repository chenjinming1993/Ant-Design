export default {
    singular: true,
    dva: {},
    antd: {},
    // umi routes: https://umijs.org/zh-CN/docs/routing
    routes: [
        {
            path: '/',
            component: './HelloWorld'
        },
        {
            path: '/register',
            component: './user/Register/register'
        },
        {
            path: '/login',
            component: './user/Login/login'
        }
    ]
};