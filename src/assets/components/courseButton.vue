<template>
  <div>
    <router-link
      class="bg-slate-600 m-4 rounded px-4 py-2 hover:bg-slate-300 duration-500"
      v-for="(course, key) in filteredCourses"
      :to="'/courses/' + key"
    >
      {{ course.courseTitle }}
    </router-link>
  </div>
</template>

<script>
import courses from '../courses.json'

export default {
  props: {
    courseClassFilter: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      courses
    }
  },
  computed: {
    filteredCourses() {
      // Filter the courses based on courseClass
      return Object.entries(this.courses).reduce((filtered, [key, course]) => {
        if (course.courseClass === this.courseClassFilter) {
          filtered[key] = course
        }
        return filtered
      }, {})
    }
  }
}
</script>
