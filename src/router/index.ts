import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import Main from '@/modules/main/main.vue';
import Dashboard from '@/pages/Dashboard.vue';
import Dashboard2 from '@/pages/Dashboard2.vue';
import Maps from '@pages/Maps.vue';
import Tables from '@pages/Tables.vue';
import Calendars from '@pages/Calendars.vue';
import Modals from '@pages/Modals.vue'
import DatePickers from '@/pages/DatePickers.vue';
import Cards from '@/pages/Cards.vue';
import LayoutPage from '@/pages/LayoutPage.vue';
import Charts from '@/pages/Charts.vue';
import Buttons from '@pages/Buttons.vue';
import Typographys from '@/pages/Typographys.vue';

const routes: Array<RouteRecordRaw> = [  
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard
            },            
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'dashboard2',
                component: Dashboard2
            },
            {
                path: 'maps',
                component: Maps
            },
            {
                path: 'tables',
                component: Tables
            },
            {
                path: 'calendars',
                component: Calendars
            },
            {
                path: 'modals',
                component: Modals
            },
            {
                path: "datepickers",
                component: DatePickers
            },
            {
                path: 'cards',
                component: Cards
            },
            {
                path: 'charts',
                component: Charts
            },
            {
                path: 'typographys',
                component: Typographys
            },
            {
                path: 'buttons',
                component: Buttons
            }
        ],        
    } ,
    {
        path: '/layout',
        name: 'Layout',
        component: LayoutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;