
import { ellipse, square, triangle } from 'ionicons/icons';
import { lazy,LazyExoticComponent} from 'react';

// import Home from "../pages/Home";
// import Tab1 from '../pages/Tab1';
// import Tab2 from "../pages/Tab2";
// import Tab3 from "../pages/Tab3";

type JSXComponent= React.FC<{}>;

interface Route{
    path:string;
    Component:LazyExoticComponent<JSXComponent>|JSXComponent;
    name:string;
    children?:Route[];
    icon:string;
}

const Tab1=lazy(()=>import(/*webpackChunkName:"Tab1"*/'../pages/Tab1'));
const Tab2=lazy(()=>import(/*webpackChunkName:"Tab2"*/'../pages/Tab2'));
const Tab3=lazy(()=>import(/*webpackChunkName:"Tab3"*/'../pages/Tab3'));
const Home=lazy(()=>import(/*webpackChunkName:"Home"*/'../pages/Home'));

export const routes:Route[]=[
    {
        path:'/tab1',
        Component:Tab1,
        name:'Home',
        icon:triangle
    },
    {
        path:'/tab2',
        Component:Tab2,
        name:'Inicio',
        icon:square
    },
    {
        path:'/tab3',
        Component:Tab3,
        name:'Servicios',
        icon:ellipse
    },
    {
        path:'/home',
        Component:Home,
        name:'Favoritos',
        icon:ellipse
    }
]