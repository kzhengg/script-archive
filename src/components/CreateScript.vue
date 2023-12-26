<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const snippetContent = ref('');

const router = useRouter()

const createSnippet = async () => {
    const response = await fetch('http://localhost:3000/api/snippets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: snippetContent.value }),
    });

    const createdSnippet = await response.json();
    router.push(`${createdSnippet.slug}`);
};
</script>

<template>
  <div class="text-center p-20">
    <h1 class="text-4xl font-bold text-gray-800 mb-2">Upload your snippet here!</h1>
    <p class="text-lg text-gray-600 mb-4">Paste any script below, save and share with friends</p>
    <div class="flex flex-col space-y-4 p-4">
      <textarea 
        v-model="snippetContent"
        class="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Write your script here...">
      </textarea>
      <!-- Rest of your code for file upload input -->
    </div>
    <button @click="createSnippet" class="w-48 px-6 py-3 bg-green-500 text-white rounded-md shadow hover:bg-green-600">Create Snippet</button>
  </div>
</template>

<style scoped>
</style>
