<script setup lang= "ts">
import AppHeaderLinks from "./AppHeaderLinks.vue"

</script>


<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
    >

    <AppHeaderLinks/>
    </div>
  </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-pink-700;
  @apply dark:text-pink-400;
  @apply font-medium;
}
</style>