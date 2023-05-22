<template>
  <div>
    <router-link
      class="border m-4 rounded px-4 py-2 hover:bg-white hover:text-black duration-500"
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
