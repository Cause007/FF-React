import Home from '../pages/Home'
import About from '../pages/About'
import Directory from '../pages/Directory'
import Moos from '../pages/Moos'
import Admin from '../pages/Admin'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false
    },
    {
        path: "/About",
        component: About,
        name: "About",
        protected: false
    },
    {
        path: "/Directory",
        component: Directory,
        name: "Directory",
        protected: false
    },
    {
        path: "/Moos",
        component: Moos,
        name: "Moos",
        protected: false
    },
    {
        path: "/Admin",
        component: Admin,
        name: "Admin",
        protected: false
    },
];

export default routes