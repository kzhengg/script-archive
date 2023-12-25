<script setup lang="ts">
</script>

<template>
  <div class="text-center p-20">
    <h1 class="text-4xl font-bold text-gray-800 mb-2">Upload your snippet here!</h1>
    <p class="text-lg text-gray-600 mb-4">Paste any script below, save and share with friends</p>
    <div class="flex flex-col space-y-4 p-4">
    <!-- Textbox for Writing Scripts -->
    <textarea 
        class="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Write your script here...">
    </textarea>

    <!-- File Upload Input -->
    <div class="flex items-center justify-center w-full">
        <label class="flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.7,5.3,10.7.3a1,1,0,0,0-1.4,0L3.3,5.3A1,1,0,0,0,3,6V17a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V6A1,1,0,0,0,16.7,5.3ZM12,16H8V12h4v4Zm1-5H7V6l5-4,5,4v5Z"/>
            </svg>
            <span class="mt-2 text-base leading-normal">Select a file</span>
            <input type='file' class="hidden" />
        </label>
    </div>
</div>

  </div>
</template>


<style scoped>
</style>