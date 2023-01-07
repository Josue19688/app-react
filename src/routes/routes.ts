
import { ellipse, square, triangle } from 'ionicons/icons';
import { lazy,LazyExoticComponent} from 'react';



type JSXComponent= React.FC<{}>;

interface Route{
    path:string;
    Component:LazyExoticComponent<JSXComponent>|JSXComponent;
    name:string;
    children?:Route[];
    icon:string;
}


export const routes:Route[]=[
    {
        path:'/home',
        Component:lazy(()=>import(/*webpackChunkName:"LazyLayout"*/'../pages/Home')),
        name:'Home',
        icon:triangle
    },
    {
        path:'/tab1',
        Component:lazy(()=>import(/*webpackChunkName:"LazyLayout"*/'../pages/Tab1')),
        name:'Inicio',
        icon:square
    },
    {
        path:'/tab2',
        Component:lazy(()=>import(/*webpackChunkName:"LazyLayout"*/'../pages/Tab2')),
        name:'Servicios',
        icon:ellipse
    },
    {
        path:'/tab3',
        Component:lazy(()=>import(/*webpackChunkName:"LazyLayout"*/'../pages/Tab3')),
        name:'Favoritos',
        icon:ellipse
    }
]