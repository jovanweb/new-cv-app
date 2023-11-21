import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../../src/layout/DashboardLayout.vue'
import HomeView from '../views/HomeView.vue'
import DayOff from '../views/DayOff.vue'
import CVPage from '../views/CVPage.vue'
import CreateEmployee from '../views/CreateEmployee.vue'
import AddSkillsProjects from '../views/AddSkillsProjects.vue'
import Test from '../views/Test.vue'

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
      path: '/test',
      name: 'Test',
      component: Test,
      meta: { 
        layout: DashboardLayout,
      }
    },
  ]
})

export default router
