//LAYOUT
import { LayoutAdmin, LayoutBasic } from '../layouts'

//Admin Pages
import { Admin, SignIn } from '../pages/Admin'

//PAGES
import { Home, Contact, Error404 } from '../pages'

const routes = [
    {
        path: "/admin",
        exact: false,
        component: LayoutAdmin,
        routes: [
            {
                path: "/admin",
                component: Admin,
                exact: true,
            },
            {
                path: "/admin/login",
                component: SignIn,
                exact: true,
            },
            {
                component: Error404,
            },
        ]
    },
    {
        path: '/',
        exact: false,
        component: LayoutBasic,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
            },
            {
                path: '/contacto',
                component: Contact,
                exact: true,
            },
            {
                component: Error404
            }
        ]
    }
]

export default routes