<script setup>
import homeButton from '../assets/components/homeButton.vue'
</script>

<template>
  <body class="h-screen w-screen bg-slate-200 font-sourcecodepro">
    <homeButton />
    <div class="absolute mt-12 ml-2">
      <h1>Debug info:</h1>
      <h1 v-text="'courseTitle: ' + courseTitle"></h1>
      <h1 v-text="'courseUrl: ' + courseUrl"></h1>
      <h1 v-text="'coursePath: ' + coursePath"></h1>
    </div>

    <object
      v-bind:data="coursePath"
      type="application/pdf"
      width="100%"
      height="100%"
      frameborder="0"
    >
      <iframe
        v-bind:src="courseUrl"
        height="100%"
        width="100%"
        allow="autoplay"
      ></iframe>
    </object>
  </body>
</template>

<script>
import courses from '../assets/courses.json'

export default {
  data() {
    return {
      courseTitle: '',
      courseUrl: '',
      coursePath: ''
    }
  },
  async mounted() {
    const route = this.$route.params.courseId
    this.courseTitle = courses[route].courseTitle
    this.courseUrl = courses[route].courseUrl
    this.coursePath = courses[route].coursePath
  }
}
</script>
