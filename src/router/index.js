import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import courses from '../assets/courses.json'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/courses/:courseId',
    name: 'course',
    component: CourseView
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


const getTitle = (courseId) => {
  const title = courses[courseId].courseTitle
  return title
}

router.beforeEach((to, from, next) => {
  const courseId = to.params.courseId
  if (courseId) {
    const title = getTitle(courseId)
    document.title = 'corKEYS | ' + title
  } else {document.title = 'corKEYS'}
  next()
})


export default router
