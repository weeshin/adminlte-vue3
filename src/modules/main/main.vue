<template>
    <Layout :menu-items="menu" :topbar-menu-items="topbarMenuItems">
      <router-view></router-view>
    </Layout>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed, watch} from 'vue';
import Layout from '@/components/layout/Layout.vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

const store = useStore();
const { t } = useI18n();

const menu = [
    {
        name: t('labels.dashboard'),
        path: '/',
        children: [
            {
                name: t('labels.dashboard1'),
                path: 'dashboard'
            },
            {
                name: t('labels.dashboard2'),
                path: 'dashboard2'
            }
        ]
    }, 
    {
        name: t('labels.widgets'),
        children: [
            {
                name: t('labels.calendars'),
                path: '/calendars'
            },
            {
                name: t('labels.maps'),
                path: '/maps'
            }, 
            {
                name: t('labels.tables'),
                path: '/tables'
            },  
            {
                name: t('labels.modals'),
                path: '/modals'
            },
            {
                name: 'DatePickers',
                path: 'datepickers'
            },
            {
                name: t('labels.cards'),
                path: 'cards'
            },
            {
                name: t('labels.charts'),
                path: 'charts'
            },
            {
              name: 'Typography',
              path: 'typographys'
            },
            {
                name: t('labels.buttons'),
                path: 'buttons'
            }                        
        ]
    },
    {
        name: t('labels.layout'),
        children: [
            {
                name: t('labels.layout'),
                path: '/layout'
            }
        ]
    }
];

const topbarMenuItems = [
  {
    name: t("labels.home"),
    path: 'dashboard'
  }
];

</script>
