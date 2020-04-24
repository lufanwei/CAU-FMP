import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {title: '平台首页', icon: 'dashboard', affix: true}
    }]
  },

  {
    path: '/breed-manage',
    component: Layout,
    redirect: 'noRedirect',
    name: 'breedManage',
    meta: {
      title: '养殖管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'breed-info',
        name: 'BreedInfo',
        redirect: 'noRedirect',
        component: () => import('@/views/breedManage/breedInfo/index'), // Parent router-view
        meta: {title: '养殖信息管理'},
        children: [
          {
            path: 'base-info',
            component: () => import('@/views/breedManage/breedInfo/baseInfo/index'),
            meta: {title: '场地信息管理'}
          },
          {
            path: 'aquatic-info',
            component: () => import('@/views/breedManage/breedInfo/aquaticInfo/index'),
            meta: {title: '水产信息管理'}
          }
        ]
      },
      {
        path: 'breed-control',
        component: () => import('@/views/breedManage/breedControl'),
        meta: {title: '养殖控制管理'}
      }
    ]
  },
  {
    path: '/data-manage',
    component: Layout,
    redirect: 'noRedirect',
    name: 'dataManage',
    meta: {
      title: '数据管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'real-time-data',
        name: 'RealTimeData',
        component: () => import('@/views/dataManage/realTimeData'),
        meta: {title: '实时数据管理'}
      },
      {
        path: 'history-data',
        name: 'equipmentInfo',
        component: () => import('@/views/dataManage/historyData'),
        meta: {title: '历史数据管理'}
      },
      {
        path: 'web-data/',
        name: 'WebData',
        redirect: 'noRedirect',
        component: () => import('@/views/dataManage/webData'),
        meta: {title: '互联网数据管理'},
        children: [
          {
            path: 'article-info',
            component: () => import('@/views/dataManage/webData/articleInfo'),
            name: 'ArticleInfo',
            meta: {title: '文章信息'}
          },
          {
            path: 'article-manage',
            component: () => import('@/views/dataManage/webData/articleManage'),
            name: 'articleManage',
            meta: {title: '文章管理'},
          },
          {
            path: '/data-manage/web-data/article-manage/edit/:id(\\d+)',
            component: () => import('@/views/dataManage/webData/articleManage/edit'),
            name: 'editArticle',
            meta: {title: '文章编辑', noCache: true, activeMenu: '/dataManage/webData/articleManage/list'},
            hidden: true
          },
          {
            path: '/data-manage/web-data/article-manage/create',
            component: () => import('@/views/dataManage/webData/articleManage/create'),
            name: 'CreateArticle',
            meta: {title: '创建文章', icon: 'edit'},
            hidden: true
          },
          {
            path: 'scholar-manage',
            component: () => import('@/views/dataManage/webData/scholarManage'),
            name: 'scholarManage',
            meta: {title: '学术管理'},
          },
        ]
      },
      {
        path: 'video-data',
        name: 'VideoData',
        component: () => import('@/views/dataManage/videoData'),
        meta: {title: '视频数据管理'}
      }
    ]
  },
  {
    path: '/device-manage',
    component: Layout,
    redirect: 'noRedirect',
    name: 'deviceManage',
    meta: {
      title: '仪器管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'equipment-info',
        name: 'EquipmentInfo',
        component: () => import('@/views/deviceManage/equipmentInfo'),
        meta: {title: '设备信息管理'}
      },
      {
        path: 'sensor-data',
        name: 'sensorInfo',
        component: () => import('@/views/deviceManage/sensorInfo'),
        meta: {title: '传感器信息管理'}
      }
    ]
  },
  {
    path: '/model-manage',
    component: Layout,
    redirect: 'noRedirect',
    name: 'modelManage',
    meta: {
      title: '模型管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'grow-model',
        name: 'GrowModel',
        component: () => import('@/views/modelManage/growModel'),
        meta: {title: '生长模型管理'}
      },
      {
        path: 'env-warning-model',
        name: 'EnvWarningModel',
        component: () => import('@/views/modelManage/envWarningModel'),
        meta: {title: '环境监测预警模型'}
      },
      {
        path: 'device-control-model',
        name: 'DeviceControlModel',
        component: () => import('@/views/modelManage/deviceControlModel'),
        meta: {title: '设备智能调控模型'}
      },
      {
        path: 'disease-warning-model',
        name: 'DiseaseWarningModel',
        component: () => import('@/views/modelManage/diseaseWarningModel'),
        meta: {title: '病害预警诊断模型'}
      },
      {
        path: 'knowledge-graph-model',
        name: 'KnowledgeGraphModel',
        component: () => import('@/views/modelManage/knowledgeGraphModel'),
        meta: {title: '知识图谱'}
      }
    ]
  },
  {
    path: '/message-manage',
    component: Layout,
    redirect: 'noRedirect',
    name: 'messageManage',
    meta: {
      title: '消息管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'equipment-message',
        name: 'EquipmentMessage',
        component: () => import('@/views/messageManage/equipmentMessage'),
        meta: {title: '设备消息管理'}
      },
      {
        path: 'sensor-message',
        name: 'SensorMessage',
        component: () => import('@/views/messageManage/sensorMessage'),
        meta: {title: '传感器消息管理'}
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {title: 'Example', icon: 'example'},
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: {title: 'Table', icon: 'table'}
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {title: 'Tree', icon: 'tree'}
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: {title: 'Form', icon: 'form'}
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: {title: 'Menu1'},
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: {title: 'Menu1-1'}
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: {title: 'Menu1-2'},
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: {title: 'Menu1-2-1'}
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: {title: 'Menu1-2-2'}
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: {title: 'Menu1-3'}
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: {title: 'menu2'}
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: {title: 'External Link', icon: 'link'}
      }
    ]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
