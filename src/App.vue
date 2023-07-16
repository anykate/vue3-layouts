<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="container">
    <Navbar />
    <main>
      <component :is="$route.meta.layout">
        <router-view />
      </component>
    </main>
  </div>
</template>
