import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue'),
    meta: {
            middleware: "guest"
        }
    
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/HomePage.vue'),
    meta: {
            middleware: "guest"
        }
     
  },
   {
    path: '/courses',
    name: 'courses',
     component: () => import('../views/AllCourses.vue'),
     meta: {
            middleware: "guest"
        }
     
  },
  {
    path: '/courseDetails',
    name: 'courseDetails',
    component: () => import('../views/CourseDetails.vue'),
    meta: {
            middleware: "auth"
        }
     
  },
  
  {
    path: '/videoLesson',
    name: 'videoLesson',
    component: () => import('../views/VideoLesson.vue'),
    meta: {
            middleware: "auth"
        }
    
  
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/QuizSection.vue'),
    meta: {
            middleware: "auth"
        }
     
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
            middleware: "guest"
        }
     
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import('../views/ResetPassword.vue'),
    meta: {
            middleware: "guest"
        }
     
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterPage.vue') ,
    meta: {
            middleware: "guest"
        }
     
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginPage.vue') ,
    meta: {
            middleware: "guest"
        }
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.middleware == "auth") {
        if (store.state.authenticated === true) {
            return next()
        }
        return next({name : 'login'})
    } else {
         return next()
    }
})


export default router
