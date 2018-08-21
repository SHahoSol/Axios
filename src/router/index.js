import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CompanyInfo from '@/components/CompanyInfo'
import Departments from '@/components/Departments'
import Files from '@/components/Files'
import Users from '@/components/Users'
import Sensors from '@/components/Sensors'
import GraphIndexes from '@/components/GraphIndexes'
import Charts from '@/components/Charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/companyinfo',
      name: 'Company Info',
      component: CompanyInfo
    },
    {
      path: '/departments',
      name: 'Departments',
      component: Departments
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/sensors',
      name: 'Sensors',
      component: Sensors
    },
    {
      path: '/graphindexes',
      name: 'GraphIndexes',
      component: GraphIndexes
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    }
  ]
})
