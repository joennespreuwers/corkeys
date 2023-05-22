<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="text-white">
    <!-- Hero -->
    <div class="h-screen flex container flex-col items-center justify-center">
      <div class="flex flex-row">
        <div class="h-full flex flex-col justify-center">
          <div class="">
            <span
              class="text-6xl w-auto bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-red-500 to-purple-500"
              >corKEYS</span
            >
          </div>
          <p class="mt-6">
            If your test's got you feeling blue, we've got the correction key
            for you!
          </p>
        </div>
        <img
          src="../assets/images/corkeys.svg"
          alt="Image"
          class="w-1/2 animate-pulse"
        />
      </div>
      <fa
        :icon="['fas', 'angles-down']"
        size="2xl"
        class="animate-bounce mt-12"
      />
    </div>

    <!-- Courses -->
    <div class="container flex items-center mt-12 mb-6 flex-col">
      <h1 class="text-4xl mb-2">Courses:</h1>
      <courseButton
        :courseClassFilter="'analyse_deel_1'"
        class="flex flex-col"
      />
      <br />
      <courseButton
        :courseClassFilter="'analyse_deel_2'"
        class="flex flex-col"
      />
      <br />
      <courseButton :courseClassFilter="'complex'" class="flex flex-col" />
      <br />
      <courseButton :courseClassFilter="'matrix'" class="flex flex-col" />
    </div>
  </main>
</template>

<script>
import courseButton from '../assets/components/courseButton.vue'

export default {
  components: {
    courseButton
  }
}
</script>
