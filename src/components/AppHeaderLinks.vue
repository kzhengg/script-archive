<script setup lang="ts">

</script>

<template>
  <!-- Header links -->
  <div
    :class="'block'"
    class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300 sm:mx-4 mb-2 sm:py-2"
      aria-label="Home"
      >Home</router-link
    >
    <router-link
      to="/create-snippet"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300 sm:mx-4 mb-2 sm:py-2"
      aria-label="Home"
      >Create a Snippet</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>