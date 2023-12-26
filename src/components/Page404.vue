  <script setup lang="ts">
  </script>


<template>
    <div class="not-found-container">
      <h1>Oops!</h1>
      <p>The page you're looking for can't be found.</p>
      <router-link to="/" class="home-link">Go Back Home</router-link>
    </div>
  </template>
  
  
  <style scoped>
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  h1 {
    font-size: 2em;
    color: #333;
  }
  
  p {
    color: #666;
    margin: 1em 0;
  }
  
  .home-link {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .home-link:hover {
    background-color: #45a049;
  }
  </style>
  