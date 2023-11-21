import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../../src/layout/DashboardLayout.vue'
import HomeView from '../views/HomeView.vue'
import DayOff from '../views/DayOff.vue'
import CVPage from '../views/CVPage.vue'
import CreateEmployee from '../views/CreateEmployee.vue'
import AddSkillsProjects from '../views/AddSkillsProjects.vue'
import ScanEquipment from '../views/ScanEquipment.vue'
import EquipmentList from '../views/EquipmentList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { 
        layout: DashboardLayout,
        pageName: 'Home',
      }
    },
    {
      path: '/cv/:id',
      name: 'cv',
      component: CVPage,
      meta: { 
        layout: DashboardLayout,
        pageName: 'CVPage',
      }
    },
    {
      path: '/day-off',
      name: 'day-off',
      component: DayOff,
      meta: { 
        layout: DashboardLayout,
        pageName: 'Day Off',
      }
    },
    {
      path: '/create-employee',
      name: 'CreateEmployee',
      component: CreateEmployee,
      meta: { 
        layout: DashboardLayout,
      }
    },
    {
      path: '/skills-projects',
      name: 'AddSkillsProjects',
      component: AddSkillsProjects,
      meta: { 
        layout: DashboardLayout,
      }
    },
    {
      path: '/scan',
      name: 'ScanEquipment',
      component: ScanEquipment,
      meta: { 
        layout: DashboardLayout,
      }
    },
    {
      path: '/equipment-list',
      name: 'EquipmentList',
      component: EquipmentList,
      meta: { 
        layout: DashboardLayout,
      }
    },
  ]
})

export default router
